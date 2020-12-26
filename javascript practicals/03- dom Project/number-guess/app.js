//Game values
let min =1 ,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn') ,
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
      
//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;      

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });


//listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value)
    
    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max} `,'red')
    }

    //check if won
    if(guess === winningNum){
     /*    //disable input box
        guessInput.disabled = true;

        //chnage input border color
        guessInput.style.borderColor = 'green';

        //set message
        setMessage(`${winningNum} is correct,You Won!`,'green') */

        gameOver(true, `${winningNum} is correct,You Won!`)

    }else{

        //wrong num
        //guessesLeft = guessesLeft -1
          guessesLeft -= 1;

          if(guessesLeft === 0){
              //game over you lost
/* 
              //disable input
              guessInput.disabled = true;

              //change color
              guessInput.style.borderColor = 'red';

              //set message
              setMessage(`game over ..You Lost!.the correct number was ${winningNum}`,'red') */

             gameOver(false ,`game over ..You Lost!.the correct number was ${winningNum}`)


          }else{
              //game continues - wrong answer
              //change border color
              guessInput.style.borderColor = 'red';

              //clear input
              guessInput.value = '';
              
              //tell user its the wrong number
              setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red')
          }

    }




})



//game over
function gameOver(won,msg){
    let color ;
    won === true ? color = 'green' : color ='red';
     //disable input
     guessInput.disabled = true;

     //change color
     guessInput.style.borderColor = color;

     //set color of text

     message.style.color = color;
    //setmessage
    setMessage(msg)

    
  // PLay Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

//set message
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg
}