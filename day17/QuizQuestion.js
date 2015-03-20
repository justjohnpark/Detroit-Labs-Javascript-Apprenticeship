/* Write a program which allows the user to build a quiz. Your program should include at least (3) types of objects:

QuizQuestion. QuizQuestion should include variables to hold a question and an answer. 

ScoreKeeper. ScoreKeeper should hold the quiz score and should include methods to increase the score (if the user gets a question right) or decrease the score (if the user gets a question wrong).

Quiz, which should a collection of QuizQuestions and a ScoreKeeper object.

Your program should allow the user to create and then take their quiz. */

var sget = require("sget");

function runQuizQuestions() {

  //don't make Quiz an object literal. Use a constructor.

  var Quiz = {};

  Quiz.ScoreKeeper = {
    score: 0,
    questions: {},
    increaseScore: function() {
      score += 5;
    },
    decreaseScore: function() {
      score -= 5;
    }
  };

  initializeMainMenu();

  function initializeMainMenu() {
    var option = sget("Welcome to QuizQuestion. What would you like to do? 1) Create a quiz 2) Take a quiz 3) Exit Program").trim();
    switch (option) {
      case "1": 
        createQuiz();
        break;
      case "2":
        takeQuiz();
        break;
      case "3":
        process.exit();
        break;
      default: 
        console.log("Invalid option. Please try again.");
        initializeMainMenu();
    }
  }

  function createQuiz() {
    var option = sget("What would you like to do? 1) Add a question 2) Done with adding questions").trim();
    switch (option) {
      case "1":
        addQuestion();
        break;
      case "2":
        initializeMainMenu();
        break;
      default:
        console.log("Invalid option. Please try again.");
        createQuiz;
    }
  }

  function addQuestion() {
    var question = sget("What is the question you'd like to add to the quiz?").trim().toLowerCase();
    var answer = sget("What's the answer?").trim().toLowerCase();
    quiz[question] = answer;
    createQuiz();
  }

  function takeQuiz() {
    for (key in Quiz.questions) {
      if (Quiz.questions.hasOwnProperty(key)) {
        var answer = sget(key).trim().toLowerCase();
        if (answer === Quiz.questions[key]) {
          console.log("That's correct.");
          Quiz.ScoreKeeper.increaseScore();
        } else {
          console.log("That's incorrect.");
          Quiz.ScoreKeeper.decreaseScore();
        }
      }
    }
    console.log("Here's your final score: " + Quiz.ScoreKeeper.score);
  }
}

runQuizQuestions();


