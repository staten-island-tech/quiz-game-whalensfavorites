// define your variables

correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("scoreContainer");

// make an array of questions with objects
const questions = [
  {
    question: "What does he own most of?",
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
    choiceA: "sketchers",
    choiceB: "nike",
    choiceC: "adidas",
    correct: "C",
  },

  {
    question: "What class is his least favorite to teach?",
    choiceA: "CAD",
    choiceB: "Comp sci",
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

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
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
