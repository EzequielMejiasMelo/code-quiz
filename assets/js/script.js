//Asignment Code
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var scoreEl = document.querySelector("#score");
var nameInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

// Starts and ends game, handles setting highscore
function quizStart() {
  var score = quizGame();
}

//handles setting: questions, answers and timer | returns score int
function quizGame() {
    var questionsAndAnswers = {
        question1: "Pizza?",
        correctAnswer1: "No",
        Answers1: ["Yes", "No", "Maybe"]
    }
}
