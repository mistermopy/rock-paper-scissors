function computerPlay() {
    /* write a function that randomly returns either 'Rock' 'Paper' or 'Scissors' */
    let npcRandom = Math.random();
    if (npcRandom <= 0.33) {
        console.log('Computer choose Rock');
        return 'rock';
    } else if ((npcRandom > 0.33) && (npcRandom <= 0.66)) {
        console.log('Computer choose Paper');
        return 'paper';
    } else {
        console.log('Computer choose Scissors');
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    /* write a function that plays a single round w two paramters playerSelection and computerSelection and returns a string that declares the winner */
    if (playerSelection.toLowerCase() == 'rock') {
        console.log('Player choose Rock');
        if (computerSelection == 'rock') {
            return 'Draw!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock.'
        } else {
            return 'You win! Rock beats Scissors.'
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        console.log('Player choose Paper');
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock.';
        } else if (computerSelection == 'paper') {
            return 'Draw!'
        } else {
            return 'You lose! Scissors beat Paper.'
        }
    } else {
        console.log('Player choose Scissors');
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beat Paper.'
        } else {
            return 'Draw!'
        }
    }
}

const playerSelection = "PaPeR";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));