# rock-scissors-paper

The task is to build a "rock scissors paper" game that will be played from the console, at least for this first part. 
It must have two players, one of them being the computer. Also, must return praises for the winner after each round.

The console.log() will return the results for each round.

* HOW THE GAME WORK:
    
    1. Player 1 choose between rock, scissors and paper;
    2. After typing the anwser (it must be case-insentive), Player 2, played by the computer, will choose randomly between the 3 also.
    3. The awnser between the two will be compared:
        * rock beats scissors;
        * scissors beats paper;
        * paper beats rock; 
    4. the comparissom must return a congratuleted message to the winner.
    5. after that, the round restart 5 times.

* PSEUDOCODE TRAINNING: 
Dica: ajuda pensar em output de um e input de outro (return)

 get from user "playerOne" the choice between rock, scissor and paper;
    change all the letters to lowercase to compare;
    return rock scissor or paper;
    
    //console.log(playerOne);

    if the anwser !rock scissor or paper
        loop to prompt again until anwser == rock scissor or paper.

 get the "computerPlay" select randomsly between rock, scissor and paper;
    set a list array [rock, scissor, paper, rock, scissor, paper, rock, scissor, paper].
    Chose random between 0 and 9.
    return rock scissor, paper.

    //console.log(computerPlay);

create a function getGameMatch()
compare the choice between "playerOne" vs "computerPlay" in this order: 
if playerOne == ComputerPlay
    return `draw`;
else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')
    ); 
    return `${playerOne} beats ${computerPlay}`;
else 
    return `Lose, ${playerOne} loses to ${computerPlay}`;

For each match, add a score count to the winner for each round
use getGameMatch as argument, const gameMatch = getGameMatch();

getPlayerOneScore(gameMatch):
let playerScore = 0;
if gameMatch == `${playerOne} beats ${computerPlay}` || gameMatch == `draw`
   return playerScore++;
else
    return 0;

getComputerPlayScore(gameMatch):
let computerScore = 0;
if gameMatch == `Lose, ${playerOne} loses to ${computerPlay}`|| gameMatch == `draw`
   return computerScore++;
else
    return 0;

OR using array:

getScoreGameMatch(gameMatch):
let playerScore = 0;
let computerScore = 0; 
if gameMatch == `${playerOne} beats ${computerPlay}`
    return [playerScore++, computerScore];
if else gameMatch == `draw`
    return [playerScore++, computerScore++];
else
    return [playerScore, computerScore++];


loop each match with rounds as parameter
return score for winner after n rounds

getScoreForRoundsMatch  
    let gameMatch;
    let 
    for (let i = 0; i < rounds; i++) {
        gameMatch = getGameMatch (playerSelection, computerSelection);
        if (gameMatch == `${playerOne} beats ${computerPlay}`) {
        add 1 to playerOneScore
        }
    }


Compare the score count between playerOne (isPlayerScore) and computerPlay (isComputerScore);
after 3 rounds:
    if (isPlayerScore  == 3 wins) {
            return VICTORY!
        }
        else if (isComputerScore == 3 wins)
            return LOSE! try again!
        } else { 
            round 4 
        }
after 4 round:
    if (isPlayerScore >= 3 wins) {
            return VICTORY!
        }
    else if (isComputerScore >= 3 wins){
            return LOSE! try again!
        } 
    else if (isPlayerScore == isComputerScore) {
            return DRAW
        }
    else {
            round 5
        }
after 5 round:
    if (isPlayerScore >= 3 wins) {
            return VICTORY!
        }
    else {
            return LOSE! try again!
        } 






