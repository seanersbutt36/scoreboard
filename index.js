let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeTotalScore = 0;
let guestTotalScore = 0;

function homeOnePoint() {
    homeTotalScore += 1;
    refreshScore();
}

function homeTwoPoints() {
    homeTotalScore += 2;
    refreshScore();
}

function homeThreePoints() {
    homeTotalScore += 3;
    refreshScore();
}

function guestOnePoint() {
    guestTotalScore += 1;
    refreshScore();
}

function guestTwoPoints() {
    guestTotalScore += 2;
    refreshScore();
}

function guestThreePoints() {
    guestTotalScore += 3;
    refreshScore();
}

function refreshScore() {
    homeScore.innerText = homeTotalScore;
    guestScore.innerText = guestTotalScore;
}