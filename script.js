//VARIABLES
const button = document.querySelector("button");
const gridItem = document.querySelectorAll(".grid-item");

const korokX = document.querySelector("#player-one");
const korokO = document.querySelector("#player-two");
const players = [korokX, korokO];
const korokXChoice = "X";
const korokOChoice = "O";
let gameOver = false; //Initializes game over as false
let checkTieArray = [];
let playerTurn = "";

let korokXPhrase = document.querySelector("#korok-x-phrase");
let korokOPhrase = document.querySelector("#korok-o-phrase");
let korokResetSound = new Audio('media/yahaha.mp3')
korokResetSound.play()
let korokLaughSound = new Audio('media/korok_seed.mp3')

let playerRandom = Math.floor(Math.random() * players.length); //randomly picks a player
if (playerRandom === 0) { //if it's playerX's turn, their box is highlighted else playerO's box is highlighted
    playerTurn = "X"
    korokX.classList.add("player-turn") 
    korokXPhrase.innerText = "Korok X begins?! Wow!"
    console.log("playerX starts")
} else {
    playerTurn = "O"
    korokO.classList.add("player-turn")
    korokOPhrase.innerText = "Woo O gets to begin!!"
    console.log("playerO starts")
};

function checkWin() {
    if (
    gridItem[0].innerText === gridItem[1].innerText && gridItem[0].innerText === gridItem[2].innerText && gridItem[0].innerText !== "" ||
    gridItem[3].innerText === gridItem[4].innerText && gridItem[3].innerText === gridItem[5].innerText && gridItem[3].innerText !== "" ||
    gridItem[6].innerText === gridItem[7].innerText && gridItem[6].innerText === gridItem[8].innerText && gridItem[6].innerText !== "" ||
    gridItem[0].innerText === gridItem[3].innerText && gridItem[0].innerText === gridItem[6].innerText && gridItem[0].innerText !== "" ||
    gridItem[1].innerText === gridItem[4].innerText && gridItem[1].innerText === gridItem[7].innerText && gridItem[1].innerText !== "" ||
    gridItem[2].innerText === gridItem[5].innerText && gridItem[2].innerText === gridItem[8].innerText && gridItem[2].innerText !== "" ||
    gridItem[0].innerText === gridItem[4].innerText && gridItem[0].innerText === gridItem[8].innerText && gridItem[0].innerText !== "" ||
    gridItem[2].innerText === gridItem[4].innerText && gridItem[2].innerText === gridItem[6].innerText && gridItem[2].innerText !== "" 
    ) {
        gameOver = true; //changes game over as true
        korokLaughSound.play()
        setTimeout(() => {swal(`Korok ${playerTurn} wins!`)}, 50) //delays winner alert by 100ms
    };            
};

function checkTie() {
    if (checkTieArray.every(item => item === "X" || item === "O")){ //checks every item in the array for matching values
        gameOver = true;
        setTimeout(() => {
            swal("Oooo it's a tie")
        }, 50)
    };
};

//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost
})

for (let i = 0; i < gridItem.length; i++) { //Iterates through grid items and performs the event listener
    gridItem[i].addEventListener("click", gridItemClicked); //listens for if a gridItem is clicked

    function gridItemClicked(event) {
        const clickedItem = event.target; //sets whichever grid item is clicked on as the event target
        
        if (gameOver === true) { //keeps the game from continuing once a winner has been declared
            return
        };
        
        if (clickedItem.innerText === "X" || clickedItem.innerText === "O") { //stops users from choosing a spot that is already taken
            swal("Spot is already taken! Choose another move.")
        };

        if (playerTurn === "X") {
            clickedItem.innerText = korokXChoice //changes text to playerX's choice
            checkWin()
            if (gameOver === false ) {
            korokX.classList.remove("player-turn") //removes playerOne box highlight
            korokO.classList.add("player-turn") //adds playerTwo box highlight
            playerTurn = "O" //switches playerTurn back to playerTwo
            console.log(playerTurn)
            korokOPhrase.innerText = "Woo O's turn!!"
            korokXPhrase.innerText = "Is it my turn yet?"
            };
        } else {
            clickedItem.innerText = korokOChoice //changes text to playerO's choice
            checkWin()
            if (gameOver === false ) {
                korokO.classList.remove("player-turn") //removes playerTwo box highlight
                korokX.classList.add("player-turn") //adds playerOne box highlight
                playerTurn = "X" //switches playerTurn back to playerOne
                console.log(playerTurn)
                korokXPhrase.innerText = "It's X's turn!"
                korokOPhrase.innerText = "Sigh..waiting for my turn"
            }
        };

        //Check Tie
        let gridItems = gridItem[i].innerText //grabs all the X's and O's entered
        checkTieArray.push(gridItems) //push X's and O's into a new array
        if (checkTieArray.length === 9 && gameOver === false) { //check for tie if all boxes are filled AND gameOver still false
            checkTie()
        } //end check tie
    }; //end gridItemClicked() function
}; //end forOf loop
