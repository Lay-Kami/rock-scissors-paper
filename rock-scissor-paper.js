

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
    return playChoice;
}

//create a game() with arguments of the computerPlay and playerPlay:
function getGameMatch(playerSelection = getPlayerOneChoice(), 
computerSelection = getRandomPlay(), score_01 = 0, score_02 = 0) {
    //set initial score
    let playerScore = score_01;
    let computerScore = score_02;
    //test game matchs
    if (playerSelection == computerSelection) {
        console.log("Draw");
        playerScore++;
        computerScore++;
        return [playerScore, computerScore];
    } else if ((playerSelection == 'rock' && computerSelection == 'scissor') 
    || (playerSelection == 'scissor' && computerSelection == 'paper') 
    || (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log(`Win, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        return [playerScore, computerScore];
    } else {
        console.log(`Lose, ${playerSelection} loses against ${computerSelection}`);
        computerScore++;
        return [playerScore, computerScore];
    }
} //return output expected: [1,0]; [1,1]; [0,0]


//create 5 rounds match:
const playGameMatch = (rounds = 5) => {
    let playerOneScore = 0;
    let computerPlayScore = 0;
    let matchResult;
    //get match result and score
    for (let i = 0; i < rounds; i++) {
        if (i == 3) {
            if (playerOneScore == 3) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `VICTORY!`;
            } else if (computerPlayScore == 3) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `LOSE!`;
            } 
        } 
        if (i == 4) {
            if (playerOneScore >= 3) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `VICTORY!`;
            } else if (computerPlayScore >= 3) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `LOSE!`;
            } else if (playerOneScore == 2 && computerPlayScore == 2) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `DRAW!`;
            } 
        }
        if (i == 5) {
            if (playerOneScore >= 3) {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `VICTORY!`;
            } else {
                console.log(`FINAL SCORE:${playerOneScore} vs ${computerPlayScore}`);
                return `LOSE!`;
            }
        }
        matchResult = getGameMatch();
        playerOneScore = playerOneScore + matchResult[0];
        computerPlayScore = computerPlayScore + matchResult[1];
        console.log(`match score is: ${playerOneScore} vs ${computerPlayScore}`);
    }
}

console.log(playGameMatch());
