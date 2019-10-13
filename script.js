var questionOneEl = document.getElementById("question-one")
var questionTwoEl = document.getElementById("question-two")
var questionThreeEl = document.getElementById("question-three")
var questionFourEl = document.getElementById("question-four")
var startQuizEl = document.getElementById("quiz-start")
var quizEl = document.getElementById("quiz")
var questions = [
  {},
  {
    question : "What syntax is used for conditional statements in JavaScript?",
    questionOneEl : "If/Else",
    questionTwoEl : "This/That",
    questionThreeEl : "For",
    questionFourEl : "var/const",
    correct : "question-one"
  },
  {
    question : "What does HTML stand for?",
    questionOneEl : "Hyper Text Meta Language",
    questionTwoEl : "Hyper Time Markup Language",
    questionThreeEl : "Hyper Text Markup Language",
    questionFourEl : "Hyper Time Meta Language",
    correct : "question-three"
  },
  {
    question : "What file extension should HTML files have?",
    questionOneEl : ".php",
    questionTwoEl : ".html",
    questionThreeEl : ".js",
    questionFourEl : ".ht",
    correct : "question-two"
  },
  {
    question : "What file extension should JavaScript files have?",
    questionOneEl : ".php",
    questionTwoEl : ".html",
    questionThreeEl : ".js",
    questionFourEl : ".ht",
    correct : "question-three"
  },
  {
    question : "Which tag is the root tag in HTML?",
    questionOneEl : "title",
    questionTwoEl : "head",
    questionThreeEl : "body",
    questionFourEl : "html",
    correct : "question-four"
  },
  {
    question : "Arrays in JavaScript can be used to store _____.",
    questionOneEl : "Numbers and Strings",
    questionTwoEl : "Objects",
    questionThreeEl : "Other Arrays",
    questionFourEl : "All of the Above",
    correct : "question-four"
  }
]

var timerEl = document.querySelector(".timer");
var secondsLeft = 90;
var questionIndex = 0;
var lastQuestionIndex = questions.length - 1;

quizEl.addEventListener("click", renderQuestion());
document.querySelector("button").addEventListener("click", checkAnswer());


function renderQuestion(){
    var q = questions[questionIndex];
    question.innerHTML = "<p>" + q.question + "<p>";
    questionOneEl.innerHTML = q.questionOneEl;
    questionTwoEl.innerHTML = q.questionTwoEl;
    questionThreeEl.innerHTML = q.questionThreeEl;
    questionFourEl.innerHTML = q.questionFourEl;
}

function checkAnswer(){
  if(questions[questionIndex].correct !== questions[questionIndex].correct){
    secondsLeft - 10
  }
    else{
    }
  if (questionIndex < lastQuestionIndex){
    questionIndex++
    renderQuestion();
  }
}

var timer = setInterval(function(){
  secondsLeft -= 1;
  timerEl.innerHTML = secondsLeft
  if(secondsLeft <= 0){
    clearInterval(timer);
  }
}, 1000);