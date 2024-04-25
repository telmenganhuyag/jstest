function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?:");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    } else {
        alert("Invalid choice. Please choose Rock, Paper or Scissors.");
        return getPlayerChoice();
    }
 }

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
 }

 let winCountP = 0;
 let winCountC = 0;

 function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player Wins!", "Score:", ++winCountP);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("Player Wins!", "Score:", ++winCountP);
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("Player Wins!", "Score:", ++winCountP);
        } else if (playerSelection == computerSelection) {
            console.log("Tie!");
        } else {
            console.log("Computer Wins!", "Score:", ++winCountC);
        } console.log(computerSelection);
    }


function playGame() {
    for (let i=0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

playGame();
