//get random choice by the computer:
/* get the "computerPlay" select randomsly between rock, scissor and paper;
    set a list array [rock, scissor, paper, rock, scissor, paper, rock, scissor, paper].
    Chose random between 0 and 9.
    return rock scissor, paper.

    //console.log(computerPlay); */




//functions for computerPlay to work

function getRandomPlay () {
    let playChoice = ['rock', 'scissor', 'paper', 'rock', 'scissor', 'paper','rock', 'scissor', 'paper'];
    //get random number between array lenght.
    const maxNumber = playChoice.length;
    //get random index array and return it
    playChoice = playChoice.at(getRandomInt(0, maxNumber));
    return playChoice;
}


const computerPlay = getRandomPlay();
console.log(computerPlay);

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
