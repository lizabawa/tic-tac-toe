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
playerTurn === 0 ? playerOne.classList.add("player-turn") : playerTwo.classList.add("player-turn") //if it's playerX's turn, their box is highlighted else playerO's box is highlighted

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
                gridItem[i].innerText = playerXChoice //changes text to playerX's choice
                    if ( //checks for winning conditions for Player X
                        gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[1].innerText === gridItem[2].innerText ||
                        gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[4].innerText === gridItem[5].innerText ||
                        gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[7].innerText === gridItem[8].innerText ||
                        gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[3].innerText === gridItem[6].innerText ||
                        gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[4].innerText === gridItem[7].innerText ||
                        gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[5].innerText === gridItem[8].innerText ||
                        gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[4].innerText === gridItem[8].innerText ||
                        gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[4].innerText === gridItem[6].innerText
                        ) {
                            setTimeout(() => {alert("Player X Wins!")}, 50) //delays the alert by 100ms
                    } else {
                        playerOne.classList.remove("player-turn") //removes playerOne box highlight
                        playerTwo.classList.add("player-turn") //adds playerTwo box highlight
                        playerTurn = 1 //switches playerTurn back to playerTwo
                    }
            } else {
                gridItem[i].innerText = playerOChoice //changes text to playerO's choice
                    if ( //checks for winning conditions for Player O
                        gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[1].innerText === gridItem[2].innerText ||
                        gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[4].innerText === gridItem[5].innerText ||
                        gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[7].innerText === gridItem[8].innerText ||
                        gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[3].innerText === gridItem[6].innerText ||
                        gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[4].innerText === gridItem[7].innerText ||
                        gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[5].innerText === gridItem[8].innerText ||
                        gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[4].innerText === gridItem[8].innerText ||
                        gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[4].innerText === gridItem[6].innerText
                        ) {
                            setTimeout(() => {alert("Player O Wins!")}, 50) //delays the alert by 100ms
                    } else {
                        playerTwo.classList.remove("player-turn") //removes playerTwo box highlight
                        playerOne.classList.add("player-turn") //adds playerOne box highlight
                        playerTurn = 0 //switches playerTurn back to playerOne
                    }
            };
        };
    });
};





/* 
BUGS:
-winners last selected choice doesn't show before showing that they won
-set win/lose conditions
    map a new array of itemgrid.innerHTML and check if
-set an alert for win or lose and which player won/tie
game should stop after a win without refreshing
*/