// get elements
const shareButton = document.querySelectorAll(".share-button")
const shareArticle = document.querySelector(".article-share")

// add event to button that toggles the share article
shareButton.forEach(button => {
    button.addEventListener("click", toggleShare)
})

function toggleShare() {
    shareArticle.classList.toggle("active")
}