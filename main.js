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
    return "PEDRA";
  } else if (computerChoice === 1) {
    return "PAPEL";
  } else {
    return "TESOURA";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Empate,ninguem pontuou`;
  } else if (
    (humanChoice === "ROCK" && computerChoice === "TESOURA") ||
    (humanChoice === "PAPEL" && computerChoice === "PEDRA") ||
    (humanChoice === "TESOURA" && computerChoice === "PAPEL")
  ) {
    resultDiv.textContent = `Você ganhou! ${humanChoice} vence ${computerChoice}`;
    humanScore++;
  } else {
    resultDiv.textContent = `Você perdeu! ${computerChoice} vence ${humanChoice}`;
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
    scoreSpan.textContent = `Você ganhou o jogo!
                Placar Final: 
              `;
    finalScore.append(scoreSpan);
    containerBtn.forEach((btn) => {
      btn.disabled = true;
    });
  }
  if (computerScore === 5) {
    resultDiv.textContent = "";
    scoreSpan.style.cssText = "color:red;font-size:2rem";
    scoreSpan.textContent = `Você perdeu o jogo!
                     Placar Final: 
                    `;
    finalScore.append(scoreSpan);
    containerBtn.forEach((btn) => {
      btn.disabled = true;
    });
  }
}
