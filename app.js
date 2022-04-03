const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = "It is a draw!";
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You win";
  } else if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You lose";
  } else if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You win";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You win";
  } else if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You win";
  } else if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You lose";
  }

  resultDisplay.innerHTML = result;
};
