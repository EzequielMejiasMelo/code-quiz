//starting elements
var startDiv = document.querySelector("#startItems");
var startBtn = document.querySelector("#startBtn");

//timer
var timerEl = document.querySelector("#time");

//heading/questions
var questionEl = document.querySelector("#question");

// choices
var choicesDiv = document.querySelector("#choices");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");

//results section
var resultsDiv = document.querySelector("#results");
var scoreEl = document.querySelector("#score");
var nameInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

// Starts and ends game
function quizStart() {
  var score = quizGame();

  return;
}

//handles setting: questions, answers and timer | returns score int
function quizGame() {
  var questionsAndAnswers = {
    question1: "Pizza?",
    correctAnswer1: "No",
    Answers1: ["Yes", "No", "Maybe"],
  };
}

function setHighscore() {
  localStorage.setItem(nameInput, scoreEl);
  return;
}

startBtn.addEventListener("click", quizStart);
submitBtn.addEventListener("click", setHighscore);
