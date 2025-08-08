//Project:Rock Paper Scissors
let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector("#result")


function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "ROCK";
  } else if (computerChoice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Choose one of the three options:(rock/paper/scissors): "
  );
  return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Tie, no one scored`
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    resultDiv.textContent = `You won! ${humanChoice} beats ${computerChoice}`
    humanScore++;
  } else {
    resultDiv.textContent = `You lost! ${computerChoice} beats ${humanChoice}`
     computerScore++;
  }
}

document.querySelectorAll(".container-btn button").forEach(button =>{
button.addEventListener("click",()=>{
const humanSelection = button.getAttribute("data-choice");
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection)
})
})




// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`Round ${i}`);

//     const humanSelection = btnHumanChoice;
//     const computerSelection = btnComputerChoice;

//     playRound(humanSelection, computerSelection);
//   }

//   if (humanScore > computerScore) {
//     console.log(`You won the game!
//                 Final Score: 
//                 Human:${humanScore}
//                 Computer:${computerScore}`);
//   } else {
//     console.log(`You lost the game!
//                      Final Score: 
//                      Human:${humanScore}
//                      Computer:${computerScore}`);
//   }
// }
// playGame();
