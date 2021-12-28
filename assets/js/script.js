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
  
  //sets up results elements
  choicesDiv.setAttribute("class", "hide");
  resultsDiv.setAttribute("class", "");
  scoreEl.textContent = score;

  return;
}

//handles setting: questions, answers and timer | returns score int
function quizGame() {
  
}

function setHighscore() {
  localStorage.setItem(nameInput, scoreEl);
  return;
}

startBtn.addEventListener("click", quizStart);
submitBtn.addEventListener("click", setHighscore);

var questionsAndAnswers = [
  {
    question: "Which Greek hero was called 'Tamer of Horses'?",
    answers: [
      {text: "Paris", correct: false},
      {text: "Hector", correct: true},
      {text: "Alexander the Great", correct: false},
      {text: "Apollo", correct: false}
    ]
  },
  {
    question: "In Greek mythology, who flew too close to the Sun?",
    answers: [
      {text: "Pegasus", correct: false},
      {text: "Icarus", correct: true},
      {text: "Theseus", correct: false},
      {text: "Proteus", correct: false},
    ]
  },
  {
    question: "Who was the chief god of all the ancient Greeks?",
    answers: [
      {text: "Minerva", correct: false},
      {text: "Zeus", correct: true},
      {text: "Apollo", correct: false},
      {text: "Hermes", correct: false},
    ]
  },
  {
    question: "Who was the Greek goddes of the rainbow?",
    answers: [
      {text: "Hera", correct: false},
      {text: "Iris", correct: true},
      {text: "Hecate", correct: false},
      {text: "Aphrodite", correct: false},
    ]
  }
]