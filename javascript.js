let result = 0;
const btnR = document.querySelector('#btnR');
const btnP = document.querySelector('#btnP');
const btnS = document.querySelector('#btnS');

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
    console.log(`playerSelection: ${playerSelection}`);
    console.log(`computerSelection: ${computerSelection}`);
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

btnR.addEventListener('click', ()=> {
    playRound(btnR.textContent, computerPlay());
});

btnP.addEventListener('click', ()=> {
    playRound(btnP.textContent, computerPlay());
});

btnS.addEventListener('click', ()=> {
    playRound(btnS.textContent, computerPlay());
});

/*function game() {
    for (let i = 0; i < 5; i++) {

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
}*/