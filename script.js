//VARIABLES
const button = document.querySelector("button")
const gridItem = document.querySelectorAll(".grid-item")

const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")
const players = [playerOne, playerTwo]
const playerOneChoice = "X"
const playerTwoChoice = "O"

//CORE LOGIC
let playerTurn = Math.floor(Math.random() * players.length) //randomly picks a player
console.log(playerTurn)
if (playerTurn === 0) {
    playerOne.classList.add("player-turn") //if it's playerOne's turn, their box is highlighted
    console.log("playerOne Turn")
} else {
    playerTwo.classList.add("player-turn") //else player Two's box is highlighted
    console.log("playerTwo turn")
}

//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost

})

for (let i = 0; i <gridItem.length; i++) { //Iterates through grid items and if it's clicked returns a response
    gridItem[i].addEventListener("click", () => {
        
        gridItem[i].innerText = playerOneChoice //will change the inner text to "player choice" which we will assign later
        gridItem[i].innerText = playerTwoChoice
    })
}




/* 

-Turns must alternate between player 1 and 2 (highlight the box of whoever's turn it is)
    define playerOne/Two as X or O, can give them a choice to choose if there's time
    set conditions for if player one goes then it's player twos turn

    if it's player one's turn, it will be indicated by their container being highlighted
    everytime the page refreshes one player is randomly chosen to start
    if a players box is highlighted, the other player CANNOT GO
-set win/lose conditions
-set an alert for win or lose
*/