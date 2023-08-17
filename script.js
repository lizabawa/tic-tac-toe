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
playerTurn === 0 ? playerOne.classList.add("player-turn") : playerTwo.classList.add("player-turn") //if it's playerOne's turn, their box is highlighted else player Two's box is highlighted

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
        };

        if (
            gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[1].innerText === gridItem[2].innerText ||
            gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[4].innerText === gridItem[5].innerText ||
            gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[7].innerText === gridItem[8].innerText ||
            gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[3].innerText === gridItem[6].innerText ||
            gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[4].innerText === gridItem[7].innerText ||
            gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[5].innerText === gridItem[8].innerText ||
            gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[4].innerText === gridItem[8].innerText ||
            gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[4].innerText === gridItem[6].innerText
            ) {
        console.log(`win!`)
        } else {
            console.log("it's a tie")
        }

    });
};





/* 

-set win/lose conditions
    map a new array of itemgrid.innerHTML and check if
-set an alert for win or lose and which player won/tie
*/