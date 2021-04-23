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

// define your variables

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("score");
const restartBtn = document.getElementById("restart");

export { questions };
export {
  start,
  quiz,
  question,
  choiceA,
  choiceB,
  choiceC,
  scoreDiv,
  restartBtn,
};
