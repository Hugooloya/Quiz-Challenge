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
let highScores = {};



const startGame = () => {
  timerCount = 75;
  removeFirst();
  startTimer();
  renderQuestions(currentQuestion);
};

const startTimer = () => {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      removeQuestions();
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
      if (parseInt(event.target.id, 10) !== questions[currentQuestion].answer) {
        timerCount -= 5;
      }
      if (currentQuestion >= questions.length - 1) {
        gameOver();
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
  removeQuestions();
  score = timerCount;
  renderResults(score);
};

const renderResults = score => {
  let divElement = document.createElement('div');
  divElement.classList.add('score-style');
  divElement.innerHTML = '<h1>All Done!</h1>';
  let pElement = `<h2>Your final score is</h2>
                  <h1>${score}</h1>
                  <div class="initials">
                  <p>Enter initials:</p>
                  <input class="initialsBox" type="text">
                  <button class="submitBtn">Submit</button>
                  </div>`;
  divElement.insertAdjacentHTML('beforeend', pElement);
  let containerDiv = document.querySelector('.scoreScreen');
  containerDiv.appendChild(divElement);
  const submitBtn = document.querySelector('.submitBtn');
  submitBtn.addEventListener('click', event => {
    const initialsBox = document.querySelector('.initialsBox');
    if (initialsBox.value !== '') {
      const previousValue = JSON.parse(localStorage.getItem('highScores'));
      if (previousValue) {
        highScores = { ...previousValue, [initialsBox.value]: score };
      } else {
        highScores = { [initialsBox.value]: score };
      }
      localStorage.setItem('highScores', JSON.stringify(highScores));
      removeScores();
      renderHighscores();
    } else {
      alert('Please enter your initials.');
    };
  });
};

const renderHighscores = () => {
  let counter = 0;
  const hs = JSON.parse(localStorage.getItem('highScores'));
  const hsContainer = document.querySelector('.highscoreScreen');
  let divButtons = `<div class= gameOverbtns>
                      <button class= "playAgainbtn">Play Again</button>
                      <button class= "resetScoresbtn">Reset Scores</>`
  hsContainer.insertAdjacentHTML('afterend', divButtons);
  const playAgainbtn = document.querySelector('.playAgainbtn');
  playAgainbtn.addEventListener('click', e => {
    window.location.reload();
  });
  const resetScoresbtn = document.querySelector('.resetScoresbtn');
  resetScoresbtn.addEventListener('click', e => {
    localStorage.clear();
    window.location.reload();
  });
  if (hs) {
    for (const [key, value] of Object.entries(hs)) {
      counter += 1;
      let pElement = document.createElement('p');
      pElement.classList.add(`highScore${counter}`);
      pElement.innerText = `${key} - ${value}`;
      hsContainer.appendChild(pElement);
    };
  }
};

const hsLink = document.querySelector('.highscores');
hsLink.addEventListener('click', event => {
  event.preventDefault();
  removeFirst();
  removeQuestions();
  removeScores();
  renderHighscores();
});

startBtn.addEventListener('click', () => {
  startGame();
});

const removeFirst = () => {
  const mainContainer = document.querySelector('.main');
  mainContainer.remove();
};

const removeQuestions = () => {
  const quesContainer = document.querySelector('#quiz');
  quesContainer.remove();
};

const removeScores = () => {
  const highScontainer = document.querySelector('.scoreScreen');
  highScontainer.remove();
};



// To do:
// 1. Create Highscores h2
// 2. Create go back and clear highscores buttons
// 3. Write functions for go back and clear storage buttons
// 4. Add logic for clear screens
// 5. 