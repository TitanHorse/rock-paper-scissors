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



 let humanScore = 0;
 let roundsPlayed = 0; 
 let draws = 0;
   let computerScore = 0;
function playRound(player, computer) {

computer = computerChoice();

    
 if(player === computer) {
console.log("draw")
draws++;
 }
 else if(player === "rock" && computer === "scissors") {
console.log("you win");
humanScore++;
 }
 else if(player === "paper" && computer === "rock") {
    console.log("you win");
humanScore++;
 }
 else if(player === "scissors" && computer == "paper") {
    console.log("you win");
humanScore++;
 }
 else {
    console.log("you lose");
    computerScore++;
 }
roundsPlayed++;

if(roundsPlayed === 5) {
   if(humanScore > computerScore){
        console.log(`You won! You won ${humanScore} rounds, the computer won ${computerScore}`) 
    } else {
        console.log(`You lost! You won ${humanScore} rounds, the computer won ${computerScore}`)
             
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