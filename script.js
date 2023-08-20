//VARIABLES
const button = document.querySelector("button");
const gridItem = document.querySelectorAll(".grid-item");

const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const players = [playerOne, playerTwo];
const playerXChoice = "X";
const playerOChoice = "O";
let gameOver = false; //Initializes game over as false
let checkTieArray = [];

let korokXPhrase = document.querySelector("#korok-x-phrase");
let korokOPhrase = document.querySelector("#korok-o-phrase");
let korokResetSound = new Audio('media/yahaha.mp3')
korokResetSound.play()
let korokLaughSound = new Audio('media/korok_seed.mp3')

let playerTurn = Math.floor(Math.random() * players.length); //randomly picks a player
if (playerTurn === 0) { //if it's playerX's turn, their box is highlighted else playerO's box is highlighted
    playerOne.classList.add("player-turn") 
    korokXPhrase.innerText = "Korok X begins?! Wow!"
} else {
    playerTwo.classList.add("player-turn")
    korokOPhrase.innerText = "Woo O gets to begin!!"
};

function checkTie() {
    if (checkTieArray.every(item => item === "X" || item === "O")){ //checks every item in the array for matching values
        gameOver = true;
        setTimeout(() => {
            swal("Oooo it's a tie")
        }, 50)
    }
};

//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost
})

for (let i = 0; i < gridItem.length; i++) { //Iterates through grid items and performs the event listener
    gridItem[i].addEventListener("click", gridItemClicked); //listens for if a gridItem is clicked
    // console.log("gridItem[i] values: " + gridItem[i].dataset.value)

    function gridItemClicked(event) {
        const clickedItem = event.target; //sets whichever grid item is clicked on as the event target
        let datasetValue = clickedItem.dataset.value //retreives the value of the div with data-value attribute
        // console.log("clickedItem value: " + datasetValue)
        
        if (gameOver === true) { //keeps the game from continuing once a winner has been declared
            return
        }
        
        if (clickedItem.innerText === "X" || clickedItem.innerText === "O") { //stops users from choosing a spot that is already taken
            swal("Spot is already taken! Choose another move.")
        } else {
            if (playerTurn === 0) {
                clickedItem.innerText = playerXChoice //changes text to playerX's choice
                if (gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[1].innerText === gridItem[2].innerText && gridItem[0].innerText !== "" ||
                gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[4].innerText === gridItem[5].innerText && gridItem[3].innerText !== ""  ||
                gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[7].innerText === gridItem[8].innerText && gridItem[6].innerText !== ""  ||
                gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[3].innerText === gridItem[6].innerText && gridItem[0].innerText !== ""  ||
                gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[4].innerText === gridItem[7].innerText && gridItem[1].innerText !== ""  ||
                gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[5].innerText === gridItem[8].innerText && gridItem[2].innerText !== ""  ||
                gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[4].innerText === gridItem[8].innerText && gridItem[0].innerText !== ""  ||
                gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[4].innerText === gridItem[6].innerText && gridItem[2].innerText !== "" 
                    ) {
                    gameOver = true; //changes game over as true
                    korokLaughSound.play()
                    setTimeout(() => {swal("Player X Wins!")}, 50) //delays winner alert by 100ms
                } else {
                    playerOne.classList.remove("player-turn") //removes playerOne box highlight
                    playerTwo.classList.add("player-turn") //adds playerTwo box highlight
                    playerTurn = 1 //switches playerTurn back to playerTwo
                    korokOPhrase.innerText = "Woo O's turn!!"
                    korokXPhrase.innerText = "Is it my turn yet?"
                }
            } else {
                clickedItem.innerText = playerOChoice //changes text to playerO's choice
                if (gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[1].innerText === gridItem[2].innerText && gridItem[0].innerText !== "" ||
                gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[4].innerText === gridItem[5].innerText && gridItem[3].innerText !== ""  ||
                gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[7].innerText === gridItem[8].innerText && gridItem[6].innerText !== ""  ||
                gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[3].innerText === gridItem[6].innerText && gridItem[0].innerText !== ""  ||
                gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[4].innerText === gridItem[7].innerText && gridItem[1].innerText !== ""  ||
                gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[5].innerText === gridItem[8].innerText && gridItem[2].innerText !== ""  ||
                gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[4].innerText === gridItem[8].innerText && gridItem[0].innerText !== ""  ||
                gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[4].innerText === gridItem[6].innerText && gridItem[2].innerText !== "" 
                    ) {
                    gameOver = true; //changes game over as true
                    korokLaughSound.play()
                    setTimeout(() => {swal("Player O Wins!")}, 50) //delays winner alert by 100ms
                } else {
                    playerTwo.classList.remove("player-turn") //removes playerTwo box highlight
                    playerOne.classList.add("player-turn") //adds playerOne box highlight
                    playerTurn = 0 //switches playerTurn back to playerOne
                    korokXPhrase.innerText = "It's X's turn!"
                    korokOPhrase.innerText = "Sigh..waiting for my turn"
                }
            }
        } //end main if else statement

        //Check Tie
        let gridItems = gridItem[i].innerText //grabs all the X's and O's entered
        checkTieArray.push(gridItems) //push X's and O's into a new array
        if (checkTieArray.length === 9 && gameOver === false) { //check for tie if all boxes are filled AND gameOver still false
            checkTie()
        } //end check tie
    }; //end gridItemClicked() function
}; //end forOf loop
