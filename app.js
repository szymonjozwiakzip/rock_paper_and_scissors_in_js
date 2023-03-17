const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const defaultChoice = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";
let gameIsRunning = false;

function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "");
  getComputerChoice(defaultChoice);
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice! I chose ${defaultChoice}!`);
    return defaultChoice;
  }
  return selection;
}

function getComputerChoice() {
  const choice = Math.random();
  if (choice <= 0.34) {
    return ROCK;
  } else if (choice > 0.34 && choice <= 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function getWinner(cChoice, pChoice =defaultChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
}

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice);
  }else {
    winner=getWinner (computerChoice);
  }
  let message = message = `You picked ${playerChoice || defaultChoice}, computer picked ${computerChoice}, `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  }else if (winner === RESULT_PLAYER_WIN){
    message = message +'won.';
  }else {
    message = message +'lost.';
  }
  alert(message);
});
