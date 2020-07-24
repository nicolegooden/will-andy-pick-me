var inputQuestion = document.querySelector('input');
var buttonGetAnswer = document.querySelector('.button-get-answer');
var answer = document.querySelector('.answer');
var userQuestion = document.querySelector('.user-question');
var ball = document.querySelector('.image-eight-ball');
var buttonClear = document.querySelector('.button-clear');

var randomAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

buttonGetAnswer.addEventListener('click', showOutcome);
buttonClear.addEventListener('click', clearMessage)

function showOutcome() {
  if (buttonGetAnswer.disabled) {
    buttonGetAnswer.disabled = false;
  }

  if (!(inputQuestion.value === '')) {
    userQuestion.innerText = inputQuestion.value;
    answer.innerText = getRandomAnswer(randomAnswers);
    removeBall();
    inputQuestion.value = '';
  } else {
    buttonGetAnswer.disabled = true;
  }
};

function getRandomAnswer(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function removeBall() {
  ball.classList.add('hidden');
};

function clearMessage() {
  if (!(userQuestion.innerText === '' || answer.innerText === '')) {
    userQuestion.innerText = '';
    answer.innerText = '';
    addBall();
  }
};

function addBall() {
  ball.classList.remove('hidden');
};
