// QUESTION 2 TIMER

let question2TimeLeft = 60; // 1 minute

let question2Countdown;


// Get timer

const timer2 = document.getElementById("timer");


// Update timer display

function updateQuestion2Timer() {

    let minutes = Math.floor(question2TimeLeft / 60);

    let seconds = question2TimeLeft % 60;


    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;


    timer2.textContent =
        "Time Left: " + minutes + ":" + seconds;
}


// Start Question 2 timer

function startQuestion2Timer() {

    question2TimeLeft = 60;

    updateQuestion2Timer();


    question2Countdown = setInterval(function () {

        question2TimeLeft--;

        updateQuestion2Timer();


        // Time is over

        if (question2TimeLeft <= 0) {

            clearInterval(question2Countdown);

            alert("Time is over!");

            window.location.href = "outro.html";

        }

    }, 1000);

}


// -------------------------
// KEYBOARD EVENT
// -------------------------

document.addEventListener("keydown", function (event) {

    // A → Option A

    if (event.key === "a" || event.key === "A") {

        document.getElementById("q2a").checked = true;

    }


    // B → Option B

    if (event.key === "b" || event.key === "B") {

        document.getElementById("q2b").checked = true;

    }


    // C → Option C

    if (event.key === "c" || event.key === "C") {

        document.getElementById("q2c").checked = true;

    }


    // D → Option D

    if (event.key === "d" || event.key === "D") {

        document.getElementById("q2d").checked = true;

    }


    // Enter → Submit

    if (event.key === "Enter") {

        document.getElementById("submitbutton").click();

    }

});


// -------------------------
// SUBMIT QUIZ
// -------------------------

const quizForm = document.getElementById("quizForm");


quizForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get Question 2 answer

    const answer2 = document.querySelector(
        'input[name="question2"]:checked'
    );


    // Check if Question 2 is answered

    if (!answer2) {

        alert("Please answer Question 2.");

        return;

    }


    // Stop Question 2 timer

    clearInterval(question2Countdown);


    // Get Question 1 answer

    const answer1 =
        localStorage.getItem("question1Answer");


    // -------------------------
    // CALCULATE SCORE
    // -------------------------

    let score = 0;


    // Question 1 correct answer = A

    if (answer1 === "A") {

        score++;

    }


    // Question 2 correct answer = B

    if (answer2.value === "B") {

        score++;

    }


    // Save score

    localStorage.setItem(
        "quizScore",
        score
    );


    // -------------------------
    // SHOW SCORE
    // -------------------------

    alert(
        "Your Score: " + score + " / 2"
    );


    // Disable submit button

    document.getElementById("submitbutton").disabled = true;


    // -------------------------
    // GO TO OUTRO PAGE
    // -------------------------

    setTimeout(function () {

        window.location.href = "outro.html";

    }, 3000);

});