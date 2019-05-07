const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userScore = 0;
let computerScore = 0;

function getComputerChoise() {
  const choices = ['r', 'p', 's'];
  let randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoise) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoise) + ". You win!"
}
function lose(userChoice, computerChoise) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " not beat " + convertToWord(computerChoise) + ". You lose!"
}
function draw(userChoice, computerChoise) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " = " + convertToWord(computerChoise) + "."

}

function game(userChoice) {
  let computerChoise = getComputerChoise();
  switch (userChoice + computerChoise) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoise);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoise);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoise);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}
main();
