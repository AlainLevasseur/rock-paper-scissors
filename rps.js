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
    return "rock";
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
            default:
                console.warn("Invalid player selection!");
                roundResult =  "Error!"
            }
    }
    //output round result message
    switch (roundResult) {
        case "win":
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            break;
        case "lose":
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            break;
        default:
            console.log(`Tie! ${playerSelection} ties ${computerSelection}`);
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

    //Play 5 rounds
    for(let i = 0; i < 5; i++){
        //Get Player Selection
        playerSelection = "roCk";
        //Get Computer Selection
        computerSelection = getComputerChoice();
        //Get Round result
        roundResult = playRound(playerSelection, computerSelection);
        //Update Score

        //Report winner
    }
}

console.log(playRound("roCK", getComputerChoice()));