function loadDropDown () {
	console.log("dropdown!");
	document.getElementById("search").addEventListener("keyup", e => {
        let timeout;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(eventHandler, 500);
        if (e.keyCode == 8){
            clearSearchDropdown();
        }
    });
    document.querySelector(".search-icon-container").addEventListener("click", searchIconEventHandler);
    document.getElementById("search").value = "";
}

function searchIconEventHandler() {
	this.style.visibility = "hidden";
	const searchBar = document.getElementById("search");
	searchBar.focus();
	const searchIconContainer = document.querySelector(".search-icon-container")

	searchBar.addEventListener("blur", () => {
		searchBar.value = "";
		setTimeout(clearSearchDropdown, 100);
		searchIconContainer.style.visibility = "visible";
	})
	searchIconContainer.addEventListener("click", searchIconEventHandler);
}

function addSearchIconBack () {

}

function eventHandler () {
	clearSearchDropdown()
	let queryField = document.getElementById("search");
	let query = queryField.value;
	console.log("query",query);
	ajaxForDropdown(queryField.value);
}
	
	// const searchContainer = document.querySelector(".input-group")
	// let select = document.createElement("select");
	// select.id = "select";
	// let option = document.createElement("option");
	// option.innerHTML = "option";
	// option.value = "blah";
	// select.appendChild(option);
	// searchContainer.appendChild(select);
	// console.log("appended!");

function ajaxForDropdown(query) {
	console.log("search!")	
	fetch(`/search/${query}`)
	.then( res => {
		return res.json();
	})
	.then(json => {
		// console.log(json);
		let resultContainer = document.getElementById("results-container");
		if (json.length) {
			// console.log("json[0].username",json[0].username);
			// console.log("json[0].name",json[0].name);
			
			for (i=0; i<json.length; i++) {
				console.log("i",i)
				let singleResultLink = document.createElement("a");
				singleResultLink.className = "result-link";
				singleResultLink.href = `/users/${json[i].id}`;
				let usernameContainer = document.createElement("div");
				let nameContainer = document.createElement("div");
				usernameContainer.innerHTML = capitalize(json[i].username);
				nameContainer.innerHTML = json[i].name;
				singleResultLink.appendChild(usernameContainer);
				singleResultLink.appendChild(nameContainer);
				resultContainer.appendChild(singleResultLink);
			}
		} else {
			let singleResultContainer = document.createElement("div");
			singleResultContainer.innerHTML = "No results found";
			resultContainer.appendChild(singleResultContainer);
		}

	})
}

function clearSearchDropdown(){
	let resultContainer = document.getElementById("results-container");
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
}


function capitalize (word) {
  if (typeof word !== 'string') return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}