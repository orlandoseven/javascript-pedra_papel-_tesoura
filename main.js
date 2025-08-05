//Project:Rock Paper Scissors
let humanScore = 0;
let computerScore = 0;

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
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let choice = humanChoice;

  if (choice.toUpperCase() === computerChoice) {
    console.log("Tie, no one scored");
  } else if (
    (choice.toUpperCase() === "ROCK" && computerChoice === "SCISSORS") ||
    (choice.toUpperCase() === "PAPER" && computerChoice === "ROCK") ||
    (choice.toUpperCase() === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log(`You won! ${choice.toUpperCase} beat ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lost ${computerChoice} beat ${choice.toUpperCase}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You won the game!
                Final Score: 
                Human:${humanScore}
                Computer:${computerScore}`);
  } else {
    console.log(`You lost the game!
                     Final Score: 
                     Human:${humanScore}
                     Computer:${computerScore}`);
  }
}
playGame();
