// //Quiz start button
// //Starts 60sec timer and fires 1st question
// //If answer is correct add 1 to correct answers, reset timer and fires next question, if answer incorrect, take 10 seconds from timer and fire next question

var section = document.querySelector(".intro")
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var currentQuestion = 0;
var timer;
var timerCount;
var questions = [
    {
        question: 'Commonly used data types DO Not Include:',
        choise1: 'Strings',
        choise2: 'Booleans',
        choise3: 'Alerts',
        choise4: 'Numbers',
        answer: 1,
    },
    {
        question: 'The condition in an if / else statement is enclosed with ______.',
        choise1: 'Quotes',
        choise2: 'Curly Brackets',
        choise3: 'Pharentesis',
        choise4: 'Square brackets',
        answer: 1,
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        choise1: 'Numers and Strings',
        choise2: 'Other Arrays',
        choise3: 'Booleans',
        choise4: 'All of the above',
        answer: 1,
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        choise1: 'Commas',
        choise2: 'Curly brackets',
        choise3: 'Quotes',
        choise4: 'Parenthesis',
        answer: 1,
    }
]




function startGame() {
    timerCount = 60
    startTimer();

    for (var i = 0; currentQuestion <= questions.length - 1;) {
        section.innerHTML = `<div>${questions[0].question}</div>`;
        if (timerCount === 0) {
            break
        }
    };
    // while (timerCount > 0) {
    //     section.innerHTML = `<div>${questions[0].question}</div>`;
    // }; 
    
};

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        // if (isWin && timerCount > 0) {
        //   // Clears interval and stops timer
        //   clearInterval(timer);
        //   winGame();
        // }
      }
      // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
    //   }
    }, 1000);
  }






startButton.addEventListener("click", startGame);


//create a loop create a button a value insert text

//createElement
