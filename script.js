//your code here
const gameNumberInput = document.getElementById("game-number");
const playButton = document.getElementById("play-game");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const computerChoose = document.getElementById("computer-choose");
const roundResult = document.getElementById("round-result");
const roundsLeft = document.getElementById("rounds-left");
const userPoints = document.getElementById("user-points");
const computerPoints = document.getElementById("computer-points");
const gameResult = document.getElementById("game-result");

let rounds = 0;
let userScore = 0;
let computerScore = 0;
let computerChoice = -1;

// Function to get computer's choice
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoose.textContent = "ROCK";
      break;
    case 1:
      computerChoose.textContent = "PAPER";
      break;
    case 2:
      computerChoose.textContent = "SCISSORS";
      break;
  }
}

// Function to check the result of each round
function checkRoundResult(userChoice) {
  switch (userChoice) {
    case "rock":
      if (computerChoice === 0) {
        roundResult.textContent = "TIE";
      } else if (computerChoice === 1) {
        roundResult.textContent = "LOSE";
        computerScore++;
      } else if (computerChoice === 2) {
        roundResult.textContent = "WON";
        userScore++;
      }
      break;
    case "paper":
      if (computerChoice === 0) {
        roundResult.textContent = "WON";
        userScore++;
      } else if (computerChoice === 1) {
        roundResult.textContent = "TIE";
      } else if (computerChoice === 2) {
        roundResult.textContent = "LOSE";
        computerScore++;
      }
      break;
    case "scissors":
      if (computerChoice === 0) {
        roundResult.textContent = "LOSE";
        computerScore++;
      } else if (computerChoice === 1) {
        roundResult.textContent = "WON";
        userScore++;
      } else if (computerChoice === 2) {
        roundResult.textContent = "
