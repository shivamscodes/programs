let randomnumber= parseInt(Math.random()*100 +1);

let submit=document.querySelector('#subt');
let  userinput =document.querySelector('#guessField');
let guessSlot=document.querySelector('.guesses');
let remaining=document.querySelector('.lastResult');
let lowORhi=document.querySelector('.lowOrHi');
let startOver=document.querySelector('.resultParas');

const p= document.createElement('p');


let prevGuess =[]
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
   e.preventDefault();
   const guess=parseInt(userinput.value);
    console.log(guess);
   validateGuess(guess);
    });
}
function validateGuess(guess){
    //check if the no. is valid or not
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess < 1){
        alert('please enter a valid number more than 1');
    }
    else if(guess > 100){
        alert('please enter a valid number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`game over. random number was ${randomnumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
  // check if no. is lower or higher than guess
  if(guess === randomnumber){
    displayMessage(`you guess right`);
    endGame();
  }
  else if (guess < randomnumber){
    displayMessage(`number is low `);
  }
  else if (guess > randomnumber){
    displayMessage(`number is high `);
  }
}

function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`
}


function displayMessage(message){
 lowORhi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
  userinput.value=``;
  userinput.setAttribute('disable','');
  p.classList.add('button');
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
    document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomnumber= parseInt(Math.random()*100 +1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11 - numGuess}`
    userinput.removeAttribute('disable');
    startOver.removeChild(p);
        
        playGame=true;
    })
}