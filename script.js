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
        return [`Draw! Both players chose ${playerSelection}!`, 0.5, 0.5];
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
        return [`You Win! ${playerSelection} beats ${computerSelection}!`, 1, 0];
    }
    return [`You Lose! ${computerSelection} beats ${playerSelection}!`, 0, 1];
}

function game() {
    let playerPointsTotal = 0;
    let computerPointsTotal = 0;
    for (let i = 0; i < 5; i++) {
        let [roundResult, playerPointsEarned, computerPointsEarned] = playRound(getPlayerChoice(), getComputerChoice());
        playerPointsTotal += playerPointsEarned;
        computerPointsTotal += computerPointsEarned;
        console.log(roundResult + `\nCurrent Score:\nPlayer -> ${playerPointsTotal}\nComputer -> ${computerPointsTotal}`);
    }
    console.log(`The final score is ${playerPointsTotal}-${computerPointsTotal}`);
    if (playerPointsTotal > computerPointsTotal) {
        console.log("You Win!");
    } else if (playerPointsTotal < computerPointsTotal) {
        console.log("You Lose!");
    } else {
        console.log("Draw!");
    }
}