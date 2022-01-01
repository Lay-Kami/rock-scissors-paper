//start UI game

//get controls buttons
const btnPlay = document.querySelectorAll('button.play-btn');
const btnStart = document.querySelector('button.start');
const btnAll = document.querySelectorAll('button');
const btnResumeChoice = document.querySelector('button.resume-choice');

//for button effect
function handleClickEffect (e) {
  e.target.classList.add('btn-after');
  setTimeout(() => {
    e.target.classList.remove('btn-after');
  }, 200);
}
btnAll.forEach((button) => {
  button.addEventListener('click', handleClickEffect);
});

//resume user choice
function resumeChoice () {
  const imagePlayer = document.querySelector('img.user-play');
  const imageComputer = document.querySelector('img.computer-play');

  imagePlayer.setAttribute('src', './images/default-img.png');
  imageComputer.setAttribute('src', './images/default-img.png');
  playerChoice.choice = null;
  btnStart.setAttribute('disabled', 'true');
}
btnResumeChoice.addEventListener('click', resumeChoice);

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
  btnStart.removeAttribute('disabled');
  // setTimeout(btnStart.setAttribute('disabled', 'true')
  const imageComputer = document.querySelector('img.computer-play');
  imageComputer.setAttribute('src', './images/default-img.png');
}
const playerChoice = {choice: null};
btnPlay.forEach(button => {
  button.addEventListener('click', getChoice);
});

//change user display
function handleImageChangePlayer (e) {
  const imagePlayer = document.querySelector('img.user-play');

  if(e.target.dataset.play == 'rock') {
    imagePlayer.setAttribute('src', './images/rock.png');
  } else if (e.target.dataset.play == 'scissor') {
    imagePlayer.setAttribute('src', './images/scissor.png');
  } else {
    imagePlayer.setAttribute('src', './images/paper.png');
  }
}
btnPlay.forEach((button => {
  button.addEventListener('click', handleImageChangePlayer);
}))

//computer play
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomPlay () {
  let playChoice = ['rock', 'scissor', 'paper'];
  const maxNumber = playChoice.length;
  
  playChoice = playChoice.at(getRandomInt(0, maxNumber));
  computerChoice.choice = playChoice;
}
const computerChoice = {choice: null};
btnStart.addEventListener('click', getRandomPlay); 

//change computer display by event
function handleImageChangeComputer (e) {
  const imageComputer = document.querySelector('img.computer-play');

  if(computerChoice.choice == 'rock') {
    imageComputer.setAttribute('src', './images/rock.png');
  } else if (computerChoice.choice == 'scissor') {
    imageComputer.setAttribute('src', './images/scissor.png');
  } else if (computerChoice.choice == 'paper') {
    imageComputer.setAttribute('src', './images/paper.png');
  } else {
    imageComputer.setAttribute('src', './images/default-img.png');
  }
}
btnStart.addEventListener('click', handleImageChangeComputer);

//get result Win Lose Draw.
function gameMatch (player = playerChoice.choice, computer = computerChoice.choice) {
  const resultText = document.querySelector('p.result');

  if (player == computer) {
    resultText.textContent = 'DRAW'; //just to display for now
    return 'DRAW';
  } else if ((player == 'rock' && computer == 'scissor') 
      || (player == 'scissor' && computer == 'paper') 
      || (player == 'paper' && computer == 'rock')) {
    resultText.textContent = 'WIN';
    return 'WIN';
  } else {
    resultText.textContent = 'LOSE';
    return 'LOSE';
  }
} //return string WIN LOSE DRAW

//get score for match
function getScore(matchResult) {
  let scorePlayer = 0;
  let scoreComputer = 0;
  
  if ( matchResult == 'DRAW') {
      scorePlayer++;
      scoreComputer++;
      return [scorePlayer, scoreComputer];
  } else if (matchResult == 'WIN') {
      scorePlayer++;
      return [scorePlayer, scoreComputer];
  } else{
      scoreComputer++;
      return [scorePlayer, scoreComputer];
  }
}//return number array like [0,1]

btnStart.addEventListener('click', () => {
  const resultPlayText = document.querySelector('p.play-score');
  const resultCompText = document.querySelector('p.com-score');
  //start score play
  let playerScore = 0;
  let computerScore = 0;

  const match = gameMatch();
  const score = getScore(match);  
  console.log(score);
  //store score;
  playerScore = score[0];
  computerScore = score[1];

  //display score:
  resultPlayText.textContent = `${playerScore}`;
  resultCompText.textContent = `${computerScore}`;

  //add score after each play and display;
})

// //create a game() with arguments of the computerPlay and playerPlay:
// function getGameMatch(playerSelection = playerChoice.choice, 
// computerSelection = computerChoice.choice, score_01 = 0, score_02 = 0) {
//     //set initial score
//     let playerScore = score_01;
//     let computerScore = score_02;
//     const resultText = document.querySelector('p.result');
//     //test game matchs
//     if (playerSelection == computerSelection) {
//         resultText.textContent = "Draw";
//         playerScore++;
//         computerScore++;
//         return [playerScore, computerScore];
//     } else if ((playerSelection == 'rock' && computerSelection == 'scissor') 
//     || (playerSelection == 'scissor' && computerSelection == 'paper') 
//     || (playerSelection == 'paper' && computerSelection == 'rock')) {
//         resultText = `Win, ${playerSelection} beats ${computerSelection}`;
//         playerScore++;
//         return [playerScore, computerScore];
//     } else {
//         resultText = `Lose, ${playerSelection} loses against ${computerSelection}`;
//         computerScore++;
//         return [playerScore, computerScore];
//     }
// } //return output expected: [1,0]; [1,1]; [0,0]


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

