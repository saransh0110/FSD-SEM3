
// QUESTION 2 TIMER

let question2TimeLeft = 60;

let question2Countdown;

const timer2 = document.getElementById("timer");


// Update timer

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

        if (question2TimeLeft <= 0) {

            clearInterval(question2Countdown);

            alert("Time is over!");

            window.location.href = "outro.html";

        }

    }, 1000);
}


// -------------------------
// KEYBOARD EVENTS
// -------------------------

const question2Select =
    document.getElementById("question2Select");


document.addEventListener("keydown", function (event) {

    // A → Select A

    if (event.key === "a" || event.key === "A") {

        question2Select.value = "A";

    }


    // B → Select B

    else if (event.key === "b" || event.key === "B") {

        question2Select.value = "B";

    }


    // C → Select C

    else if (event.key === "c" || event.key === "C") {

        question2Select.value = "C";

    }


    // D → Select D

    else if (event.key === "d" || event.key === "D") {

        question2Select.value = "D";

    }


    // Enter → Submit

    else if (event.key === "Enter") {

        document.getElementById("submitbutton").click();

    }

});


// -------------------------
// SUBMIT QUIZ
// -------------------------

const quizForm =
    document.getElementById("quizForm");


quizForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get selected answer

    const answer2 =
        question2Select.value;


    // Check answer

    if (answer2 === "") {

        alert("Please select an answer.");

        return;

    }


    // Stop timer

    clearInterval(question2Countdown);


    // Get Question 1 answer

    const answer1 =
        localStorage.getItem("question1Answer");


    // Calculate score

    let score = 0;


    // Question 1 correct answer = A

    if (answer1 === "A") {

        score++;

    }


    // Question 2 correct answer = B

    if (answer2 === "B") {

        score++;

    }


    // Save score

    localStorage.setItem(
        "quizScore",
        score
    );


    // Show score

    alert(
        "Your Score: " + score + " / 2"
    );


    // Disable submit

    document.getElementById(
        "submitbutton"
    ).disabled = true;


    // Go to outro page

    setTimeout(function () {

        window.location.href = "outro.html";

    }, 3000);

});