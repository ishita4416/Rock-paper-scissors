function computerPlay() 
{
    list = ["Rock", "Paper", "Scissor"];
    return list[Math.floor((Math.random()*list.length))];
}

function playerPlay(){
let playerInput = prompt("Enter rock or paper or scissor");
return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
}
let roundWon = '';

function playRound(computerSelection, playerSelection)
{
if((computerSelection === "Rock" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Scissor") || (computerSelection === "Scissor" && playerSelection === "Rock"))
{ 
roundWon = 'player';
return("You Win! " + playerSelection + " beats " + computerSelection);
}
else if((computerSelection === "Rock" && playerSelection === "Scissor") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissor" && playerSelection === "Paper"))
{
roundWon = 'computer';
return("You Lose! " + computerSelection + " beats " + playerSelection);
}
else 
roundWon = 'tie'
return("Tie!");
}

// console.log(playRound(computerSelection, playerSelection));

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++)
    {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();

        let roundPlayed = playRound(playerSelection, computerSelection);
        console.log(roundPlayed);
        
        if(roundWon === 'player')
        playerScore++;
        else if (roundWon === 'computer')
        computerScore++;
        else if (roundWon === 'tie')
        continue;
    }
    console.log(`Score: player ${playerScore} : computer ${computerScore}`);
}

game();