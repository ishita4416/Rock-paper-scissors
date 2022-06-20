function computerPlay(list) 
{
    return list[Math.floor((Math.random()*list.length))];
}
  
  
  console.log(computerPlay(["Rock", "Paper", "Scissor"]));