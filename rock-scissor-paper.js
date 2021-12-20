//get player one choice and compare.
function getPlayerOneChoice () { 
    let playChoice;
    //repeat if is not the required choice.
    do {
        playChoice = prompt("Choose between rock, scissor or paper:","");
        playChoice = playChoice.toLowerCase().trim();
    } while ((playChoice !== 'rock') && (playChoice !== 'scissor') 
    && (playChoice !== 'paper'));
    return playChoice;
}
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
//create a game() with arguments of the computer and player:
function getGameMatch(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection == computerSelection) {
        console.log("Draw");
        playerScore++;
        computerScore++;
        return [playerScore, computerScore];
    } else if (
      (playerSelection == 'rock' && computerSelection == 'scissors') || 
      (playerSelection == 'scissor' && computerSelection == 'paper') || 
      (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log(`Win, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        return [playerScore, computerScore];
    } else {
        console.log(`Lose, ${playerOne} loses against ${computerPlay}`);
        computerScore++;
        return [playerScore, computerScore];
    }
}
const playerOne = getPlayerOneChoice();
const computerPlay = getRandomPlay();

let matchResult = getGameMatch(playerOne, computerPlay);
let playerOneScore = matchResult[0];
let computerPlayScore = matchResult[1];

console.log(`match score is: ${playerOneScore} vs ${computerPlayScore}`);
console.log(`This is the playerOne choice: ${playerOne}`); // just for checking
console.log(`This is the computer choice: ${computerPlay}`); // just for checking