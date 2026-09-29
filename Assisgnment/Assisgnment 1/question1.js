// Get student data from localStorage
const studentData = JSON.parse(
    localStorage.getItem("studentData")
);

// Display student's name
if (studentData) {
    document.getElementById("studentName").textContent =
        "Welcome, " + studentData.name + "!";
}

// QUESTION 1 TIMER
let timeLeft = 60; 
const timer = document.getElementById("timer");
let countdown;


// Update timer display
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.textContent =
        "Time Left: " + minutes + ":" + seconds;
}


// Start timer
updateTimer();
countdown = setInterval(function () {
    timeLeft--;
    updateTimer();


    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Time is over!");
        window.location.href = "outro.html";
    }
}, 1000);

// NEXT BUTTON
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function () {

    // Check Question 1 answer
    const answer1 = document.querySelector(
        'input[name="question1"]:checked'
    );


    if (!answer1) {
        alert("Please answer Question 1.");
        return;
    }


    // Save Question 1 answer

    localStorage.setItem(
        "question1Answer",
        answer1.value
    );


    // Stop Question 1 timer
    clearInterval(countdown);


    // Hide Question 1
    document.getElementById("question1Box").style.display = "none";


    // Show Question 2
    document.getElementById("question2Box").style.display = "block";


    // Reset timer for Question 2
    startQuestion2Timer();
});