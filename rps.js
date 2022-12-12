let playerScore = 0;
let computerScore = 0;
let numTies = 0
let numRounds = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

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
        switch (roundResult) {
            case "win":
                return `You Win! Your ${playerSelection} beats ${computerSelection}`;
            case "lose":
                return `You Lose! ${computerSelection} beats your ${playerSelection}`;
            default:
                return `Tie! Your ${playerSelection} ties ${computerSelection}`;
        }
}

function playRound(playerSelection, computerSelection) {
    //declare round result
    let roundResult

    //check for ties
    if(playerSelection.toLowerCase() === computerSelection) {
        roundResult = "tie";
    } else {
        //check for wins
        switch( playerSelection.toLowerCase() ) {
            //Player -> rock: 
            case "rock":
                //Compare against computer selection
                //CPU -> Scissors: win, Paper: lose
                computerSelection === "scissors" ? roundResult = "win" : roundResult = "lose";
                break;
            //Player -> paper:
            case "paper":
                //Compare against computer selection 
                //CPU -> Rock: win, Scissors: lose
                computerSelection === "rock" ? roundResult = "win" : roundResult = "lose";
                break;
            //Player -> scissors:
            case "scissors":
                //Compare against computer selection
                //CPU -> Paper: win, Rock: lose
                computerSelection === "paper" ? roundResult = "win" : roundResult = "lose";
                break;
            //Player -> invalid choice:
            default:
                console.warn("Invalid player selection!");
                roundResult =  "Error!"
            }
        }
    console.log(`played: ${playerSelection}`)
    //return round result
    return roundResult;
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
    //player selection variable
    let playerSelection;
    //computer selection variable
    let computerSelection;
    //round result variable
    let roundResult;
    //game result variable
    let gameResult;

    //Play 5 rounds
    for(let i = 0; i < numRounds; i++){
        //Get Player Selection
        playerSelection = getPlayerChoice();
        //Get Computer Selection
        computerSelection = getComputerChoice();
        //Get Round result
        roundResult = playRound(playerSelection, computerSelection);
        //Output Round result
        console.log(`Round ${i + 1}: ${getRoundResultMessage(roundResult, playerSelection, computerSelection)}`);
    }
    //Report winner
    playerScore > computerScore ? gameResult = "won" : gameResult = "lost";
    console.log(`You ${gameResult}! With a score of ${playerScore}-${computerScore} and ${numTies} ties`)
}

game();