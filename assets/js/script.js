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

// renders DOM elements, calls initial setCurrentQuestion, and calls startTimer
function quizGame() {
  startDiv.setAttribute("class", "hide");
  choicesDiv.setAttribute("class", "");
  setCurrentQuestion();
  startTimer();
  return;
}

// gets current question index and renders the question and buttons on the page
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

// renders the message
function answerChoice(result) {
  answerSpan.textContent = result;
  answerDiv.setAttribute("class", "");
  return;
}

// renders results div aka highscore submission and hides game elements
function finishedQuiz() {
  choicesDiv.setAttribute("class", "hide");
  answerDiv.setAttribute("class", "hide");
  resultsDiv.setAttribute("class", "");
  scoreEl.textContent = time;
}

// starts and stops timer | also calls finishedQuiz
function startTimer() {
  timer = setInterval(function() {
    time--;
    timerEl.textContent = time;
    if(time >= 0 && questionIndex > 3) {
      clearInterval(timer);
      finishedQuiz();
    }

    if (time <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//checks for answer button click and if answer is correct | calls answerChoice and setCurrentQuestion
choicesList.addEventListener("click", function(event){
  if (event.target.localName === "button") {
    if(event.target.value === questionsAndAnswers[questionIndex].answer){
      answerChoice("Correct");
    } else {
      time -= 15;
      answerChoice("Incorrect");
    }
    questionIndex++;
    if (questionIndex < 4){setCurrentQuestion()};
  }
  return;
})

// adds highscore to localstorage and takes us to highscores.html
function setHighscore() {
  localStorage.setItem(nameInput.value, scoreEl.textContent);
  location.href = "./highscores.html";
  return;
}

// button listeners call funcs quizGame and setHighscore
startBtn.addEventListener("click", quizGame);
submitBtn.addEventListener("click", setHighscore);

//array with objects of question items
var questionsAndAnswers = [
  {
    question: "Which Greek hero was called 'Tamer of Horses'?",
    options: ["Paris", "Hector", "Alexander the Great", "Apollo"],
    answer: "Hector"
  },
  {
    question: "In Greek mythology, who flew too close to the Sun?",
    options: ["Icarus", "Pegasus", "Theseus", "Proteus"],
    answer: "Icarus"
  },
  {
    question: "Who was the chief god of all the ancient Greeks?",
    options: ["Minerva", "Apollo", "Zeus", "Hermes"],
    answer: "Zeus"
  },
  {
    question: "Who was the Greek goddes of the rainbow?",
    options: ["Hera", "Iris", "Hecate", "Aphrodite"],
    answer: "Iris"
  },
];
