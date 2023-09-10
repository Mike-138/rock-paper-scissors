const OPTIONS = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Invalid response. Rock, paper, or scissors?").toLowerCase();
    }
    return playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! Both players chose ${playerSelection}!`;
    }
    let getIndex = function(choice) {
        for (let i = 0; i < OPTIONS.length; i++) {
            if (choice === OPTIONS[i]) {
                return i;
            }
        }
    };
    const playerIndex = getIndex(playerSelection);
    const computerIndex = getIndex(computerSelection);
    if (playerIndex === computerIndex + 1 || playerIndex === computerIndex - 2) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}!`
}