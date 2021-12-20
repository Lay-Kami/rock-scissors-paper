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

 get from user "playerOne" the choice between rock, scissor and paper;
    change all the letters to lowercase to compare;
    return rock scissor or paper;
    
    //console.log(playerOne);

    if the anwser !rock scissor or paper
        loop to prompt again until anwser === rock scissor or paper.

 get the "computerPlay" select randomsly between rock, scissor and paper;
    set a list array [rock, scissor, paper, rock, scissor, paper, rock, scissor, paper].
    Chose random between 0 and 9.
    return rock scissor, paper.

    //console.log(computerPlay);

compare the choice between "playerOne" vs "computerPlay" in this order;
if playerOne == ComputerPlay
    return `draw`;
else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')
    ); 
    return `${playerOne} beats ${computerPlay}`;
else 
    return `Lose, ${playerOne} loses to ${computerPlay}`;

