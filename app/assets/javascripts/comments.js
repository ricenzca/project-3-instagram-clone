window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("#komment_komment").forEach(item => {
        item.value = "";
        item.addEventListener("keyup", commentsEventHandler);
        item.parentNode.addEventListener("submit", submitEventHandler.bind(item))
        })
})

function commentsEventHandler() {
    // console.log("komment!!");
    const commentsForm = this.parentNode;
    const postButton = this.parentNode.children[5];
    const commentsInputContainer = document.querySelector(".comments-input-container");
    commentsForm.classList.add("focus");
    if (this.value) {
        // console.log("true!!");
        postButton.disabled = false;
    } else {
        postButton.disabled = true;
        commentsForm.classList.remove("focus");
    }
}

function submitEventHandler() {
    console.log("this",this);
    //"this" refers to the comments input field
    const username = this.parentNode.children[3].placeholder;
    const newCommentText = this.value;

    console.log("newComment",this.value);
    
    const newCommentContainer = document.createElement("p");
    newCommentContainer.className = "quote bold";
    newCommentContainer.innerHTML = username+" ";

    const newCommentSpan = document.createElement("span");
    newCommentSpan.className = "normal";
    newCommentSpan.innerHTML = newCommentText;
    newCommentContainer.appendChild(newCommentSpan);

    const commentsContainer = this.parentNode.previousSibling.previousSibling;
    commentsContainer.appendChild(newCommentContainer);
    setTimeout(clearCommentBox.bind(this), 100);

}

function clearCommentBox () {
    this.value = "";
    this.blur();
    const postButton = this.parentNode.children[5];
    postButton.disabled = true;
}