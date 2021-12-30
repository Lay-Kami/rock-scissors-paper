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
    6. Should check after 3 rounds if there's already any winner.

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
getGameMatch return values
for win: playerScore++;
for draw: playerScore++, computerScore++;
for lose: computerScore++;
score must start at 0.

loop each match with rounds as parameter
return score for winner after n rounds

Get results after 3 rounds and check if there's already winners:
switch for checking
after 3 rounds:
    if (isPlayerScore  == 3 wins) {
            console.log(final score)
            return VICTORY!
        }
        else if (isComputerScore == 3 wins)
            console.log(final score)
            return LOSE! try again!
        } else { 
            round 4 
        }
after 4 round:
    if (isPlayerScore >= 3 wins) {
            console.log(final score)
            return VICTORY!
        }
    else if (isComputerScore >= 3 wins){
            console.log(final score)
            return LOSE! try again!
        } 
    else if (isPlayerScore == isComputerScore) {
            console.log(final score)
            return DRAW
        }
    else {
            round 5
        }
after 5 round:
    if (isPlayerScore >= 3 wins) {
            console.log(final score)
            return VICTORY!
        }
    else {
            console.log(final score)
            return LOSE! try again!
        } 

# add UI

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

   >  For now, remove the logic that plays exactly five rounds.
   
   >  Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
   
   > Add a div for displaying results and change all of your console.logs into DOM methods.
   
   > Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
   
   > Once you’re all done with your UI and make sure everything’s satisfactory, it’s time to merge our current branch rps-ui to our main branch.

   PLAN:

   1. design UI scheme;
   2. define basic html + css;
   3. get useful DOM (try to display all console.log())
   4. must: how to play, display score, describe play, announce winner.
   5. maybe add images for each play choice: rock, scissor and paper. (png img) from repo.

   PSEUDOCODE:
