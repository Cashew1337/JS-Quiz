var timerEl = document.querySelector('.timer-element');
var quizEl = document.querySelector('.quiz-body');
var startBtn = document.getElementById('start-quiz');
var questions = [
    {   
        question: 'What is Javascript?',
        choices: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive', 'None of the mentioned'],
        answer: [0]
    },

    {
        question: 'What is used to select an item by its ID?',
        choices: ['document.querySelector', 'document.getElementById', 'item.getById', 'item.id'],
        answer: [1]
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string' ,'It is an ordered list of functions'],
        answer: [0]
    },

    {
        question: 'What element is Javascript enclosed in when entered into HTML?',
        choices: ['<javascript>', '<js>', '<scripting>' ,'<script>'],
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
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string' ,'It is an ordered list of functions'],
        answer: [0]
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string' ,'It is an ordered list of functions'],
        answer: [0]
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string' ,'It is an ordered list of functions'],
        answer: [0]
    },

    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        choices: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of string' ,'It is an ordered list of functions'],
        answer: [0]
    }
]

function startGame() {

}