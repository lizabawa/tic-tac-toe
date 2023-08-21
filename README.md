# Tic-Tac-Toe

## Product Design/Wire-Frame
- **Theme:** Zelda: Tears of The Kingdom Koroks
- **Wireframe:**
![basic wireframe](media/tic-tac-toe-wireframe.jpg)

## User Interface
![ttt ui](media/ttt-ui.png)

## List of Features
- Render a game board in the browser
- Switch turns between Korok X and Korok O
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Use JavaScript for DOM manipulation

## User Stories
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

## MVP
- **Bronze**
- **Silver**
- **Gold**

## Approach to logic
- **HTML:** I kept the HTML layout simple. I used Bootstrap to create the gameboard columns, and the tic tac toe board itself consists of a grid-container with grid-items. I did not like how Bootstrap buttons look and so preferred to customize it myself.
- **CSS:** One of the pivotal pieces of CSS was the .player-turn. I wanted the CSS of the Korok box to change depending on whose turn it was, so I gave it a different background-color and a dotted outline.
- **Javascript:** I organized the logic by keeping all my variables at the top and event listeners below. At the start of each new round, I wanted a random player to be chosen to go first to be fair, so I used the Math.floor(Math.random()) method. Along with the CSS changing to dictate whose turn it is, I also utilized Javascript classList to add and remove the Korok's phrases depending on who starts and whose turn it is.
    - **Event Listeners:** I had two event listeners, one to reload the page when the Reset Game button is clicked, and one to listen every time a grid-item was clicked on.
    - **Win Logic:** I listed all the ways a Korok could win using conditional statements.
    - **Tie Logic:** I created a separate function to checkTie that pushes innerText to a new array everytime the innerText is changed, and then iterated through this array to check if all the innerText matched "X" or "O" AND if the game was not yet over, which indicates a tie.

## List of Technologies and Resources Used
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/)
- [SweetAlert](https://sweetalert.js.org/)
- [Google Fonts: Tilt Prism](https://fonts.google.com/specimen/Tilt+Prism)
- [Zedge](https://www.zedge.net/ringtones-and-wallpapers)
- [Korok O Image](https://dribbble.com/shots/4133074-Yahaha)
- [Korok X Image](https://dribbble.com/shots/3495292-Yahaha-Korok-Chio)