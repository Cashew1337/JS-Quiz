//Variables
var timerEl = document.querySelector('.timer-element');
var quizEl = document.querySelector('.quiz-body');
var quizTitle = document.getElementById('quiz-title');
var quizDescription = document.getElementById('quiz-description');
var startBtnEl = document.getElementById('start-quiz');
var submitScoreButton = document.getElementById('score-submit');
var highScoreButton = document.getElementById('highscore-button');

var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')

var quizScore = 0;
var secondsLeft;
var timerInterval;
let i = 0;
var question = 0;
var choices;
var correctAnswer;
var button = document.querySelector('button');

var questions = [
    {
        question: 'What is Javascript?',
        choices: { a: 'JavaScript is a scripting language used to make the website interactive', b: 'JavaScript is an assembly language used to make the website interactive', c: 'JavaScript is a compiled language used to make the website interactive', d: 'None of the mentioned' },
        correctAnswer: 'a'
    },

    {
        question: 'What is used to select an item by its ID?',
        choices: { a: 'document.querySelector', b: 'document.getElementById', c: 'item.getById', d: 'item.id' },
        correctAnswer: 'b'
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: { a: 'It is an ordered list of values', b: 'It is an ordered list of objects', c: 'It is an ordered list of string', d: 'It is an ordered list of functions' },
        correctAnswer: 'a'
    },

    {
        question: 'What element is Javascript enclosed in when entered into HTML?',
        choices: { a: '<javascript>', b: '<js>', c: '<scripting>', d: '<script>' },
        correctAnswer: 'd'
    },

    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>?',
        choices: { a: 'document.getElement("p").innerHTML = "Hello World!";', b: 'document.getElementById("demo").innerHTML = "Hello World!";', c: '#demo.innerHTML = "Hello World!";', d: 'document.getElementByName("p").innerHTML = "Hello World!";' },
        correctAnswer: 'b'
    },

    {
        question: 'Where is the correct place to insert a JavaScript?',
        choices: { a: 'The <head> section', b: 'The <body> section', c: 'Both the <head> section and the <body> section are correct' },
        correctAnswer: 'c'
    },

    {
        question: 'How do you create a function in JavaScript?',
        choices: { a: 'function:myFunction()', b: 'function = myFunction()', c: 'function myFunction()' },
        correctAnswer: 'c'
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: { a: 'msgBox("Hello World");', b: 'alertBox("Hello World");', c: 'alert("Hello World");', d: 'msg("Hello World");' },
        correctAnswer: 'c'
    },

    {
        question: 'How to write an IF statement in JavaScript?',
        choices: { a: 'if i == 5 then', b: 'if i = 5 then', c: 'if i = 5', d: 'if (i == 5)' },
        correctAnswer: 'd'
    },

    {
        question: 'How does a FOR loop start?',
        choices: { a: 'for (i = 0; i <= 5)', b: 'for i = 1 to 5', c: 'for (i = 0; i <= 5; i++)', d: 'for (i <= 5; i++)' },
        correctAnswer: 'c'
    }
];

console.log(questions.length);
//Function to start the quiz
function startGame() {
    console.log('button clicked');
    secondsLeft = 75;
    setTimer();
    questionAndAnswer();
}

//Function used to render questions from questions array
function questionAndAnswer() {
    if (question < questions.length) {

        currentQuestion = questions[i].question;
        choices = questions[i].choices;
        correctAnswer = questions[i].correctAnswer;
        var quizQuestionEl = document.createElement('p');
        var answer1 = document.createElement('button');
        answer1.textContent = 'a: ' + choices['a'];
        answer1.setAttribute('id', 'a');
        var answer2 = document.createElement('button');
        answer2.textContent = 'b: ' + choices['b'];
        answer2.setAttribute('id', 'b');
        var answer3 = document.createElement('button');
        answer3.textContent = 'c: ' + choices['c'];
        answer3.setAttribute('id', 'c');
        var answer4 = document.createElement('button');
        answer4.textContent = 'd: ' + choices['d'];
        answer4.setAttribute('id', 'd');

        quizQuestionEl.innerHTML = currentQuestion;

        while (quizEl.hasChildNodes()) {
            quizEl.removeChild(quizEl.firstChild);
        }
        quizEl.appendChild(quizQuestionEl);
        quizEl.appendChild(answer1);
        quizEl.appendChild(answer2);
        quizEl.appendChild(answer3);
        quizEl.appendChild(answer4);
    }
};
console.log(quizEl)

quizEl.addEventListener('click', function (event) {
    event.preventDefault;
    var element = event.target;

    if (element.matches('button')) {
        var pressedButton = element.getAttribute('id');

        if (pressedButton === correctAnswer) {
            quizScore += 5;
            i++;
            question++;
            questionAndAnswer();
        } else if (secondsLeft >= 10) {
            secondsLeft = secondsLeft - 10;
        }
    }
});

//Function to start the timer and end the quiz if timer reaches 0
function setTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = 'Time: ' + secondsLeft;
        if (secondsLeft === 0 || question === questions.length) {
            clearInterval(timerInterval);
            saveHighscore();
        }
    }, 1000);
}

//Function to save the new score to the highscore page
function saveHighscore() {
    var newScore = [];
    newScore.push(quizScore);

    localStorage.setItem('newScore', JSON.stringify(newScore));

    window.location.replace("./submit.html");
}

//Initiates the quiz by initiating the startGame() function
startBtnEl.addEventListener('click', startGame);
