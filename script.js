const questions = [
  {
    question: 'Commonly used data type DO not include:',
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    answer: 3,
  },
  {
    question: 'The condition in an if / else statement is enclosed with _____.',
    choices: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
    answer: 2,
  },
  {
    question: 'Arrays in JavaScript can be used to store____.',
    choices: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
    answer: 4,
  },
  {
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['Commas', 'Curly brackets', 'Quotes', 'Parenthesis'],
    answer: 3,
  }
];

const startBtn = document.querySelector('.startBtn');
const timerElement = document.querySelector('.timer-count');
const quiz = document.querySelector('#quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
let timer;
let timerCount;
let currentQuestion = 0;
let score = 0;


const startGame = () => {
  timerCount = 5;
  startTimer();
  renderQuestions(currentQuestion);
};

const startTimer = () => {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      gameOver();
    }
  }, 1000);
};

const renderQuestions = currentQuestion => {
  if (currentQuestion < questions.length) {
    questionEl.innerText = questions[currentQuestion].question;
    renderAnswers(currentQuestion);
  }
};

const renderAnswers = currentQuestion => {
  const answerContainer = document.querySelector('.answer-container');
  questions[currentQuestion].choices.forEach((choice, index) => {
    let btn = document.createElement("button");
    btn.innerText = (choice);
    btn.setAttribute("id", index + 1);
    btn.addEventListener('click', event => {
      if (currentQuestion >= questions.length - 1) {
        gameOver();
      }
      if (parseInt(event.target.id, 10) !== questions[currentQuestion].answer) {
        timerCount -= 5;
      }
        currentQuestion += 1;
        answerContainer.innerHTML = '';
        renderQuestions(currentQuestion);
    });
    answerContainer.appendChild(btn);
  });
};

const gameOver = () => {
  clearInterval(timer);
  score = timerCount;
  renderResults();
};

const renderResults = () => {
  

}


startBtn.addEventListener('click', () => {
  startGame();
});