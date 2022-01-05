//starting elements
var startDiv = document.querySelector("#startItems");
var startBtn = document.querySelector("#startBtn");

//timer
var timerEl = document.querySelector("#time");

//questions
var questionEl = document.querySelector("#question");

// choices
var choicesDiv = document.querySelector("#choices");
var choicesList = document.querySelector("#choicesList");

//answer section
var answerDiv = document.querySelector("#answer");
var answerSpan = document.querySelector("#answer-text");

//results section
var resultsDiv = document.querySelector("#results");
var scoreEl = document.querySelector("#score");
var nameInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

//state management variables
var questionIndex = 0;
var time = 4 * 15;
timerEl.textContent = time;
var timerId; 

// Starts and ends game
function quizStart() {
  startDiv.setAttribute("class", "hide");
  quizGame();

  //sets up results elements
  return;
}

//handles setting: questions, answers and timer | returns score int
function quizGame() {
  choicesDiv.setAttribute("class", "");
  setCurrentQuestion();
  startTimer();
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
  return;
}

function correctChoice() {
  answerSpan.textContent = "Correct";
  answerDiv.setAttribute("class", "");
  return;
}

function wrongChoice() {
  time -= 15;
  answerSpan.textContent = "Incorrect";
  answerDiv.setAttribute("class", "");
  return;
}

function finishedQuiz() {
  if(questionIndex > 3){
    choicesDiv.setAttribute("class", "hide");
    answerDiv.setAttribute("class", "hide");
    resultsDiv.setAttribute("class", "");
    scoreEl.textContent = time;
  }
}

function startTimer() {
  timer = setInterval(function() {
    time--;
    timerEl.textContent = time;
    if(time >= 0) {
      if (finishedQuiz){
        clearInterval(timer);
      }
    }

    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

choicesList.addEventListener("click", function(event){
  if (event.target.localName === "button") {
    if(event.target.value === questionsAndAnswers[questionIndex].answer){
      correctChoice();
    } else {
      wrongChoice();
    }
    questionIndex++;
    setCurrentQuestion();
  }
  return;
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
