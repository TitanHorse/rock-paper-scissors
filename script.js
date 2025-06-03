console.log("Hello World");
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random()*3)]
}
function playRound() {
    let roundsPlayed = 0;
     let computerScore = 0;
     let draws = 0;
 let humanScore = 0;
        const userInput = prompt("Choose rock, paper or scissors")
        if(userInput === null) {
            return;
        }
 computerChoice();

 let computer = computerChoice();
 let player = userInput.toLowerCase()

    
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
 
    

   if(humanScore > computerScore){
        console.log(`You won! You won ${humanScore} rounds, the computer won ${computerScore}`) 
    } else {
        console.log(`You lost! You won ${humanScore} rounds, the computer won ${computerScore}`)
             
    } }
    
     {
}
playRound()