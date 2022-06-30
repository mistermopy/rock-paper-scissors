let result = 0;

function computerPlay() {
    if (Math.random() <= .33) {
        return 'rock';
    } else if ((Math.random() > .33) && (Math.random() <= .66)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let messageLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
    let messageWin = `You win! ${playerSelection} beats ${computerSelection}.`;
    if (computerSelection == playerSelection) {
        result += Number(0);
        console.log('Draw!');
        console.log(`Current score: ${result}`);
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                result += Number(-1);
                console.log(messageLose);
                console.log(`Current score: ${result}`);
            } else {
                result += Number(1);
                console.log(messageWin);
                console.log(`Current score: ${result}`);
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                result += Number(1);
                console.log(messageWin);
                console.log(`Current score: ${result}`);
            } else {
                result += Number(-1);
                console.log(messageLose);
                console.log(`Current score: ${result}`);
            }
        } else {
            if (computerSelection == 'rock') {
                result += Number(-1);
                console.log(messageLose);
                console.log(`Current score: ${result}`);
            } else if (computerSelection == 'paper') {
                result += Number(1);
                console.log(messageWin);
                console.log(`Current score: ${result}`);
            }
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerPrompt = prompt("rock, paper, or scissors?");
        playerSelection = playerPrompt.toLowerCase();
        console.log(`playerSelection: ${playerSelection}`);
        computerSelection = computerPlay();
        console.log(`computerSelection: ${computerSelection}`);
        playRound(playerSelection, computerSelection);
    }
    let summary = '';
    if (result < 0) {
        summary = result + ' is your final score. You lose.';
    } else if (result > 0) {
        summary = result + ' is your final score. You win!';
    } else {
        summary = result + ' is your final score. Draw!';
    }
    console.log(summary);
}

game();