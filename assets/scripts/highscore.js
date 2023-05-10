var quizScore = JSON.parse(localStorage.getItem("newScore"));
var results = document.getElementById('score-msg');

results.textContent = 'Your Score: ' + quizScore

submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    var userInitials = document.querySelector("#initials").value;
    if (userInitials === "") {
        alert("Initials cannot be blank");
    } else {
        alert("Registered Successfully");
    }

    var highScores = JSON.parse(localStorage.getItem("scores")) || [];
    highScores.push(userInitials + "," + quizScore);

    localStorage.setItem('scores', JSON.stringify(highScores));
});