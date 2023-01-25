function getComputerSelection () {
  let choiceArray =['rock','paper','scissor'];
  let random=Math.floor(Math.random() * choiceArray.length);
  return choiceArray[random];
}

let userScore=0;
let computerScore=0;

function round(playerSelction,computerSelection){
  let playerChoice=playerSelction.toLowerCase();
  if(playerChoice == computerSelection){
    console.log("Tied")
  }else if (playerChoice== "rock" && computerSelection=="scissor" || playerChoice=="paper" && computerSelection=="rock" || playerChoice=="scissor" && computerSelection=="paper"){
    userScore +=1;
    return "You win"
  }else if(playerChoice== "rock" && computerSelection=="paper" || playerChoice=="paper" && computerSelection=="scissor" || playerChoice=="scissor" && computerSelection=="rock"){
    computerScore +=1;
    return "You Lost"
  }else {
    console.log("Enter a valid choice");
  }

}


function game(){
  for(let i=0;i<5;i++){
      const playerSelction=prompt("Choose rock paper scissor");
      const computerSelection=getComputerSelection();
      console.log(round(playerSelction,computerSelection));
      console.log(`USER SCORE ${userScore} and computer score ${computerScore}`);
  }
  if(userScore > computerScore){
    console.log("You Won yayyyy!!!!");
  }else if (userScore < computerScore){
    console.log("you Lost try again");
  }else {
    console.log("Tied play again")
  }
}

game();