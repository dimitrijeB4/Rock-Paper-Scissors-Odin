let humanScore=0;
let computerScore=0;
let winTrigger=0;
const body= document.querySelector("body");
const resultDiv = document.createElement("div");
const compChoice = document.createElement("div");
const scoreSpan = document.createElement("span");
const humanDiv = document.createElement("div");
const compDiv = document.createElement("div");
const winner = document.createElement("div");
scoreSpan.appendChild(humanDiv);
scoreSpan.appendChild(compDiv);
body.appendChild(compChoice);
body.appendChild(resultDiv);
body.appendChild(scoreSpan);
body.appendChild(winner);

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
    compChoice.textContent=choice;
    return choice;

}
/*
function getHumanChoice(){
   let choice = prompt("YOUR CHOICE ");

   return choice.toLowerCase();
}
*/
function playRound(event){
    let choiceComputer = getComputerChoice();
    let choiceHuman = event.target.value;
    


    if(choiceHuman==choiceComputer){
        resultDiv.textContent="Draw Yeeeeey";
    }else if(choiceHuman=="rock" && choiceComputer=="paper"){
        resultDiv.textContent="YOU SUCK BOOOO!";
        computerScore++;        
    }else if(choiceHuman=="scissor" && choiceComputer=="rock"){
        resultDiv.textContent="YOU SUCK BOOOO!";
        computerScore++;        
    }else if(choiceHuman=="paper" && choiceComputer=="scissor"){
        resultDiv.textContent="YOU SUCK BOOOO!";
        computerScore++;        
    }else if(choiceHuman=="rock" && choiceComputer=="scissor"){
        resultDiv.textContent="YOU ROCK!";
        humanScore++;        
    }else if(choiceHuman=="scissor" && choiceComputer=="paper"){
        resultDiv.textContent="YOU ROCK!";
        humanScore++;        
    }else if(choiceHuman=="paper" && choiceComputer=="rock"){
        resultDiv.textContent="YOU ROCK!";
        humanScore++;        
    }else{
        resultDiv.textContent="trash input";
    }
    compDiv.textContent="computer :" + computerScore;
    humanDiv.textContent="human :" + humanScore;
    

    if(computerScore==5 && winTrigger==0){
        winner.textContent="computer win";
        winTrigger=1;
    }else if(humanScore==5 && winTrigger==0){
        winner.textContent="human win";
        winTrigger=1;
    }
    
}

function playGame(){
let i = 0;
while(true){
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

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnSci = document.querySelector(".scissor");

btnRock.addEventListener("click",playRound);
btnPaper.addEventListener("click",playRound);
btnSci.addEventListener("click",playRound);

//playGame();