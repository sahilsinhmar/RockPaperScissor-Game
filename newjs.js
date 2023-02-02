function getComputerSelection () {
  let choiceArray =['rock','paper','scissor'];
  let random=Math.floor(Math.random() * choiceArray.length);
  return choiceArray[random];
}

const buttons=document.querySelectorAll('.btn')
let userScore=0;
let computerScore=0;

function disableButtons(){
  buttons.forEach(elem =>{
    elem.disabled=true;
  })
}

function game(playerSelction){


  let result="";
  let playerChoice=playerSelction;
  const computerSelection=getComputerSelection();
  
  if(playerChoice == computerSelection){
      result=(`its tie ,user score is ${userScore}, and computer score is ${computerScore}`);
  }
  
  else if ((playerChoice== "rock" && computerSelection=="scissor") ||
  (playerChoice=="paper" && computerSelection=="rock") ||
   (playerChoice=="scissor" && computerSelection=="paper")) {

    userScore +=1;
    result=(`you won ,user score is ${userScore}, and computer score is ${computerScore}`)

    if(userScore==5){
      result +=`you won the game ,relod the page to play again`;
      disableButtons();
    }
   }

     else {
    computerScore +=1;
    result=(`you lost ,user score is ${userScore}, and computer score is ${computerScore}`)

    if(computerScore==5){
      result +=`computer won the game ,relod the page to play again`;
      disableButtons();
    }
}
document.getElementById('result').innerHTML=result;
return;

}


buttons.forEach( button =>{
  button.addEventListener('click',function(){
    game(button.id)
  })

})
