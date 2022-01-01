//functions declared
//for effect
function handleClickEffect (e) {
  e.target.classList.add('btn-after');
    
  setTimeout(() => {
    e.target.classList.remove('btn-after');
  }, 200);
}

//get user choice by event
function getChoice (e) {
  switch (e.target.dataset.play) {
    case 'rock':
      playerChoice.choice = 'rock';
      break;
    case 'scissor':
      playerChoice.choice = 'scissor';
      break;
    case 'paper':
      playerChoice.choice = 'paper';
      break;
  }
}

//computerPlay
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomPlay () {
    let playChoice = ['rock', 'scissor', 'paper'];
    const maxNumber = playChoice.length;
    //get random index array and return it
    playChoice = playChoice.at(getRandomInt(0, maxNumber));
    computerChoice.choice = playChoice;
}

//start UI game
//get controls
const btnPlay = document.querySelectorAll('button.play-btn');
const btnStart = document.querySelector('button.start');

//add buttons effects
btnPlay.forEach((button) => {
  button.addEventListener('click', handleClickEffect);
});
btnStart.addEventListener('click', handleClickEffect);

//User choice
const playerChoice = {choice: null};
btnPlay.forEach(button => {
  button.addEventListener('click', getChoice);
});

//computer play by start
const computerChoice = {choice: null};
btnStart.addEventListener('click', getRandomPlay);

//create a game() with arguments of the computerPlay and playerPlay:
function getGameMatch(playerSelection = playerChoice.choice, 
computerSelection = computerChoice.choice, score_01 = 0, score_02 = 0) {
    //set initial score
    let playerScore = score_01;
    let computerScore = score_02;
    const resultText = document.querySelector('p.result');
    //test game matchs
    if (playerSelection == computerSelection) {
        resultText.textContent = "Draw";
        playerScore++;
        computerScore++;
        return [playerScore, computerScore];
    } else if ((playerSelection == 'rock' && computerSelection == 'scissor') 
    || (playerSelection == 'scissor' && computerSelection == 'paper') 
    || (playerSelection == 'paper' && computerSelection == 'rock')) {
        resultText = `Win, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        return [playerScore, computerScore];
    } else {
        resultText = `Lose, ${playerSelection} loses against ${computerSelection}`;
        computerScore++;
        return [playerScore, computerScore];
    }
} //return output expected: [1,0]; [1,1]; [0,0]

// //create 5 rounds match:
// const playGameMatch = (rounds = 5) => {
//     let playerOneScore = 0;
//     let computerPlayScore = 0;
//     let matchResult;
//     //get match result and score
//     for (let i = 0; i < rounds; i++) {
//         if (i == 3) {
//             if (playerOneScore == 3) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `VICTORY!`;
//             } else if (computerPlayScore == 3) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `LOSE!`;
//             } 
//         } 
//         if (i == 4) {
//             if (playerOneScore >= 3) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `VICTORY!`;
//             } else if (computerPlayScore >= 3) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `LOSE!`;
//             } else if (playerOneScore == 2 && computerPlayScore == 2) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `DRAW!`;
//             } 
//         }
//         if (i == 5) {
//             if (playerOneScore >= 3) {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `VICTORY!`;
//             } else {
//                 console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
//                 return `LOSE!`;
//             }
//         }
//         matchResult = getGameMatch();
//         playerOneScore = playerOneScore + matchResult[0];
//         computerPlayScore = computerPlayScore + matchResult[1];
//         console.log(`match score is: ${playerOneScore} vs ${computerPlayScore}`);
//     }
// }

// console.log(playGameMatch());

// setInterval(() => {
//   console.log(computerChoice);
//   console.log(playerChoice);
// }, 5000);

