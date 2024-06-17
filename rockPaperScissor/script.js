let userScore = 0;
let compScore = 0;

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const choices = document.querySelectorAll("img");

const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `User Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `User Win ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];  
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
         drawGame();
    }
    else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice == "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});