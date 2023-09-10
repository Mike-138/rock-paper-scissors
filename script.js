const OPTIONS = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const computerChoice = computerSelection()
    if (playerSelection === computerChoice) {
        return [`Draw! Both players chose ${playerSelection}!`, 0, 0];
    }
    let getIndex = function(choice) {
        for (let i = 0; i < OPTIONS.length; i++) {
            if (choice === OPTIONS[i]) {
                return i;
            }
        }
    };
    const playerIndex = getIndex(playerSelection);
    const computerIndex = getIndex(computerChoice);
    if (playerIndex === computerIndex + 1 || playerIndex === computerIndex - 2) {
        return [`You Win! ${playerSelection} beats ${computerChoice}!`, 1, 0];
    }
    return [`You Lose! ${computerChoice} beats ${playerSelection}!`, 0, 1];
}

function gameUpdate(playerScore, computerScore) {
    if (playerScore !== 5 && computerScore !== 5) {
        return;
    }
    if (playerScore === 5) {
        return "You Won!";
    }
    return "You Lost!";
}

function gameRestart(...htmlTags) {
    for (tag of htmlTags) {
        tag.textContent = "";
    }
    return;
}

const buttons = document.querySelectorAll("button");
const score_container = document.querySelector("div");
const score = document.querySelector("h2");
const final_result = document.querySelector("h1");
const result = document.querySelector("h4");

let playerScoreTotal = 0;
let computerScoreTotal = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (playerScoreTotal === 5 || computerScoreTotal === 5) {
            document.body.addEventListener("click", () => {
                gameRestart(score, final_result, result);
                playerScoreTotal = 0;
                computerScoreTotal = 0;
            }, {
                once: true
            });
        }
        const [roundResult, playerScoreEarned, computerScoreEarned] = playRound(button.textContent, getComputerChoice);
        result.textContent = roundResult;
        playerScoreTotal += playerScoreEarned;
        computerScoreTotal += computerScoreEarned;
        score.textContent = `${playerScoreTotal} - ${computerScoreTotal}`;
        final_result.textContent = gameUpdate(playerScoreTotal, computerScoreTotal);
    });
});