/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//creating varaibles for the game
// scores varaible is for total score
// roundScore is for round score record
//activePlayer is for dermination of active player (playing now)
// dice variable (a random number form 1 to 6 )

var scores, roundScore, activePlayer;  //dice;
//setting the varibles values
//scores is array starts with 0 
// roundScore starts with 0
// activePlayer 0 (first player ) and 1 (second player)
//set dice var math.floor to make number without decimals and math.random choose number from 0 to 1
// * 6 to make the value from (1 to 5) AND TO MAKE FROM (1 TO 6 WE HAVE TO ADD 1)

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
//dice = Math.floor(Math.random() * 6) + 1;

// selection of item in html file current-0 (round score) to select player one score
// to show the text of the dice we have to add .textcontent and 
// make all of this == to dice value (form 1 to 6)
// active player change player bettwen 2 players
//document.querySelector('#current-' + activePlayer).textContent = dice;

// to hide the dice pic form the begining 
// in html pic with class named dice
// to hide the pic from begining style.display = 'none';  
document.querySelector('.dice').style.display = 'none';

// setting the value of total score ( scroe - o for player 1) and score 1 for other player 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

// setting the value of current score ( current- o for player 1) and score 1 for other player 

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';





// creating function to show a random dice pic based on random dice and selecting but roll in html

document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3 update the dice score if not equal to 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        // next player

        // if player === 0  check player and change it
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // to set round score to 0
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // to show who the active player is in user interface
        // choosing in html player - 0 - panel and its a class choose remove active class to remove from player 1
        // add player 1 to make him appear active and if player 1 is active again make him appears active

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // hide the dice pic once the player rounds end
        document.querySelector('.dice').style.display = 'none';



    }



});