// This program creates a Rock paper scissors game

// return the move
function getRndInteger(max) {
    return Math.floor((Math.random() * max)+1);
  }
function computerPlay(){
    let moveArr = ["Rock","paper","scissors"];
    let num = getRndInteger(2);
    return moveArr[num];
}


function playRound(playerSelection,score){
    // it's running
    playerSelection = playerSelection.toString();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        alert("Tie");
        // come back to ties
        //nextMove = computerPlay();
        //playerselection = prompt("It's a tie enter Rock paper or scissors to continue this round: ");
        //return playRound(playerSelection,nextMove,counter++);
    } else if ((computerSelection === "Rock" && playerSelection ==="scissors")||
        (computerSelection ==="paper" && playerSelection ==="Rock")||
        (computerSelection==="scissors" && playerSelection ==="paper")){
            //console.log("You Lose! " + computerSelection+ " beats " + playerSelection);
            //console.log("end of inner function \n");
            score[1] ++;
            userScore.textContent = "Your Score: " + score[0];
            computerScore.textContent = "Computer Score: " + score[1];
            content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        //console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        //console.log("end of inner function \n");
        score[0] ++;
        userScore.textContent = "Your Score: " + score[0];
        computerScore.textContent = "Your Score: " + score[1];
        content.textContent =  `You Win! ${playerSelection} beats ${computerSelection}`
        //return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    
}



// Add div to display results of each round
// user is first index computer is second
let score = [0,0];
const result = document.querySelector("#Result");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "You lose";
result.appendChild(content);

const userScore = document.querySelector("#UserScore");
const computerScore = document.querySelector("#ComputerScore");


const Rock = document.querySelector("#Rock");
//Rock.addEventListener("click",playRound(RockID,score));

Rock.addEventListener('click',function (){
    playRound(Rock.id,score);
});










/*
function game(){
    let displayString;

    for (i=0; i<5; i++){
        let playerSelection = prompt("Enter Rock paper or scissors: ");
        let computerSelection = computerPlay();
        displayString = playRound(playerSelection,computerSelection);
        console.log(displayString);
    }
} */

/*
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
 */



// EOF comment
