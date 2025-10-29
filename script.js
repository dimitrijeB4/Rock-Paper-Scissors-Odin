let humanScore=0;
let computerScore=0;
function getComputerChoice(){

    let value = (Math.random()*10)%3;
    let choice;
    if(value<1){
        choice="rock";
    }else if (value>1 && value<2){
        choice="paper";
    }else{
        choice="scissor";
    }

    console.log(choice);
    return choice;

}

function getHumanChoice(){
   let choice = prompt("YOUR CHOICE ");

   return choice.toLowerCase();
}

function playRound(){
    let choiceComputer = getComputerChoice();
    let choiceHuman = getHumanChoice();
    if(choiceHuman==choiceComputer){
        console.log("Draw Yeeeeey");
    }else if(choiceHuman=="rock" && choiceComputer=="paper"){
        console.log("YOU SUCK BOOOO!");
        computerScore++;        
    }else if(choiceHuman=="scissor" && choiceComputer=="rock"){
        console.log("YOU SUCK BOOOO!");
        computerScore++;        
    }else if(choiceHuman=="paper" && choiceComputer=="scissor"){
        console.log("YOU SUCK BOOOO!");
        computerScore++;        
    }else if(choiceHuman=="rock" && choiceComputer=="scissor"){
        console.log("YOU ROCK!");
        humanScore++;        
    }else if(choiceHuman=="scissor" && choiceComputer=="paper"){
        console.log("YOU ROCK!");
        humanScore++;        
    }else if(choiceHuman=="paper" && choiceComputer=="rock"){
        console.log("YOU ROCK!");
        humanScore++;        
    }else{
        console.log("trash input");
    }

    return 0
}
function playGame(){
let i = 0;
while(i<5){
    console.log(computerScore);
    console.log(humanScore);
    console.log("-------------");
    playRound();
    i++;
    if(computerScore==3 || humanScore==3){
        //i=5;
        break;
    }
}
if(computerScore>humanScore){
    console.log("computer Win");
}else{
    console.log("Player Win");
}


}
playGame();