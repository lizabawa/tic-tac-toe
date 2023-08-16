//VARIABLES
const button = document.querySelector("button")
const gridItem = document.querySelectorAll(".grid-item")

const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")
const players = [playerOne, playerTwo]
const playerXChoice = "X"
const playerOChoice = "O"

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

for (let i = 0; i <gridItem.length; i++) { //Iterates through grid items and performs the event listener
    gridItem[i].addEventListener("click", () => {
        if (gridItem[i].innerText === "X" || gridItem[i].innerText === "O") { //stops users from choosing a spot that is already taken
            alert("Spot is already taken! Choose another move.")
        } else {
            if (playerTurn === 0) {
                gridItem[i].innerText = playerXChoice //changes text to playerOne's choice
                playerOne.classList.remove("player-turn") //removes playerOne box highlight
                playerTwo.classList.add("player-turn") //adds playerTwo box highlight
                playerTurn = 1 //switches playerTurn back to playerTwo
            } else {
                gridItem[i].innerText = playerOChoice //changes text to playerTwo's choice
                playerTwo.classList.remove("player-turn") //removes playerTwo box highlight
                playerOne.classList.add("player-turn") //adds playerOne box highlight
                playerTurn = 0 //switches playerTurn back to playerOne
            };
        }
    });
};

/* 

-set win/lose conditions
-set an alert for win or lose
*/