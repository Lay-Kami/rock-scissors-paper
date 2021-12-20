//get player one choice and compare.
function getPlayerOneChoice () { 
    let playChoice;
    do {
        playChoice = prompt("Choose between rock, scissor or paper:","");
        playChoice = playChoice.toLowerCase().trim();
    } while ((playChoice !== 'rock') && (playChoice !== 'scissor') 
    && (playChoice !== 'paper'));
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
//create a game() with arguments of the computer and player:
function getGameMatch(playerSelection, computerSelection) {
    //ternary operator trainnig:
    const isMatchResult = (playerSelection == computerSelection) ? `draw` 
    : (playerSelection == 'rock' && computerSelection == 'scissors') || 
      (playerSelection == 'scissor' && computerSelection == 'paper') || 
      (playerSelection == 'paper' && computerSelection == 'rock') ? `Win, ${playerSelection} beats ${computerSelection}`
    : `Lose, ${playerOne} loses against ${computerPlay}`;
    return isMatchResult;
}


console.log(getGameMatch(playerOne, computerPlay));
console.log(`This is the playerOne choice: ${playerOne}`); // just for checking
console.log(`This is the computer choice: ${computerPlay}`); // just for checking


//Try the loop later;
// (playChoice !== 'rock') || (playChoice !== 'scissor') || (playChoice !== 'paper')
// (playerOne !== 'rock' || playerOne !== 'scissor' || playerOne !== 'paper')