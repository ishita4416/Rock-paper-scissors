function computerPlay(list) 
{
    return list[Math.floor((Math.random()*list.length))];
}

let computerSelection = computerPlay(["Rock", "Paper", "Scissor"]);

let playerInput = prompt("Enter rock or paper or scissor");
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();


let playerScore = 0;
let computerScore = 0;
let roundWon = '';

function playRound(computerSelection, playerSelection)
{
if((computerSelection === "Rock" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Scissor") || (computerSelection === "Scissor" && playerSelection === "Rock"))
{ 
playerScore++;
roundWon = 'player';
return("You Win! " + playerSelection + " beats " + computerSelection);
}
else if((computerSelection === "Rock" && playerSelection === "Scissor") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissor" && playerSelection === "Paper"))
{
computerScore++;
roundWon = 'computer';
return("You Lose! " + computerSelection + " beats " + playerSelection);
}
else 
return("Tie!");
}

console.log(playRound(computerSelection, playerSelection));

// function game(playRound)
// {
//     let playerScore = 0;
//     let computerScore = 0;
//     for(let i=0; i<5; i++)
//     {
//         console.log(playRound(computerSelection, playerSelection));
//         if(playRound(computerSelection, playerSelection) === win)
//         playerScore++;
//         else if (playRound(computerSelection, playerSelection) === lose)
//         computerScore++;
//         else break;
//     }
//     return playerScore, computerScore;
// }