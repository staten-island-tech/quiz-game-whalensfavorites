// define your variables
correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("score");
const pick = document.querySelectorAll("choices");

console.log(pick);
// make an array of questions with objects
const questions = [
  {
    question: "What does Mr Whalen own the most of?",
    choiceA: "Plaid flannels",
    choiceB: "Sport Jerseys",
    choiceC: "Crop tops",
    correct: "A",
  },

  {
    question: "What is Mr Whalen's spirit animal?",
    choiceA: "Chihuahua",
    choiceB: "Monkey",
    choiceC: "Lion",
    correct: "B",
  },

  {
    question: "What shoes does he always wear?",
    choiceA: "Sketchers",
    choiceB: "Nike",
    choiceC: "Adidas",
    correct: "C",
  },

  {
    question: "What class is his least favorite class to teach?",
    choiceA: "CAD",
    choiceB: "Computer Science",
    choiceC: "AP World",
    correct: "A",
  },

  {
    question: "What college did he go to?",
    choiceA: "Harvard",
    choiceB: "CSI",
    choiceC: "St. Johns",
    correct: "C",
  },
];

// display a question! (or rendering)

// create variables to display last question using index length!!
const lastQuestion = questions.length - 1;
// repeat with the question the person is answer.
let runningQuestion = 0;
let score = 0;

function displayQuestion() {
  let q = questions[runningQuestion];

  // display the question.. using PARAGRAPH TAGS!
  question.innerHTML = "<p>" + q.question + "</p>";

  // display the choices
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  displayQuestion();
  // displays it as a block, HTML code for quiz is none
  quiz.style.display = "block";
}
// check to see if the answer user selected is correct

// thank you muhammad ^^;
function checkAnswer(event) {
  if (event.target.id == questions[runningQuestion].correct) {
    // if selected the correct answer, add one
    score++;
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    displayQuestion();
  } else {
    scoreRender();
  }
}

// select my buttons

// on click event listener

// triggers the checkAnswer function

// SOLUTION 1: DIVIDER !!!! EXPERIMENT : ERROR - SCORE NO LONGER WORKS

// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// let pick = [choiceA, choiceB, choiceC];

// document.querySelectorAll(".choice").forEach((button) => {
//   button.addEventListener("click", (event) => {
//     checkAnswer();
//   });
// });

// console.log(event);

// SOLUTION 2: DIVIDER !!!!
// choice.addEventListener("click", function () {
//   checkAnswer();
// });

// for (var i = 0; i < choice; i++) {
//   document
//     .querySelectorAll(".choice")
//     [i].addEventListener("click", function () {
//       checkAnswer();
//     });
// }

//SOLUTION 3: DIVIDER!!!!!

// pick.forEach((button) => {
//   button.addEventListener("click", (checkAnswer) => {
//     checkAnswer();
//   });
// });

// DIVIDER
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);

function scoreRender() {
  // display the block, HTML code is none
  scoreDiv.style.display = "block";
  // gives us the rounded score percentage.
  const scoreNumber = Math.round((100 * score) / questions.length);

  // each percentage of score gives a photo
  // learned from the youtube video that ? and : are alternatives for if...else statements; typically used in ternary operators, or a shortcut for traditional statements!!! AWESOME!!!
  let img =
    scoreNumber >= 80
      ? "img/monkey.png"
      : scoreNumber >= 60
      ? "img/monkey.png"
      : scoreNumber >= 40
      ? "img/monkey.png"
      : scoreNumber >= 20
      ? "img/monkey.png"
      : "img/monkey.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scoreNumber + "%</p>";
}
