function computerPlay() {
    /* write a function that randomly returns either 'Rock' 'Paper' or 'Scissors' */
    let npcRandom = Math.random();
    if (npcRandom <= 0.33) {
        return 'rock';
    } else if ((npcRandom > 0.33) && (npcRandom <= 0.66)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    /* write a function that plays a single round w two paramters playerSelection and computerSelection and returns a string that declares the winner */
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            return 'Draw!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats Rock.'
        } else {
            return 'You win! Rock beats Scissors.'
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock.';
        } else if (computerSelection == 'paper') {
            return 'Draw!'
        } else {
            return 'You lose! Scissors beat Paper.'
        }
    } else {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beat Paper.'
        } else {
            return 'Draw!'
        }
    }
}

function recordScore() {
    if (round == 'Draw!') {
        return Number(0);
    } else if ((round == 'You lose! Paper beats Rock.') || (round == 'You lose! Rock beats Scissors.') || (round == 'You lose! Scissors beat Paper.')) {
        return Number(-1);
    } else {
        return Number(1);
    }
}

function game() {
    /* call playRound function to play a 5 round game that keeps score and reports a winner or loser */
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper, or scissors?");
        computerSelection = computerPlay();
        round = playRound(playerSelection, computerSelection);

        if (i == 0) {
            scoreOne = recordScore();
            finalScore = scoreOne;
        } else if (i == 1) {
            scoreTwo = recordScore() + scoreOne;
            finalScore = scoreTwo;
        } else if (i == 2) {
            scoreThree = recordScore() + scoreTwo;
            finalScore = scoreThree;
        } else if (i == 3) {
            scoreFour = recordScore() + scoreThree;
            finalScore = scoreFour;
        } else if (i == 4) {
            finalScore = recordScore() + scoreFour;
        }
        
        console.log(`playerSelection: ${playerSelection}`);
        console.log(`computerSelection: ${computerSelection}`);
        console.log(round);
        console.log(finalScore);
    }

    if (finalScore < 0) {
        return finalScore + ' is your final score. You lose.';
    } else if (finalScore > 0) {
        return finalScore + ' is your final score. You win!';
    } else {
        return finalScore + ' is your final score. Draw!';
    }
}

console.log(game());