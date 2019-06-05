window.addEventListener('DOMContentLoaded', () => {
    console.log("comments.js");
    document.querySelectorAll("#komment_komment").forEach(item => {
        console.log("item",item);
        item.value = "";
        item.addEventListener("focus", focusEventHandler);
        item.addEventListener("keyup", commentsEventHandler);
        item.addEventListener("blur",blurEventHandler);
        item.parentNode.addEventListener("submit", submitEventHandler.bind(item))
        })
})

function commentsEventHandler() {
    console.log("komment!!",this);
    const commentsForm = this.parentNode;
    console.log("commentsForm",commentsForm);
    const postButton = commentsForm.children[5];
    console.log("postButton",postButton);

    if (this.value) {
        console.log("true!! this.value",this.value);
        
        postButton.disabled = false;
    } else {
        console.log("false!! this.value",this.value);
        postButton.disabled = true;
        
    }
}

function submitEventHandler() {
    console.log("this",this);
    //"this" refers to the comments input field
    const username = this.parentNode.children[3].placeholder;
    const userId = this.parentNode.children[4].value;
    const newCommentText = this.value;

    console.log("username",username);
    console.log("userId",userId);
    console.log("newComment",this.value);
    
    const newCommentContainer = document.createElement("p");
    newCommentContainer.className = "quote bold";

    const newCommentUserLink = document.createElement("a");
    newCommentUserLink.href = `/users/${userId}`;
    newCommentUserLink.className = "username";
    newCommentUserLink.innerHTML = username+" ";

    const newCommentSpan = document.createElement("span");
    newCommentSpan.className = "normal";
    newCommentSpan.innerHTML = newCommentText;

    newCommentContainer.appendChild(newCommentUserLink);
    newCommentContainer.appendChild(newCommentSpan);

    const commentsContainer = this.parentNode.previousSibling.previousSibling.children[3];
    console.log("commentsContainer",commentsContainer);
    commentsContainer.appendChild(newCommentContainer);
    setTimeout(clearCommentBox.bind(this), 100);

}

function clearCommentBox () {
    this.value = "";
    this.blur();
    const postButton = this.parentNode.children[5];
    postButton.disabled = true;
}

function focusEventHandler() {
    this.placeholder = "";
    const commentsForm = this.parentNode;
    commentsForm.classList.add("focus");
}
function blurEventHandler () {
    this.placeholder = "Add a comment...";
    const commentsForm = this.parentNode;
    commentsForm.classList.remove("focus");
}

