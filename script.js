// get elements
const shareButton = document.querySelector(".share-button")
const socialLinks = document.querySelector(".social-links")

// add event listener to shareButton that toggles social links
shareButton.addEventListener("click", () => {
    toggleSocialLinks()
})

// function that toggle's the active state of the social links
function toggleSocialLinks() {
    if (socialLinks.classList.contains("active")) {
        socialLinks.classList.remove("active")
    } else {
        socialLinks.classList.add("active")
    }
}