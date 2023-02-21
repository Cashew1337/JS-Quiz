//Variables
var timerEl = document.querySelector('.timer-element');
var quizEl = document.querySelector('.quiz-body');
var quizTitle = document.getElementById('quiz-title');
var quizDescription = document.getElementById('quiz-description');
var startBtnEl = document.getElementById('start-quiz');
var highscoreEl = document.getElementById('highscores');
var secondsLeft;
var timerInterval;
let i = 0;
var questions = [
    {
        question: 'What is Javascript?',
        choices: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive', 'None of the mentioned'],
        answer: '0'
    },

    {
        question: 'What is used to select an item by its ID?',
        choices: ['document.querySelector', 'document.getElementById', 'item.getById', 'item.id'],
        answer: [1]
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string', 'It is an ordered list of functions'],
        answer: [0]
    },

    {
        question: 'What element is Javascript enclosed in when entered into HTML?',
        choices: ['<javascript>', '<js>', '<scripting>', '<script>'],
        answer: [3]
    },

    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>?',
        choices: ['document.getElement("p").innerHTML = "Hello World!";', 'document.getElementById("demo").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";'],
        answer: [1]
    },

    {
        question: 'Where is the correct place to insert a JavaScript?',
        choices: ['The <head> section', 'The <body> section', 'Both the <head> section and the <body> section are correct'],
        answer: [2]
    },

    {
        question: 'How do you create a function in JavaScript?',
        choices: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
        answer: [2]
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['msgBox("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");'],
        answer: [2]
    },

    {
        question: 'How to write an IF statement in JavaScript?',
        choices: ['if i == 5 then', 'if i = 5 then', 'if i = 5', 'if (i == 5)'],
        answer: [3]
    },

    {
        question: 'How does a FOR loop start?',
        choices: ['for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)'],
        answer: [2]
    }
];
var questionJson = JSON.stringify(questions);

console.log(questions);
//Function to start the quiz
function startGame() {
    secondsLeft = 75;
    setTimer();
    questionAndAnswer();
}

//Function used to render questions from questions array
function questionAndAnswer() {
        var answerJson = JSON.parse(questionJson);
        var question = questions[i].question;
        var choices = questions[i].choices;
    var quizQuestionEl = document.createElement('p');
    var answer1 = document.createElement('button');
    answer1.textContent = choices[0];
        answer1.setAttribute('class', 'answer')
    var answer2 = document.createElement('button');
    answer2.textContent = choices[1];
        answer2.setAttribute('class', 'answer')
    var answer3 = document.createElement('button');
    answer3.textContent = choices[2];
        answer3.setAttribute('class', 'answer')
    var answer4 = document.createElement('button');
    answer4.textContent = choices[3];
        answer4.setAttribute('class', 'answer')
    quizQuestionEl.innerHTML = question;
    
    while (quizEl.hasChildNodes()) {
        quizEl.removeChild(quizEl.firstChild);
    }
    quizEl.appendChild(quizQuestionEl);
    quizEl.appendChild(answer1);
    quizEl.appendChild(answer2);
    quizEl.appendChild(answer3);
    quizEl.appendChild(answer4);

    answer1.addEventListener('click', checkAnswer);
    answer2.addEventListener('click', checkAnswer);
    answer3.addEventListener('click', checkAnswer);
    answer4.addEventListener('click', checkAnswer);

    //Function to check selected answer
function checkAnswer() {
    var answers = document.getElementById('answer')
    if (answers === questions.answer) {
        question++
    } else {
        secondsLeft-10;
    }
}

    console.log(quizEl)
}

//Function to start the timer and end the quiz if timer reaches 0
function setTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = 'Time: ' + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            saveHighscore();
        }
    }, 1000);
}

//Function to render the highscores on the Highscores page
function renderScore() {

}

//Function to save the new score to the highscore page
function saveHighscore() {
    window.location.assign("./highscore.html");
    renderScore();

}

//Initiates the quiz by initiating the startGame() function
startBtnEl.addEventListener('click', startGame);