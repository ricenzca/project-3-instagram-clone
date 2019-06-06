window.addEventListener('DOMContentLoaded', () => {
    console.log("post-show-comments.js");
    const showCommentInput = document.querySelector("#komment_show_komment");
    console.log("showCommentInput",showCommentInput);
    if (showCommentInput) {
        console.log("showCommentInput valid!!");
        showCommentInput.value = "";
        showCommentInput.addEventListener("focus", showFocusEventHandler);
        showCommentInput.addEventListener("keyup", showCommentsEventHandler);
        showCommentInput.addEventListener("blur",showBlurEventHandler);
        showCommentInput.parentNode.addEventListener("submit", showSubmitEventHandler.bind(showCommentInput));
    }
})

function showCommentsEventHandler() {
    console.log("showkomment!!",this);
    const showCommentsForm = this.parentNode;
    console.log("showCommentsForm",showCommentsForm);
    const showPostButton = showCommentsForm.children[6];
    console.log("showPostButton", showPostButton);

    if (this.value) {
        console.log("true!! this.value",this.value);
        
        showPostButton.disabled = false;
    } else {
        console.log("false!! this.value",this.value);
        showPostButton.disabled = true;
        
    }
}

function showSubmitEventHandler() {
    console.log("this",this);
    //"this" refers to the comments input field
    const username = this.parentNode.children[3].placeholder;
    const userId = this.parentNode.children[4].value;
    const newCommentText = this.value;
    const avatarObject = this.parentNode.children[5].value;

    console.log("username",username);
    console.log("userId",userId);
    console.log("newComment",this.value);
    console.log("avatarObject", avatarObject);
    
    const postUserContainer = document.createElement("div");
    postUserContainer.className = "post-user";

    const avatarContainer = document.createElement("div");
    avatarContainer.className = "avatar";

    const avatarImage = document.createElement("img");
    avatarImage.src = `https://res.cloudinary.com/dvaat1mxu/image/upload/v1557478671/${avatarObject}.jpg`;

    const newCommentUserLink = document.createElement("a");
    newCommentUserLink.href = `/users/${userId}`;
    newCommentUserLink.className = "username";
    newCommentUserLink.innerHTML = username+"&nbsp;";

    const newCommentSpan = document.createElement("span");
    newCommentSpan.className = "quote normal";
    newCommentSpan.innerHTML = newCommentText;

    avatarContainer.appendChild(avatarImage);
    postUserContainer.appendChild(avatarContainer);
    postUserContainer.appendChild(newCommentUserLink);
    postUserContainer.appendChild(newCommentSpan);

    const commentsContainer = this.parentNode.parentNode.parentNode.children[1].children[0];
    console.log("commentsContainer",commentsContainer);
    commentsContainer.appendChild(postUserContainer);
    setTimeout(showClearCommentBox.bind(this), 100);

}

function showClearCommentBox () {
    this.value = "";
    this.blur();
    const postButton = this.parentNode.children[5];
    postButton.disabled = true;
}

function showFocusEventHandler() {
    this.placeholder = "";
    const commentsForm = this.parentNode;
    commentsForm.classList.add("focus");
}
function showBlurEventHandler () {
    this.placeholder = "Add a comment...";
    const commentsForm = this.parentNode;
    commentsForm.classList.remove("focus");
}

