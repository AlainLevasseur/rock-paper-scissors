
let playerScore = 0;
let computerScore = 0;
let numTies = 0
let numRounds = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const scoreBoard = document.querySelector('.score');
const roundInfo = document.querySelector('.round-info');

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

showScore();


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper"; 
        case 2:
            return "scissors";
        default:
            console.warn("getComputerChoice switch logic is wrong! Choice value: " + choice);
    }
}

function getRoundResultMessage(winner, playerSelection, computerSelection){
        let message = `Round ${numRounds}: `
        switch (winner) {
            case "player":
                message += `You Win! Your ${playerSelection} beats ${computerSelection}`;
            case "CPU":
                message += `You Lose! ${computerSelection} beats your ${playerSelection}`;
            default:
                message += `Tie! Your ${playerSelection} ties ${computerSelection}`;
        }
        alert("RoundResultMessage not shown!");
}

function getRoundWinner(playerSelection, computerSelection) {
    //check for ties
    if(playerSelection === computerSelection) {
        return "tie";
    //check for wins
    } else  if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" || 
                playerSelection === "scissors" && computerSelection === "paper") {
        return "player";
    } else {
        return "CPU";
    }
}

function playRound(playerSelection, computerSelection) {
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    let roundMessage = getRoundResultMessage(winner, playerSelection, computerSelection);

}

function updateScore(winner) {
    //Update Score
    if (winner === "tie") {
        numTies++;
    } else {
        winner === "player" ? ++playerScore : ++computerScore;
    }
    showScore();
}

function showScore(){
    scoreBoard.innerText = `Score\nPlayer: ${playerScore} * CPU: ${computerScore} * Ties: ${numTies}`;
}

function game() {

    //Report winner
    playerScore > computerScore ? gameResult = "won" : gameResult = "lost";
    console.log(`You ${gameResult}! With a score of ${playerScore}-${computerScore} and ${numTies} ties`)
}