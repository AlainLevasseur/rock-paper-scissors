
let playerScore = 0;
let computerScore = 0;
let numTies = 0
let numRounds = 0;



const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const scoreBoard = document.querySelector('.score');

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));


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

function getPlayerChoice() {
    //make player selection variable
    let playerSelection;
    //make player choice validity variable
    let isValidChoice;

    //get player choice
    do {
        playerSelection = prompt("Rock, Paper or Scissors?")
        //check validity of player choice
        playerSelection = playerSelection === null ? "invalid choice" : playerSelection.toLocaleLowerCase();
        //set player choice validity variable
        isValidChoice = playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors";
    
    //reobtain player choice if invalid
    } while (!isValidChoice);
    
    //return player choice
    return playerSelection;
}

function getRoundResultMessage(roundResult, playerSelection, computerSelection){
        let message = `Round ${numRounds}: `
        switch (roundResult) {
            case "win":
                message += `You Win! Your ${playerSelection} beats ${computerSelection}`;
            case "lose":
                message += `You Lose! ${computerSelection} beats your ${playerSelection}`;
            default:
                message += `Tie! Your ${playerSelection} ties ${computerSelection}`;
        }
}

function getWinner(playerSelection, computerSelection) {
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
    //declare round result
    let roundResult = getWinner(playerSelection, computerSelection);
    console.log(roundResult);
    updateScore(roundResult);
    getRoundResultMessage(roundResult, playerSelection, computerSelection);
}

function updateScore(roundResult) {
    //Update Score
    if (roundResult === "tie") {
        numTies++;
    } else {
        roundResult === "win" ? ++playerScore : ++computerScore;
    }
}

function game() {

    //Report winner
    playerScore > computerScore ? gameResult = "won" : gameResult = "lost";
    console.log(`You ${gameResult}! With a score of ${playerScore}-${computerScore} and ${numTies} ties`)
}