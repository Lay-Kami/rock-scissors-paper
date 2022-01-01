//functions declared
function handleClickEffect (e) {
  e.target.classList.add('btn-after');
    
  setTimeout(() => {
    e.target.classList.remove('btn-after');
  }, 200);
}

//get choice by event
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

//get random computer play
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
  return playChoice;
}

//start UI game
//get controls
const btnPlay = document.querySelectorAll('button.play-btn');
const btnStart = document.querySelector('button.start');
const playerChoice = {choice: null};

//add buttons effects
btnPlay.forEach((button) => {
  button.addEventListener('click', handleClickEffect);
});
btnStart.addEventListener('click', handleClickEffect);

//User choice
btnPlay.forEach(button => {
  button.addEventListener('click', getChoice);
});


  