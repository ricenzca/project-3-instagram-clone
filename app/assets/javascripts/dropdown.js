function loadDropDown () {
	console.log("dropdown!");
	document.getElementById("search").addEventListener("keyup", e => {
				clearSearchDropdown();
        let timeout;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(eventHandler, 500);
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
		setTimeout(clearSearchDropdown, 400);
		searchIconContainer.style.visibility = "visible";
	})
	searchIconContainer.addEventListener("click", searchIconEventHandler);
}

function eventHandler () {
	let queryField = document.getElementById("search");
	let query = queryField.value;
	console.log("query",query);
	ajaxForDropdown(queryField.value);
}

function ajaxForDropdown(query) {
	console.log("search!")	
	fetch(`/search/${query}`)
	.then( res => {
		return res.json();
	})
	.then(json => {
		console.log("json",json);
		let resultContainer = document.getElementById("results-container");
		console.log("resultContainer",resultContainer);
		if (json.results.length) {
			// console.log("json[0].username",json[0].username);
			// console.log("json[0].name",json[0].name);
			
			for (i=0; i<json.results.length; i++) {
				console.log("i",i)
				let singleResultLink = document.createElement("a");
				singleResultLink.className = "result-link";
				singleResultLink.href = `/users/${json.results[i].id}`;
				let usernameContainer = document.createElement("div");
				let nameContainer = document.createElement("div");
				usernameContainer.innerHTML = capitalize(json.results[i].username);
				nameContainer.innerHTML = json.results[i].name;

				const avatarContainer = document.createElement("div");
				avatarContainer.className = "avatar";

				const avatarImage = document.createElement("img");

				console.log("json avatar", json.avatar);

				const avatarPresent = json.avatar.filter(item => {
					return item["user_id"] === json.results[i].id;
				})

				if (avatarPresent.length>0) {
					console.log("avatarPresent",avatarPresent);
					avatarImage.src = `https://res.cloudinary.com/dvaat1mxu/image/upload/v1557478671/${avatarPresent[0]["public_id"]}.jpg`;
				} else {
					avatarImage.src = `/assets/default-avatar-5247b57a5a9a7f8497981e8500454f5aa614940fce5b4fc321e245c043125319.png`;
				}

				avatarContainer.appendChild(avatarImage);
				singleResultLink.appendChild(avatarContainer);

				const namesContainer = document.createElement("div");
				namesContainer.className = "names-container";

				namesContainer.appendChild(usernameContainer);
				namesContainer.appendChild(nameContainer);

				singleResultLink.appendChild(namesContainer);
				clearSearchDropdown();
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
	console.log("clear dropdown");
	let resultContainer = document.getElementById("results-container");
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
}


function capitalize (word) {
  if (typeof word !== 'string') return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}