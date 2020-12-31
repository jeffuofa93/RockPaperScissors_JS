// This program creates a Rock Paper Scissors game

// Declare Constants

// Rock Paper and Scissors are the buttons to for the user to click their move
const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");

// Result is the div that holds Resultstr which displays the result of each round and the final result
const result = document.querySelector("#Result");
const resultStr = document.createElement("div");

// Score is an array that holds the score for both players computer is index 1 user is 0
let score = [0,0];

// hold the text that displays the user score and computer score
const userScore = document.querySelector("#UserScore");
const computerScore = document.querySelector("#ComputerScore");

// Manually add the resultStr for practice with adding from js
resultStr.classList.add("content");
resultStr.textContent = "Select rock Paper or Scissors:";
result.appendChild(resultStr);

// generate random number
function getRndInteger(max) {
    return Math.floor((Math.random() * max)+1);
  }

// generate random computer move
function computerPlay(){
    let moveArr = ["Rock","Paper","Scissors"];
    let num = getRndInteger(2);
    return moveArr[num];
}

// Play the round
function playRound(playerSelection,score){
    // generate the computer choice
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        resultStr.textContent = `It's a tie both picked ${playerSelection} select again`

        // check if computer wins and update corresponding variables
    } else if ((computerSelection === "Rock" && playerSelection ==="Scissors")||
        (computerSelection ==="Paper" && playerSelection ==="Rock")||
        (computerSelection==="Scissors" && playerSelection ==="Paper")){
            score[1] ++;
            userScore.textContent = "Your Score: " + score[0];
            computerScore.textContent = "Computer Score: " + score[1];
            resultStr.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        // if player wins
        score[0] ++;
        userScore.textContent = "Your Score: " + score[0];
        computerScore.textContent = "Your Score: " + score[1];
        resultStr.textContent =  `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    // check for end of game
    if (score[0]===5 || score[1]===5){
        if (score[0] > score[1]){
            resultStr.textContent = "Game over. You win! Select again to restart";
            score[0] = 0;
            score[1] = 0;
        }
        else {
            resultStr.textContent = "Game over. You Lose! Select again to restart";
            score[0] = 0;
            score[1] = 0;
        }
    }
    
}


// Add event listeners for each button
Rock.addEventListener('click',function (){
    playRound(Rock.id,score);
});
Paper.addEventListener('click',function (){
    playRound(Paper.id,score);
});
Scissors.addEventListener('click',function (){
    playRound(Scissors.id,score);
});

// EOF comment
