const questions = [
    {
        question: 'Commonly used data type DO not include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 3,
    },
    {
        question: 'The condition in an if / else statement is enclosed with _____.',
        choice1: 'Quotes',
        choice2: 'Curly Brackets',
        choice3: 'Parenthesis',
        choice4: 'Square Brackets',
        answer: 2,
    },
    {
        question: 'Arrays in JavaScript can be used to store____.',
        choice1: 'Numbers and strings',
        choice2: 'Other arrays',
        choice3: 'Booleans',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'Quotes',
        choice4: 'Parenthesis',
        answer: 3,
    }
];

const startBtn = document.querySelector('.startBtn');
const timerElement = document.querySelector('.timer-count');
let initialTime = 5;
let currentQuestion = 0;


startBtn.addEventListener('click', () => {
    startGame();
});

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

const renderQuestions = () => {
    console.log(questions[currentQuestion]);
}