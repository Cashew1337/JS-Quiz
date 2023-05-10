scoreList = document.querySelector('.score-list');

var highScore = JSON.parse(localStorage.getItem("highScores"));
// var highScoreList = [];

if (highScore && highScore.length) {
    renderHighScores();
}

function renderHighScores() {

    for (var i = 0; i < highScore.length; i++) {

        var ul = document.createElement('li');
        ul.textContent = highScore[i];
        ul.setAttribute("id", "list-item");
        scoreList.appendChild(ul);
    }
};