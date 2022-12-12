
let playerScore = 0;
let computerScore = 0;
let numTies = 0
let roundNumber = 1;

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

function playRound(playerSelection, computerSelection) {
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    showRoundResult(winner, playerSelection, computerSelection);
    roundNumber++;
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

function updateScore(winner) {
    if (winner === "tie") {
        numTies++;
    } else {
        winner === "player" ? ++playerScore : ++computerScore;
    }
    showScore();
}

function showScore(){
    scoreBoard.textContent = `Score\nPlayer: ${playerScore} * CPU: ${computerScore} * Ties: ${numTies}`;
}

function showRoundResult(winner, playerSelection, computerSelection){
    let message = `Round ${roundNumber}: `
    switch (winner) {
        case "player":
            message += `You Win! Your ${playerSelection} beats ${computerSelection}`;
            break;
        case "CPU":
            message += `You Lose! ${computerSelection} beats your ${playerSelection}`;
            break;
        default:
            message += `Tie! Your ${playerSelection} ties ${computerSelection}`;
    }
    roundInfo.textContent = message + "\n" + roundInfo.textContent;
}

function game() {

    //Report winner
    playerScore > computerScore ? gameResult = "won" : gameResult = "lost";
    console.log(`You ${gameResult}! With a score of ${playerScore}-${computerScore} and ${numTies} ties`)
}