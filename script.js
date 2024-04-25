function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let winCountP = 0;
let winCountC = 0;
let results;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results = `Computer picks ${computerSelection}. You win!`; ++winCountP;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results = `Computer picks ${computerSelection}. You win!`; 
        ++winCountP;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = `Computer picks ${computerSelection}. You win!`;
        ++winCountP;
    } else if (playerSelection == computerSelection) {
        results = "Tie!";
    } else {
        results = `Computer picks ${computerSelection}. You lose!`;
        ++winCountC;
    } 
    console.log(computerSelection);
    if (winCountP === 5 || winCountC === 5) { 
        alert("Game Over");
        winCountP = 0;
        winCountC = 0;
        results = '';
    }
    updateScores();
}

function playGame(playerSelection) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
}

function updateScores() {
    playerScore.textContent = `Player Score : ${winCountP}`;
    computerScore.textContent = `Computer Score: ${winCountC}`;
    moves.textContent = results;
}

const title = document.createElement("h1");
title.textContent = "A game of Rock, Paper and Scissors"
document.body.appendChild(title);

const rule = document.createElement("p")
rule.textContent = "Rule: First to 5"
rule.setAttribute(
    "style", "color:green; font-size: 20px; font-style: italic;"
);
document.body.appendChild(rule)

const buttons = document.createElement("div")
document.body.appendChild(buttons);

const btn = document.createElement("button");
btn.textContent = "Rock";
btn.style.margin = "5px";
buttons.appendChild(btn);

const btn2 = document.createElement("button");
btn2.textContent = "Paper";
btn2.style.margin = "5px";
buttons.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.textContent = "Scissors";
btn3.style.margin = "5px";
buttons.appendChild(btn3);

const scores = document.createElement("div")
buttons.appendChild(scores);

const playerScore = document.createElement("p")
playerScore.textContent = `Player Score : ${winCountP}`
scores.appendChild(playerScore);

const computerScore = document.createElement("p")
computerScore.textContent = `Computer Score: ${winCountC}`
scores.appendChild(computerScore);

const moves = document.createElement("h2")
scores.appendChild(moves)

btn.addEventListener("click", () => { 
    playGame("Rock");
});

btn2.addEventListener("click", () => { 
    playGame("Paper");
});

btn3.addEventListener("click", () => { 
    playGame("Scissors");
});
