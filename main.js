//Project:Rock Paper Scissors
let humanScore = 0;
let computerScore = 0;

const finalScore = document.querySelector(".final-score");
const resultDiv = document.querySelector("#result");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const container = document.querySelector(".container");
const scoreSpan = document.createElement("span");
const containerBtn = document.querySelectorAll(".container-btn button");

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
    resultDiv.textContent = `Tie, no one scored`;
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    resultDiv.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultDiv.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  scoreUpdate();
  endGame();
}

containerBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.getAttribute("data-choice");
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

function scoreUpdate() {
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

function endGame() {
  if (humanScore === 5) {
    resultDiv.textContent = "";
    scoreSpan.style.cssText = "color:green;font-size:2rem";
    scoreSpan.textContent = `You won the game!
                Final Score: 
              `;
    finalScore.append(scoreSpan);
    containerBtn.forEach((btn) => {
      btn.disabled = true;
    });
  }
  if (computerScore === 5) {
    resultDiv.textContent = "";
    scoreSpan.style.cssText = "color:red;font-size:2rem";
    scoreSpan.textContent = `You lost the game!
                     Final Score: 
                    `;
    finalScore.append(scoreSpan);
    containerBtn.forEach((btn) => {
      btn.disabled = true;
    });
  }
}
