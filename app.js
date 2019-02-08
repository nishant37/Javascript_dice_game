var scores, roundScore,activePlayer,gamePlay;

initialization();







// Setup an event handler
//addEventListener has two arguments. First is event type. Second is the function which is called as soon as the event happens.
// Setting up an anonymous function for the event listener


var lastdice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // Check if game is still playing
    
    if(gamePlay){
        
         // 1. Get a random number when someone clicks the button
       var dice = Math.floor(Math.random() * 6)+1;
    
    // 2. Display the result
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    
    
    
    // 3. Update the round score if rolled number is not 1
       //Check the value of dice using if-else statement
        
        if(dice==6 && lastdice ==6){
            
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            nextTurn();
        }
        
   else if(dice !== 1){
        // Add score
        roundScore += dice;
        // Store the roundscore value into the active player current round score
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    }else{
        // Next player turn
        // Turnary operator to change the player
       nextTurn();
        
    }   
        
    }
   
    lastdice = dice;
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    //Check if game is still playing
    
    if(gamePlay){
        
        // Add current score to the global score
    
           scores[activePlayer]+= roundScore;
    
    // Update the UI and write the result
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    // Find which player has won
           if(scores[activePlayer]>=100){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlay = false;
    }
        
        else{
         // Next player turn
                nextTurn();
    }
  }
    
   
    
    
    
});



function nextTurn(){
    
    
       activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
         //document.querySelector('.player-0-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', initialization );

function initialization(){
     scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlay = true;
    
    // to hide the dice using javascript
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
 document.getElementById('name-0').textContent = 'Player1';
 document.getElementById('name-1').textContent = 'Player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}





$('.openmodale').click(function (e) {
         e.preventDefault();
         $('.modale').addClass('opened');
    });
$('.closemodale').click(function (e) {
         e.preventDefault();
         $('.modale').removeClass('opened');
    });



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<strong>' + dice + '</strong>';

// to store the value into variable x
//var x = document.querySelector('#score-0').textContent;