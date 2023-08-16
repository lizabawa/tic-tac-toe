//VARIABLES
const button = document.querySelector("button")
const gridItem = document.querySelectorAll(".grid-item")


//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost
})

for (let i = 0; i <gridItem.length; i++) { //Iterates through grid items and if it's clicked returns a response
    gridItem[i].addEventListener("click", (event) => {
        event.preventDefault()
        console.log("click")
    })
}



/* 

-when grid-item clicked return an X or O on the grid-item
    access the grid-item innerHTML
    change the innerHTML to an X or O 
-Turns must alternate between player 1 and 2 (highlight the box of whoever's turn it is)
-set win/lose conditions
-set an alert for win or lose
*/