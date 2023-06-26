const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];

// GETTING USER INPUT
const userInput = prompt("Do you choose rock, paper or scissors? ");
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

// GETTING COMPUTER INPUT
let computerInput = choices[Math.floor(Math.random() * 3)];
console.log("Computer chose " + `${computerInput}`);

// DECLARE WINNER
const winner = declareWinner(userInput, computerInput);

function declareWinner(userInput, computerInput) {
  if (userInput === "rock" && computerInput === "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (userInput === "rock" && computerInput === "scissors") {
    console.log("You Won! Rock beats Scissors");
  } else if (userInput === "paper" && computerInput === "scissors") {
    console.log("You lose! Scissors beats Paper");
  } else if (userInput === "paper" && computerInput === "rock") {
    console.log("You Win! Paper beats Rock");
  } else if (userInput === "scissors" && computerInput === "rock") {
    console.log("You Lose! Rock beats Scissors");
  } else if (userInput === "scissors" && computerInput === "paper") {
    console.log("You Won! Scissors beats Paper");
  } else {
    console.log("You Tie!");
  }
}
