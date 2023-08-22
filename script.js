//VARIABLES
const button = document.querySelector("button");
const gridItem = document.querySelectorAll(".grid-item");
const korokX = document.querySelector("#player-one");
const korokO = document.querySelector("#player-two");
const players = [korokX, korokO];
const korokXChoice = "X";
const korokOChoice = "O";
let korokXPhrase = document.querySelector("#korok-x-phrase");
let korokOPhrase = document.querySelector("#korok-o-phrase");
const korokYahahaSound = new Audio("media/yahaha.mp3");
const korokSeedSound = new Audio("media/korok_seed.mp3");
const korokRockSound = new Audio("media/dropping_rock_korok.mp3");
let gameOver = false; //Initializes game over as false
let checkTieArray = [];
let playerTurn = "";
let xCounter = 0;
let oCounter = 0;

function playerRandom() {
  let playerRandom = Math.floor(Math.random() * players.length);
  //if it's playerX's turn, their box is highlighted else playerO's box is highlighted
  if (playerRandom === 0) {
    playerTurn = "X";
    korokX.classList.add("player-turn");
    korokXPhrase.innerText = '"Korok X begins?! Wow!"';
  } else {
    playerTurn = "O";
    korokO.classList.add("player-turn");
    korokOPhrase.innerText = '"Woo O gets to begin!!"';
  }
}

function checkWin() {
  if (
    (gridItem[0].innerText === gridItem[1].innerText &&
      gridItem[0].innerText === gridItem[2].innerText &&
      gridItem[0].innerText !== "") ||
    (gridItem[3].innerText === gridItem[4].innerText &&
      gridItem[3].innerText === gridItem[5].innerText &&
      gridItem[3].innerText !== "") ||
    (gridItem[6].innerText === gridItem[7].innerText &&
      gridItem[6].innerText === gridItem[8].innerText &&
      gridItem[6].innerText !== "") ||
    (gridItem[0].innerText === gridItem[3].innerText &&
      gridItem[0].innerText === gridItem[6].innerText &&
      gridItem[0].innerText !== "") ||
    (gridItem[1].innerText === gridItem[4].innerText &&
      gridItem[1].innerText === gridItem[7].innerText &&
      gridItem[1].innerText !== "") ||
    (gridItem[2].innerText === gridItem[5].innerText &&
      gridItem[2].innerText === gridItem[8].innerText &&
      gridItem[2].innerText !== "") ||
    (gridItem[0].innerText === gridItem[4].innerText &&
      gridItem[0].innerText === gridItem[8].innerText &&
      gridItem[0].innerText !== "") ||
    (gridItem[2].innerText === gridItem[4].innerText &&
      gridItem[2].innerText === gridItem[6].innerText &&
      gridItem[2].innerText !== "")
  ) {
    gameOver = true; //changes game over as true
    korokSeedSound.play();
    setTimeout(() => {
      swal(`Korok ${playerTurn} wins!`);
    }, 50); //delays winner alert by 100ms
  }
}

function checkTie() {
  //checks every item in the array for matching values
  if (checkTieArray.every((item) => item === "X" || item === "O")) {
    gameOver = true;
    korokRockSound.play();
    setTimeout(() => {
      swal("Oooo it's a tie");
    }, 50);
  }
}
//upon window loading Event Listener
window.addEventListener("load", () => {
  swal({
    title: "You found us!",
    text: "Let's start the game!",
    button: "Aw yiss!",
    closeOnClickOutside: false,
  });
  playerRandom();
});

//Iterates through grid items and performs the event listener
for (let i = 0; i < gridItem.length; i++) {
  //listens for if a gridItem is clicked
  gridItem[i].addEventListener("click", gridItemClicked);
  //event listeners for hover effect
  gridItem[i].addEventListener("mouseover", () => {
    if (gameOver === false) {
      gridItem[i].setAttribute("data-player-turn", `${playerTurn}`);
    }
  });
  gridItem[i].addEventListener("mouseout", () => {
      gridItem[i].removeAttribute("data-player-turn")
  });

  //RESET GAME BUTTON EVENT LISTENER
  button.addEventListener("click", () => {
    korokYahahaSound.play();
    gridItem[i].innerHTML = "";
    checkTieArray = [];
    gameOver = false;
    korokX.classList.remove("player-turn"); //removes playerturn highliht
    korokO.classList.remove("player-turn"); //removes playerturn highlight
    playerRandom() //assigns first turn to random player
  });
  //sets whichever grid item is clicked on as the event target
  function gridItemClicked(event) {
    const clickedItem = event.target;
    //keeps the game from continuing once a winner has been declared
    if (gameOver === true) {
      playerTurn = "";
      return;
    };
    //stops users from choosing a spot that is already taken
    if (clickedItem.innerText === "X" || clickedItem.innerText === "O") {
      korokRockSound.play();
      swal("Spot is already taken! Choose another move.");
    };

    if (playerTurn === "X") {
      clickedItem.innerText = korokXChoice; //changes text to playerX's choice
      checkWin();
      if (gameOver === false) {
        korokX.classList.remove("player-turn"); //removes playerOne box highlight
        korokO.classList.add("player-turn"); //adds playerTwo box highlight
        playerTurn = "O"; //switches playerTurn back to playerTwo
        korokOPhrase.innerText = '"Woo O\'s turn!!"';
        korokXPhrase.innerText = '"Is it my turn yet?"';
      } else {
        xCounter++;
        document.querySelector("#korok-x-wins").innerHTML = `${xCounter}`;
      }
    } else {
      clickedItem.innerText = korokOChoice; //changes text to playerO's choice
      checkWin();
      if (gameOver === false) {
        korokO.classList.remove("player-turn"); //removes playerTwo box highlight
        korokX.classList.add("player-turn"); //adds playerOne box highlight
        playerTurn = "X"; //switches playerTurn back to playerOne
        korokXPhrase.innerText = "\"It's X's turn!\"";
        korokOPhrase.innerText = '"Sigh..waiting for my turn"';
      } else {
        oCounter++;
        document.querySelector("#korok-o-wins").innerHTML = `${oCounter}`;
      }
    }
    //Check Tie
    let gridItems = gridItem[i].innerText; //each X and O entered
    checkTieArray.push(gridItems); //push X's and O's into a new array
    //check for tie if all boxes are filled AND gameOver still false
    if (checkTieArray.length === 9 && gameOver === false) {
      checkTie();
    } //end check tie
  } //end gridItemClicked() function
} //end forOf loop
