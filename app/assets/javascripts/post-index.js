window.onload = function () {
	console.log("post-index js!");
	loadDropDown();

	document.querySelectorAll(".like-button").forEach(item => item.addEventListener("click", (refreshLikes)));
}

function refreshLikes () {
	console.log("clicked!",this);
	const likesTextContainer = this.parentNode.parentNode.parentNode.parentNode.children[1];
	console.log("likesTextContainer",likesTextContainer);
	let likesText = likesTextContainer.innerHTML;
	console.log("likesText",likesTextContainer);
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
		likesTextContainer.innerText = arr.join(" ");
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
		likesTextContainer.innerText = arr.join(" ");
		// console.log("likesText",likesText);
	}
}