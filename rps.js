//Game Data
const scoreBoard = document.querySelector('.score');
let playerScore;
let computerScore;
let tieCount;
const history = document.querySelector('.history');
let roundCount;

//Game Settings
const MAX_SCORE = 5;

startup();

function startup() {
    addPlayerChoices();    
    newGame();
}

function addPlayerChoices() {
    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', playRock);
    
    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', playPaper);
    
    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', playScissors);
}

function playRock() {
    playRound("Rock", getComputerChoice());
}

function playPaper() {
    playRound("Paper", getComputerChoice());
}

function playScissors() {
    playRound("Scissors", getComputerChoice());
}

function playRound(playerSelection, computerSelection) {
    ++roundCount;
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    showRoundResult(winner, playerSelection, computerSelection);
    checkVictory();
}

function getRoundWinner(playerSelection, computerSelection) {
    //check for tie
    if(playerSelection === computerSelection) {
        return "tie";
    //check for win
    } else if ( playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" || 
                playerSelection === "Scissors" && computerSelection === "Paper") {
        return "player";
    } else {
        return "CPU";
    }
}

function updateScore(winner) {
    if (winner === "tie") {
        tieCount++;
    } else {
        winner === "player" ? ++playerScore : ++computerScore;
    }
    showScore();
}

function showScore() {
    scoreBoard.textContent = `Score\nPlayer: ${playerScore} * CPU: ${computerScore} * Ties: ${tieCount}`;
}

function showRoundResult(winner, playerSelection, computerSelection) {
    let message = `Round ${roundCount}: <span class='`;
    switch (winner) {
        case "player":
            message += `win'>You Win! Your ${playerSelection} beats ${computerSelection}`;
            break;
        case "CPU":
            message += `loss'>You Lose! ${computerSelection} beats your ${playerSelection}`;
            break;
        default:
            message += `tie'>Tie! Your ${playerSelection} ties ${computerSelection}`;
    }
    //Most recent round info added to the top
    history.innerHTML = message + "</span>\n" + history.innerHTML;
}

function checkVictory() {
    if(playerScore === MAX_SCORE) { 
        showGameEnd('Victory'); 
    } else if(computerScore === MAX_SCORE) { 
        showGameEnd('Defeat');
    }
}

function showGameEnd(ending) {
    history.innerHTML = `<span class='${ending}'>${ending}! Your score: ${playerScore}W ${computerScore}L ${tieCount}T</span>\n` + history.innerHTML;
    newGame();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper"; 
        case 2:
            return "Scissors";
        default:
            console.warn("getComputerChoice switch logic is wrong! Choice value: " + choice);
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    tieCount = 0
    roundCount = 0;
    showScore();
}