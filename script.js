const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    location.reload() //this reloads the page but all user input will be lost
})