//VARIABLES
const button = document.querySelector("button")
const gridItem = document.querySelectorAll(".grid-item")

const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")
const players = [playerOne, playerTwo]
const playerXChoice = "X"
const playerOChoice = "O"
let gameOver = false; //Initializes game over as false
let korokXPhrase = document.querySelector("#korok-x-phrase")
let korokOPhrase = document.querySelector("#korok-o-phrase")
let checkTieArray = []

let playerTurn = Math.floor(Math.random() * players.length) //randomly picks a player
if (playerTurn === 0) { //if it's playerX's turn, their box is highlighted else playerO's box is highlighted
    playerOne.classList.add("player-turn") 
    korokXPhrase.innerText = "Korok X begins?! Wow!"
} else {
    playerTwo.classList.add("player-turn")
    korokOPhrase.innerText = "Woo O gets to begin!!"
 } 

// function win() = {

// } WILL MOVE WIN LOGIC INTO HERE WHEN I CLEAN UP CODE

//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost
})

for (let i = 0; i < gridItem.length; i++) { //Iterates through grid items and performs the event listener
    gridItem[i].addEventListener("click", gridItemClicked); //gridItem event listener

    function gridItemClicked(event) {
        
        if (gameOver) {
            return; //Does nothing if the game is already over
        }

        const clickedItem = event.target; //sets whichever grid item is clicked on as the event target

        if (clickedItem.innerText === "X" || clickedItem.innerText === "O") { //stops users from choosing a spot that is already taken
            swal("Spot is already taken! Choose another move.")
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
                            gameOver = true; //changes game over as true
                            setTimeout(() => {swal("Player X Wins!")}, 50) //delays winner alert by 100ms
                    } else {
                        playerOne.classList.remove("player-turn") //removes playerOne box highlight
                        playerTwo.classList.add("player-turn") //adds playerTwo box highlight
                        playerTurn = 1 //switches playerTurn back to playerTwo
                        korokOPhrase.innerText = "Woo O's turn!!"
                        korokXPhrase.innerText = "Is it my turn yet?"
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
                            gameOver = true; //changes game over as true
                            setTimeout(() => {swal("Player O Wins!")}, 50) //delays winner alert by 100ms
                    } else {
                        playerTwo.classList.remove("player-turn") //removes playerTwo box highlight
                        playerOne.classList.add("player-turn") //adds playerOne box highlight
                        playerTurn = 0 //switches playerTurn back to playerOne
                        korokXPhrase.innerText = "It's X's turn!"
                        korokOPhrase.innerText = "Sigh..waiting for my turn"
                    }
            };
        };
console.log(gameOver)
        //Logic to check for a tie
        let gridItems = gridItem[i].innerText //grabs all the X's and O's entered
        checkTieArray.push(gridItems) //push X's and O's into a new array
        if (checkTieArray.length === 9 && gameOver === false) { //check for tie if all boxes are filled AND gameOver still false
            checkTie()
        }
        
        
        function checkTie() {
            if (checkTieArray.every(item => item === "X" || item === "O")){ //checks every item in the array for matching values
                gameOver = true;
                setTimeout(() => {
                    swal("Oooo it's a tie")
                }, 50)
            }
        } //end checkTie() function
    } //end gridItemClicked()
}; //end grid-item for loop







/* 
BUGS:
-Once you remove the grid-items' innerText's from the HTML there is an error showing the first move wins
*/