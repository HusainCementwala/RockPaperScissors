let score = JSON.parse(localStorage.getItem('score')) || { wins:0, losses:0, ties:0};

/*

SHORTCUT KEYS
1. ROCK = r or R
2. PAPER = p or P
3. SCISSORS = s or S
4. AUTO PLAY = a or A
5. RESET SCORE = 0 (zero)



*/


updateScoreElement();

/*
if (!score){  =>same as (score === null) as null is falsy value

score ={

wins:0,
losses:0,
ties:0
};


}
*/

//here also using eventListener instead of onclick
document.querySelector('.js-autoplay-button').addEventListener('click',
  ()=>{
    autoPlay();
      
  }
);

document.body.addEventListener('keydown',(event)=>{
if(event.key === 'a' || event.key === 'A'){
  autoPlay();
}
})

/*document.querySelector('.js-autoplay-button').addEventListener('click',()=>{

  const autoPlayButton = document.querySelector('.js-autoplay-button');

  if(autoPlayButton.innerText === 'AUTO PLAY'){

    autoPlayButton.innerHTML = 'STOP PLAY';
  }
  else{
    autoPlayButton.innerHTML = 'AUTO PLAY';
  }
});*/ /* this is one way to change button on autoplay , other is inside the autoplay function*/



let isAutoPlaying = false;
let intervalId;

function autoPlay(){

if(!isAutoPlaying){
  
intervalId = setInterval(() =>{ //save the intervalId in a variable
  const playerMove = pickCompMove();
  playGame(playerMove);
  },1000);
isAutoPlaying = true;

document.querySelector('.js-autoplay-button')
.innerHTML = 'STOP PLAY';
}


else{
clearInterval(intervalId); //call on the saved Id to stop autoplay
isAutoPlaying = false;


document.querySelector('.js-autoplay-button')
.innerHTML = 'AUTO PLAY';
}
}




//using event Listener to atribute ONkeydown event for allowing to click any key to run the code
document.body.addEventListener('keydown',(event)=>{
if(event.key === 'r' || event.key === 'R'){ //using r key to choose rock
  playGame('rock');
}
else if(event.key === 'p' || event.key === 'P'){
  playGame('paper');
}
else if(event.key === 's' || event.key === 'S'){
  playGame('scissors');
}

else if(event.key === 'Backspace'){

  showResetConfirmmation();
}
});



//these are using eventListeners instead of onclick functioning
document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('scissors');
});


function playGame(playerMove){

      const compMove =pickCompMove();
    let result ='';

    if(playerMove === 'scissors'){
    if(compMove === 'rock')
    {
    result = 'YOU LOSE';
    }

    else if(compMove === 'paper')
    {
      result = 'YOU WIN';
    }

    else if(compMove === 'scissors')
    {
      result = 'YOU TIE';
    }
    }

    else if(playerMove === 'paper')
    {
      if(compMove === 'rock')
    {
    result = 'YOU LOSE';
    }

    else if(compMove === 'paper')
    {
      result = 'YOU TIE';
    }

    else if(compMove === 'scissors')
    {
      result = 'YOU WIN';
    }
    }

    else if('rock')
    {
      if(compMove === 'rock')
      {
      result = 'YOU TIE';
      }

      else if(compMove === 'paper')
      {
        result = 'YOU LOSE';
      }

      else if(compMove === 'scissors')
      {
        result = 'YOU WIN';
      }
          
    }

          if(result === 'YOU WIN'){

            score.wins +=1;
          }
          else if(result === 'YOU LOSE')
          {

            score.losses +=1;
          }
          else if(result === 'YOU TIE'){
            
            score.ties +=1;


          }

          localStorage.setItem('score', JSON.stringify(score));

    /*alert(`You Chose ${playerMove} , Computer chose ${compMove},
${result}
Wins:${score.wins}
Losses: ${score.losses} 
Ties: ${score.ties}`
    );*/

document.querySelector('.js-result')
.innerHTML = `${result}`;

document.querySelector('.js-moves')
.innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${compMove}-emoji.png" class="move-icon">
   AI`;
  
updateScoreElement();

}

//here also using eventListener instead of onclick
document.querySelector('.js-reset-button').addEventListener('click',()=>{
  
  
  /*score.wins = 0;
  score.losses =0;
  score.ties =0;
  localStorage.removeItem('score');
  updateScoreElement();*/

  showResetConfirmmation();
});


function showResetConfirmmation(){

  document.querySelector('.js-confirmation')
  .innerHTML = 
  `Are you sure you want to reset the score?
  <button class="js-reset-confirm-yes reset-confirm-button">
  YES
  </button>
  
  <button class="js-reset-confirm-no reset-confirm-button">
  NO
  </button>`,

  document.querySelector('.js-reset-confirm-yes')
  .addEventListener('click',()=>{
    score.wins = 0;
  score.losses =0;
  score.ties =0;
  localStorage.removeItem('score');
  updateScoreElement();

  hideResetConfirmation();
  });

  document.querySelector('.js-reset-confirm-no')
  .addEventListener('click',()=>{

    hideResetConfirmation();
  })
}

function hideResetConfirmation(){

  document.querySelector('.js-confirmation')
  .innerHTML = '';
}



function updateScoreElement(){

  document.querySelector('.js-score')
 .innerHTML = `Wins:${score.wins}
 Losses: ${score.losses} 
 Ties: ${score.ties}`;
}

  function pickCompMove(){
    const randomNumber = Math.random();
let compMove = '';

if(randomNumber>0 && randomNumber <1/3)
{

compMove = 'rock';
}
else if(randomNumber >=1/3 && randomNumber < 2/3)
{
  compMove = 'paper';
}

else if(randomNumber>= 2/3 && randomNumber<1)
{
  compMove = 'scissors';
}

return compMove;


  }
