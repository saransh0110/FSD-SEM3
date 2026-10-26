// Get student data from localStorage

const studentData = JSON.parse(
    localStorage.getItem("studentData")
);


// Display student's name

if (studentData) {

    document.getElementById("studentName").textContent =
        "Welcome, " + studentData.name + "!";

}


// -------------------------
// TIMER
// -------------------------

let timeLeft = 1 * 60; // 1 minute

const timer = document.getElementById("timer");

let quizSubmitted = false;


const countdown = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);

    let seconds = timeLeft % 60;


    // Add 0 before single digit numbers

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;


    // Display timer

    timer.textContent =
        "Time Left: " + minutes + ":" + seconds;


    // Time is over

    if (timeLeft <= 0) {

        clearInterval(countdown);

        quizSubmitted = true;

        alert("Time is over! Your quiz has been submitted.");

        window.location.href = "outro.html";

    }


    timeLeft--;

}, 1000);


// -------------------------
// QUIZ SUBMISSION
// -------------------------

const quizForm = document.getElementById("quizForm");


quizForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Prevent submission if timer has already ended

    if (quizSubmitted) {
        return;
    }


    // Get selected answers

    const answer1 = document.querySelector(
        'input[name="question1"]:checked'
    );

    const answer2 = document.querySelector(
        'input[name="question2"]:checked'
    );


    // Check if all questions are answered

    if (!answer1 || !answer2) {

        alert("Please answer all questions.");

        return;

    }


    // Calculate score

    let score = 0;


    // Question 1 correct answer = A

    if (answer1.value === "A") {
        score++;
    }


    // Question 2 correct answer = B

    if (answer2.value === "B") {
        score++;
    }


    // Stop timer

    clearInterval(countdown);

    quizSubmitted = true;


    // Save score

    localStorage.setItem(
        "quizScore",
        score
    );


    // Show score

    alert(
        "Your Score: " + score + " / 2"
    );


    // Disable submit button

    document.getElementById("submitbutton").disabled = true;


    // Move to thank-you page
    setTimeout(function () {
        window.location.href = "outro.html";
    }, 3000);

});