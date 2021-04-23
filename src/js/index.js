import { questions } from "./questions";
import {
  start,
  quiz,
  question,
  choiceA,
  choiceB,
  choiceC,
  scoreDiv,
  restartBtn,
} from "./questions";

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
  } else if (event.target.id == questions[runningQuestion].length) {
    restartButton();
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
      ? "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg"
      : scoreNumber >= 60
      ? "https://cdn.iconscout.com/icon/free/png-256/slightly-smiling-face-1645183-1395513.png"
      : scoreNumber >= 40
      ? "https://iconarchive.com/download/i43123/oxygen-icons.org/oxygen/Emotes-face-plain.ico"
      : scoreNumber >= 20
      ? "https://images.fineartamerica.com/images-medium-large-5/sad-monkey-lori-silcox.jpg"
      : "https://images.fineartamerica.com/images-medium-large-5/sad-monkey-lori-silcox.jpg";

  // switch (img) {
  //   case scoreNumber >= 80:
  //     "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg";
  //     break;
  //   case scoreNumber >= 60:
  //     "https://cdn.iconscout.com/icon/free/png-256/slightly-smiling-face-1645183-1395513.png";
  //     break;
  //   case scoreNumber >= 40:
  //     "https://iconarchive.com/download/i43123/oxygen-icons.org/oxygen/Emotes-face-plain.ico";
  //     break;
  //   case scoreNumber >= 20:
  //     "https://images.fineartamerica.com/images-medium-large-5/sad-monkey-lori-silcox.jpg";
  //     break;
  //   default:
  //     "https://images.fineartamerica.com/images-medium-large-5/sad-monkey-lori-silcox.jpg";
  // };

  scoreDiv.innerHTML = "<img src=" + img + " width= '265px';>";
  scoreDiv.innerHTML += "<p>" + scoreNumber + "%</p>";
}

// restartBtn.addEventListener("click", restartButton);

// function restartButton() {
//   //display the button
//   restartBtn.style.display = "block";
// }
