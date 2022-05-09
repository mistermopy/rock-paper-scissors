function computerPlay() {
    /* write a function that randomly returns either 'Rock' 'Paper' or 'Scissors' */
    let npcChoice = Math.random();
    if (npcChoice <= 0.33) {
        console.log('Rock');
    } else if ((npcChoice > 0.33) && (npcChoice <= 0.66)) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
}