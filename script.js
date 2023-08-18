//VARIABLES
const button = document.querySelector("button")
const allGridItems = document.querySelectorAll(".grid-item")

const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")
const players = [playerOne, playerTwo]
const playerXChoice = "X"
const playerOChoice = "O"
let gameOver = false; //Initializes game over as false
let korokXPhrase = document.querySelector("#korok-x-phrase")
let korokOPhrase = document.querySelector("#korok-o-phrase")
let checkArray = []

let playerTurn = Math.floor(Math.random() * players.length) //randomly picks a player
if (playerTurn === 0) { //if it's playerX's turn, their box is highlighted else playerO's box is highlighted
    playerOne.classList.add("player-turn") 
    korokXPhrase.innerText = "Korok X begins?! Wow!"
} else {
    playerTwo.classList.add("player-turn")
    korokOPhrase.innerText = "Woo O gets to begin!!"
 } 


//EVENT LISTENERS
button.addEventListener("click", () => {
    location.reload() //this reloads the page but all user input will be lost
})

for (let i = 0; i < allGridItems.length; i++) { //Iterates through grid items and performs the event listener
    allGridItems[i].addEventListener("click", gridItemClicked); //gridItem event listener

    function gridItemClicked(event) {

        const clickedItem = event.target; //sets whichever grid item is clicked on as the event target
         
        
        if (clickedItem.innerText === "X" || clickedItem.innerText === "O") { //stops users from choosing a spot that is already taken
            alert("Spot is already taken! Choose another move.")
        } else {
            if (playerTurn === 0) { 
                allGridItems[i].innerText = playerXChoice //changes text to playerX's choice
                    if ( //checks for winning conditions for Player X
                    gameOver === true) {
                            setTimeout(() => {alert("Player X Wins!")}, 50) //delays winner alert by 100ms
                    } else {
                        playerOne.classList.remove("player-turn") //removes playerOne box highlight
                        playerTwo.classList.add("player-turn") //adds playerTwo box highlight
                        playerTurn = 1 //switches playerTurn back to playerTwo
                        korokOPhrase.innerText = "Woo O's turn!!"
                        korokXPhrase.innerText = "Is it my turn yet?"
                        checkWin(allGridItems[i])
                    }
            } else {
                allGridItems[i].innerText = playerOChoice //changes text to playerO's choice
                    if ( //checks for winning conditions for Player O
                    gameOver === true) {
                            setTimeout(() => {alert("Player O Wins!")}, 50) //delays winner alert by 100ms
                    } else {
                        playerTwo.classList.remove("player-turn") //removes playerTwo box highlight
                        playerOne.classList.add("player-turn") //adds playerOne box highlight
                        playerTurn = 0 //switches playerTurn back to playerOne
                        korokXPhrase.innerText = "It's X's turn!"
                        korokOPhrase.innerText = "Sigh..waiting for my turn"
                        checkWin(allGridItems[i])
                    }
            };
        };
console.log(gameOver)
       //LOGIC TO CHECK WIN
    //    let checkWinArray = []
    

    //    for (let i = 0; i < allGridItems.length; i++) {
    //     checkWinArray.push(allGridItems[i].innerText)
    //     checkWin()
    //    }

       function checkWin(square) {
        let winArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let arr of winArray) {
            if (
                square[arr[0]].innerText == square[arr[1]].innerText &&
                square[arr[1]].innerText == square[arr[2]].innerText &&
                // square[arr[1]].innerText === square[arr[2]].innerText &&
                square[arr[0]].innerText != ''
                ) {
                    gameOver = true; //changes game over as true
                }
               }
               console.log(winArray)
        }
        



        //Logic to check for a tie
        let gridItemsTxt = allGridItems[i].innerText //grabs all the X's and O's entered
        
        checkArray.push(gridItemsTxt) //push X's and O's into a new array
        if (checkArray.length === 9 && gameOver === false) { //check for tie if all boxes are filled AND gameOver still false
            checkTie()
        }
        function checkTie() {
            if (checkArray.every(item => item === "X" || item === "O")){ //checks every item in the array for matching values
                gameOver = true;
                setTimeout(() => {
                    alert("Oooo it's a tie")
                }, 50)
            }
        } //end checkTie() function
    } //end gridItemClicked()
}; //end grid-item for loop


//PREVIOUS LOGIC
// allGridItems[0].innerText === allGridItems[1].innerText && allGridItems[0].innerText === allGridItems[2].innerText && allGridItems[1].innerText === allGridItems[2].innerText ||
// allGridItems[3].innerText === allGridItems[4].innerText && allGridItems[3].innerText === allGridItems[5].innerText && allGridItems[4].innerText === allGridItems[5].innerText ||
// allGridItems[6].innerText === allGridItems[7].innerText && allGridItems[6].innerText === allGridItems[8].innerText && allGridItems[7].innerText === allGridItems[8].innerText ||
// allGridItems[0].innerText === allGridItems[3].innerText && allGridItems[0].innerText === allGridItems[6].innerText && allGridItems[3].innerText === allGridItems[6].innerText ||
// allGridItems[1].innerText === allGridItems[4].innerText && allGridItems[1].innerText === allGridItems[7].innerText && allGridItems[4].innerText === allGridItems[7].innerText ||
// allGridItems[2].innerText === allGridItems[5].innerText && allGridItems[2].innerText === allGridItems[8].innerText && allGridItems[5].innerText === allGridItems[8].innerText ||
// allGridItems[0].innerText === allGridItems[4].innerText && allGridItems[0].innerText === allGridItems[8].innerText && allGridItems[4].innerText === allGridItems[8].innerText ||
// allGridItems[2].innerText === allGridItems[4].innerText && allGridItems[2].innerText === allGridItems[6].innerText && allGridItems[4].innerText === allGridItems[6].innerText






/* 
BUGS:
-Once you remove the grid-items' innerText's from the HTML there is an error showing the first move wins
*/