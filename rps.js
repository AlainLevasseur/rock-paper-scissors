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
    return getComputerChoice();
}

function getRoundResultMessage(roundResult, playerSelection, computerSelection){
        switch (roundResult) {
            case "win":
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            case "lose":
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            default:
                return `Tie! ${playerSelection} ties ${computerSelection}`;
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

    //return round result
    return roundResult;
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
    //player score variable
    let playerScore = 0;
    //computer score variable
    let computerScore = 0;
    //tie count variable
    let numTies = 0

    //Play 5 rounds
    for(let i = 0; i < 5; i++){
        //Get Player Selection
        playerSelection = getPlayerChoice();
        //Get Computer Selection
        computerSelection = getComputerChoice();
        //Get Round result
        roundResult = playRound(playerSelection, computerSelection);
        //Output Round result
        console.log(`Round ${i + 1}: ${getRoundResultMessage(roundResult, playerSelection, computerSelection)}`);
        //Update Score
        if (roundResult === "tie") {
            numTies++;
        } else {
            roundResult === "win" ? ++playerScore : ++computerScore;
        }
    }
    //Report winner
    playerScore > computerScore ? gameResult = "won" : gameResult = "lost";
    console.log(`You ${gameResult}! With a score of ${playerScore}-${computerScore} and ${numTies} ties`)
}

game();