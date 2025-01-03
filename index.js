

let score = JSON.parse(localStorage.getItem('score')) || { wins:0, losses:0, ties:0};


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
