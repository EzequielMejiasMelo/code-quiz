//starting elements
var startDiv = document.querySelector("#startItems");
var startBtn = document.querySelector("#startBtn");

//timer
var timerEl = document.querySelector("#time");

//heading/questions
var questionEl = document.querySelector("#question");

// choices
var choicesDiv = document.querySelector("#choices");
var choicesList = document.querySelector("#choicesList");

//results section
var resultsDiv = document.querySelector("#results");
var scoreEl = document.querySelector("#score");
var nameInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

//state management variables
var questionIndex = 0;
var time = questionsAndAnswers.length * 15;
var timerId; 

// Starts and ends game
function quizStart() {
  startDiv.setAttribute("class", "hide");
  var score = quizGame();

  //sets up results elements
  choicesDiv.setAttribute("class", "hide");
  resultsDiv.setAttribute("class", "");
  scoreEl.textContent = score;

  return;
}

//handles setting: questions, answers and timer | returns score int
function quizGame() {
  choicesDiv.setAttribute("class", "");
  setCurrentQuestion();
  return;
}

function setCurrentQuestion() {
  var currentQuestion = questionsAndAnswers[questionIndex];
  questionEl.textContent = currentQuestion.question;

  choicesList.textContent = "";

  for (var i=0; i < currentQuestion.options.length; i++){
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "button");
    choiceNode.setAttribute("value", currentQuestion.options[i]);

    choiceNode.textContent = i + 1 + ". " + currentQuestion.options[i];

    choicesList.appendChild(choiceNode);

  }
}

choicesList.addEventListener("click", function(event){
  if (event.target === "button") {
    
  }
})

function setHighscore() {
  localStorage.setItem(nameInput.value, scoreEl.textContent);
  location.href = "./highscores.html";
  return;
}

startBtn.addEventListener("click", quizStart);
submitBtn.addEventListener("click", setHighscore);

var questionsAndAnswers = [
  {
    question: "Which Greek hero was called 'Tamer of Horses'?",
    options: ["Paris", "Hector", "Alexander the Great", "Apollo"],
    answer: "Hector"
  },
  {
    question: "In Greek mythology, who flew too close to the Sun?",
    options: ["Pegasus", "Icarus", "Theseus", "Proteus"],
    answer: "Icarus"
  },
  {
    question: "Who was the chief god of all the ancient Greeks?",
    options: ["Minerva", "Zeus", "Apollo", "Hermes"],
    answer: "Zeus"
  },
  {
    question: "Who was the Greek goddes of the rainbow?",
    options: ["Hera", "Iris", "Hecate", "Aphrodite"],
    answer: "Iris"
  },
];
