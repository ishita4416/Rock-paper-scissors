function computerPlay(list) 
{
    return list[Math.floor((Math.random()*list.length))];
}

let computerSelection = computerPlay(["Rock", "Paper", "Scissor"]);

let playerSelection = prompt("Enter rock or paper or scissor");

if(computerSelection === "Rock" && playerSelection === "Paper")
console.log("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Rock" && playerSelection === "Scissor")
console.log("You Lose! " + computerSelection + " beats " + playerSelection);
if(computerSelection === "Paper" && playerSelection === "Scissor")
console.log("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Paper" && playerSelection === "Rock")
console.log("You Lose! " + computerSelection + " beats " + playerSelection);
if(computerSelection === "Scissor" && playerSelection === "Rock")
console.log("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Scissor" && playerSelection === "Paper")
console.log("You Lose! " + computerSelection + " beats " + playerSelection);
