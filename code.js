function computerPlay(list) 
{
    return list[Math.floor((Math.random()*list.length))];
}

let computerSelection = computerPlay(["Rock", "Paper", "Scissor"]);

let playerInput = prompt("Enter rock or paper or scissor");
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

function gamePlay(computerSelection, playerSelection)
{
if(computerSelection === "Rock" && playerSelection === "Paper")
return("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Rock" && playerSelection === "Scissor")
return("You Lose! " + computerSelection + " beats " + playerSelection);
if(computerSelection === "Paper" && playerSelection === "Scissor")
return("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Paper" && playerSelection === "Rock")
return("You Lose! " + computerSelection + " beats " + playerSelection);
if(computerSelection === "Scissor" && playerSelection === "Rock")
return("You Win! " + playerSelection + " beats " + computerSelection);
if(computerSelection === "Scissor" && playerSelection === "Paper")
return("You Lose! " + computerSelection + " beats " + playerSelection);
}

console.log(gamePlay(computerSelection, playerSelection));