
# Tic-Tac-Toe G![ticTacToe](https://github.com/Binduvarsha23/simpleFrontend/assets/123391226/f909cbac-0a87-461c-ab16-fe06ce69a95a)
ame

This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to play in turns and announces the winner when one player gets three marks in a row.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Contributing](#contributing)
- [License](#license)

## Features

- Two-player mode
- Easy-to-use interface
- Responsive design
- Reset and New Game options

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Binduvarsha23/simpleFrontend.git
    ```
2. Open the project folder:
    ```bash
    cd ticTacToe
    ```
3. Open the `index.html` file in a web browser.

## Usage

- Click any box to make a move.
- Player O goes first.
- The game announces the winner when a player gets three marks in a row.
- Click "Reset game" to start over.
- Click "New game" after a winner is announced to play again.

## Code Overview

### HTML

This file structures the game interface, including the grid and buttons for control.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="msg-container hide">
        <p id="msg">Winner</p>
        <button id="newGame">New game</button>
    </div>
    <main>
        <h1>Tic-Tac-Toe</h1>
        <div class="container">
            <div class="game">
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
            </div>
        </div>
        <button id="reset">Reset game</button>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

### CSS

This file styles the game for a better visual experience.

```css
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #548687;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container {
    height: 70vh;
    width: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game {
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;
}

.box {
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 1rem rgba(0,0,0,0.4);
    font-size: 8vmin;
    background-color: white;
}

#reset, #newGame {
    padding: 1rem;
    font-size: 1.25rem;
    border-radius: 1rem;
    border: none;
    background-color: #191913;
    color: white;
}

#msg {
    color: white;
    font-size: 5vmin;
    padding: 10px;
}

.msg-container {
    height: 10rem;
}

.hide {
    display: none;
}
```

### JavaScript

This file contains the game logic, handling turns, checking for winners, and resetting the game.

```javascript
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    disableBtns();
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is open source and available under the [MIT License](LICENSE).
