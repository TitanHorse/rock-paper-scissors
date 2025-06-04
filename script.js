console.log("Hello World");
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random()*3)]
}
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.innerText = "Rock";
btn2.innerText = "Paper";
btn3.innerText = "Scissors";

const divOne = document.querySelector(".display");
const para1 = document.querySelector(".para1")
const para2 = document.querySelector(".para2")

 let humanScore = 0;
 let roundsPlayed = 0; 
 let draws = 0;
   let computerScore = 0;
function playRound(player, computer) {
if(roundsPlayed >= 5) return;
computer = computerChoice();

    
 if(player === computer) {
console.log("draw")
para1.innerText = "Draw!";
draws++;

 }
 else if((player === "rock" && computer === "scissors") ||
 (player === "paper" && computer === "rock") ||
 (player === "scissors" && computer == "paper"))
  {
para1.innerText = `You win! ${player} beats ${computer}!`;
humanScore++;

  }
 else {
    para1.innerText = `You Lose! ${computer} beats ${player}!`
    computerScore++;
   
 }
roundsPlayed++;
para2.innerText = `Your score: ${humanScore}, computer score ${computerScore}`
if(roundsPlayed === 5) {
   if(humanScore > computerScore){
       divOne.innerText = `You won the game! You won ${humanScore} rounds, the computer won ${computerScore}`
    } else {
         divOne.innerText = `You lost the game! You won ${humanScore} rounds, the computer won ${computerScore}`;
    } 

}

    }
     {
}
 btn1.addEventListener("click", () => {
 playRound("rock", computerChoice())
})
btn2.addEventListener("click", () => {
     playRound("paper", computerChoice())
})
 btn3.addEventListener("click", () => {
  playRound("scissors", computerChoice())
 })