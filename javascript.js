const body = document.querySelector('body'), 
container = document.querySelector('.container'),
content = document.querySelector('#content'),
rock = document.querySelector('#rock'),
paper = document.querySelector('#paper'),
scissors = document.querySelector('#scissors'),
btnCSS = document.querySelector('#btnCSS'),
playerSelectionDisplay = document.querySelector('#playerSelection'),
compSelectionDisplay = document.querySelector('#computerSelection'),
resultDisplay = document.querySelector('#result'),
gameLose = 'You lost 5 games. You lose. Sorry.',
gameWin = 'Wait you won?! 5 games! Congrats!',
playerScore = document.querySelector('#playerScore'),
compScore = document.querySelector('#computerScore');

let finalResult = document.createElement('div');

body.style = 'height: 95vh; width: 95vw;';
container.style = 'height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;';
btnCSS.style = 'display: flex; gap: 15%;';
content.style = 'margin-top: 5%; height: 80%; width: 80%; display: flex; flex-direction: column; justify-content: space-between;';

let playerSelectionValue = document.createElement('span');
let compSelectionValue = document.createElement('span');
playerSelectionValue.textContent = '';
compSelectionValue.textContent = '';
playerSelectionDisplay.appendChild(playerSelectionValue);
compSelectionDisplay.appendChild(compSelectionValue);
let resultsValue = document.createElement('span');
resultsValue.textContent = '';
resultDisplay.appendChild(resultsValue);
resultDisplay.appendChild(finalResult);

let pScoreDisplay = document.createElement('span');
pScoreActual = 0;
let cScoreDisplay = document.createElement('span');
cScoreActual = 0;
pScoreDisplay.textContent = `${pScoreActual}`;
cScoreDisplay.textContent = `${cScoreActual}`;
playerScore.appendChild(pScoreDisplay);
compScore.appendChild(cScoreDisplay);

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
    const draw = 'Draw!';
    playerSelectionValue.textContent = playerSelection;
    compSelectionValue.textContent = computerSelection;
    if (computerSelection == playerSelection) {
        resultsValue.textContent = draw;
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                cScoreActual += 1;
                cScoreDisplay.textContent = `${cScoreActual}`;
                resultsValue.textContent = messageLose;
            } else {
                pScoreActual += 1;
                pScoreDisplay.textContent = `${pScoreActual}`;
                resultsValue.textContent = messageWin;
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                pScoreActual += 1;
                pScoreDisplay.textContent = `${pScoreActual}`;
                resultsValue.textContent = messageWin;
            } else {
                cScoreActual += 1;
                cScoreDisplay.textContent = `${cScoreActual}`;
                resultsValue.textContent = messageLose;
            }
        } else {
            if (computerSelection == 'rock') {
                cScoreActual += 1;
                cScoreDisplay.textContent = `${cScoreActual}`;
                resultsValue.textContent = messageLose;
            } else if (computerSelection == 'paper') {
                pScoreActual += 1;
                pScoreDisplay.textContent = `${pScoreActual}`;
                resultsValue.textContent = messageWin;
            }
        }
    }
    if (cScoreActual == 5) {
        container.replaceChildren(gameLose);
    } else if (pScoreActual == 5) {
        container.replaceChildren(gameWin);
    }
}

rock.addEventListener('click', ()=> {
    playRound('rock', computerPlay());
});

paper.addEventListener('click', ()=> {
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', ()=> {
    playRound('scissors', computerPlay());
});