//start UI game

//get controls buttons
const btnPlay = document.querySelectorAll('button.play-btn');
const btnStart = document.querySelector('button.start');
const btnAll = document.querySelectorAll('button');
const btnResumeChoice = document.querySelector('button.resume-choice');
const btnRestart = document.querySelector('button.restart-game');

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

//get player choice by event
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
}//return number array [0,1] [1,1] [1,0]

//set initial count
let countClick = 0;

//count clicks
function clickFunc() {
  countClick += 1;
  if (countClick >= 5) {
    btnStart.setAttribute('disabled', 'true');
    btnPlay.forEach((button) => {
      button.setAttribute('disabled', 'true');
    });
  }
}

//set initial score
let playerScore = 0;
let computerScore = 0;

//set score count
btnStart.addEventListener('click', () => {
  const resultPlayText = document.querySelector('p.play-score');
  const resultCompText = document.querySelector('p.com-score');

  //users score:
  const matchScore = getScore(gameMatch()); //[0,1] [1,1] [1,0]

  playerScore = playerScore + matchScore[0];
  computerScore = computerScore + matchScore[1];
  
  //display score:
  resultPlayText.textContent = `${playerScore}`;
  resultCompText.textContent = `${computerScore}`;
  const resultText = document.querySelector('p.result');
  
  clickFunc();
  if (btnStart.disabled == true) {
    if (playerScore > computerScore) {
      resultText.textContent = "WINNER!";
    } else if (playerScore == computerScore) {
      resultText.textContent = "DRAW";
    } else {
      resultText.textContent = `LOSE!`;
    }
  }
});

//restart user choice
function resumeChoice () {
  const imagePlayer = document.querySelector('img.user-play');
  const imageComputer = document.querySelector('img.computer-play');

  imagePlayer.setAttribute('src', './images/default-img.png');
  imageComputer.setAttribute('src', './images/default-img.png');
  
  playerChoice.choice = null;
  
  btnStart.setAttribute('disabled', 'true');
  
  computerScore = 0;
  playerScore = 0;
  countClick = 0;

  const resultPlayText = document.querySelector('p.play-score');
  const resultCompText = document.querySelector('p.com-score');
  resultPlayText.textContent = '0';
  resultCompText.textContent = '0';

  btnPlay.forEach((button) => {
    button.removeAttribute('disabled');
  });
}
btnResumeChoice.addEventListener('click', resumeChoice);
