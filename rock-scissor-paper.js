//get player one choice and compare.
function getPlayerOneChoice () { 
    let playChoice = prompt("Choose between rock, scissor or paper:","");
    playChoice = playChoice.toLowerCase().trim();
    return playChoice;
}

const playerOne = getPlayerOneChoice();

//functions for computerPlay to work
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomPlay () {
    let playChoice = ['rock', 'scissor', 'paper'];
    //get random number between array lenght.
    const maxNumber = playChoice.length;
    //get random index array and return it
    playChoice = playChoice.at(getRandomInt(0, maxNumber));
    return playChoice;
}

const computerPlay = getRandomPlay();

//compare the choices:




console.log(`This is the computer choice: ${computerPlay}`); // just for checking
console.log(`This is the playerOne choice: ${playerOne}`); // just for checking

//Try the loop later;
// (playChoice !== 'rock' || playChoice !== 'scissor' || playChoice !== 'paper')
// (playerOne !== 'rock' || playerOne !== 'scissor' || playerOne !== 'paper')