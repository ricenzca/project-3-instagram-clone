window.addEventListener('DOMContentLoaded', () => {
    console.log("post-show js!");

    document.querySelectorAll(".show-like-button").forEach(item => item.addEventListener("click", (showRefreshLikes)));
})

function showRefreshLikes () {
	console.log("clicked!",this);
	const likesTextContainer = this.parentNode.parentNode.parentNode.parentNode.children[2];
	console.log("likesTextContainer",likesTextContainer);
	let likesText = likesTextContainer.innerHTML;
	console.log("likesText",likesText);
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