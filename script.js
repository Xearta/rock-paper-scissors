let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomNumber = Math.ceil(Math.random() * 3);

  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();

  console.log(
    `PLAYER (${playerScore}): ${playerSelection} | COMPUTER (${computerScore}): ${computerSelection}`
  );

  //  Tie
  if (playerSelection === computerSelection) {
    return "tie";
  }

  // Player Wins
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    return "winner";
  }

  // Computer Wins
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore++;
    return "loser";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?: ");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  console.log(
    `GAME OVER -- Player Score: ${playerScore} | Computer Score: ${computerScore}`
  );
};

game();
