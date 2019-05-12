window.onload = function () {
	console.log("loaded!");
	loadDropDown();

	document.querySelectorAll(".like-button").forEach(item => item.addEventListener("click", (refreshLikes)));
}

function refreshLikes () {
	console.log("clicked!");
	let likesText = this.parentElement.parentElement.children[0].innerText;
	const arr = likesText.split(" ");

	const clickedHeart = this.children[0].className;

	if (clickedHeart === "fas fa-heart red-heart" || clickedHeart === "fas fa-heart red-heart clickedHeart") {
		this.children[0].className = "far fa-heart clickedHeart";

		if (arr[0] == "1") {
			arr[0] = `${parseInt(arr[0])-1}`;
			arr[1] = "Likes"
		} else if (arr[0] == "2") {
			arr[0] = `${parseInt(arr[0])-1}`;
			arr[1] = "Like";
		} else {
			arr[0] = `${parseInt(arr[0])-1}`;
			arr[1] = "Likes";
		}
		this.parentElement.parentElement.children[0].innerText = arr.join(" ");
		// console.log("likesText",likesText);

	} else {
		this.children[0].className = "fas fa-heart red-heart clickedHeart";
		if (arr[0] == "0") {
			arr[0] = `${parseInt(arr[0])+1}`;
			arr[1] = "Like";
		} else {
			arr[0] = `${parseInt(arr[0])+1}`;
			arr[1] = "Likes";
		}
		this.parentElement.parentElement.children[0].innerText = arr.join(" ");
		// console.log("likesText",likesText);
	}
}