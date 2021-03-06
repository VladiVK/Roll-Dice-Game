
var scores, roundScore, activePlayer, gamePlaying;

init();

var checkForSix;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        // 1. we need a random number:
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    // 2. we need to display the result
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src ='images/dice-' + dice + '.png';
    document.querySelector('.dice2').style.display = 'block';
    document.querySelector('.dice2').src ='images/dice-' + dice2 + '.png';

    // 3. we need update the round score if the result in NOT 1
    
    /* if ((dice === 6 || dice2 === 6) && checkForSix === 6) */
    if (dice === 6 && dice2 === 6) {
        // player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice !== 1 && dice2 !== 1) {
        // add dice to the roundScore
        roundScore += (dice + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }  else {
        // next player
        nextPlayer();
        }
        //checkForSix = dice + dice2;
    }
});

    document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying) {
    // we need add Current score to Global score (from var to the array)

    scores[activePlayer] += roundScore;

        // we need upldate UI (user interface) / show our global score

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
    var input = document.querySelector('.finalScore').value;
    var customScore;
    
    // input: undefined, 0, null, "" give us FALSE
    // all else give us TRUE
    if(input) {
        customScore = input;
    } else {
        customScore = 100;
    }
       
    // we need check if player won the game
        if(scores[activePlayer] >= customScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            // now we need remove .dice (image of dice) after winner
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
            // we need add class '.winner'
        document.querySelector('.player-' + activePlayer +'-board').classList.add('winner');
        document.querySelector('.player-' + activePlayer +'-board').classList.remove('active');
        gamePlaying = false;
        } else {
            // next player
        nextPlayer();
        }
        }
     
    });


function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // now we need refresh the roundScore.
    // Because previous player result inherits next player
    roundScore = 0;

    // we need switch current- content
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // we need change class .active  // we use method toggle. It works like switch
     document.querySelector('.player-0-board').classList.toggle ('active');
     document.querySelector('.player-1-board').classList.toggle ('active');
    
     //this code analog of previous with toggle
    /* document.querySelector('.player-0-board').classList.remove ('active');
    document.querySelector('.player-1-board').classList.add ('active'); */

    // now we need remove .dice (image of dice) after run 1 and player chanched
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

// we need to hide default style image of dice
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

// we need refresh picture from default style decoration values (43 ~ 11 etc.)
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

// we need refresh picture from previous values and winner`s style
// and again put class "active" in order to start our game
document.querySelector('.player-0-board').classList.remove('winner');
document.querySelector('.player-1-board').classList.remove('winner');
document.querySelector('.player-0-board').classList.remove('active');
document.querySelector('.player-1-board').classList.remove('active');
document.querySelector('.player-0-board').classList.add('active');
}


 
