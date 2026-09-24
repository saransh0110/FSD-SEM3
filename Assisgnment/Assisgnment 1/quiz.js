// Get student data from localStorage

const studentData = JSON.parse(
    localStorage.getItem("studentData")
);


// Display student's name

if (studentData) {

    document.getElementById("studentName").textContent =
        "Welcome, " + studentData.name + "!";

}


// Get quiz form

const quizForm = document.getElementById("quizForm");


// Submit quiz

quizForm.addEventListener("submit", function (event) {

    event.preventDefault();


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


    // Save score

    localStorage.setItem(
        "quizScore",
        score
    );


    // Show score as popup

    alert(
        "Your Score: " + score + " / 2"
    );


    // Disable submit button

    document.getElementById("submitbutton").disabled = true;


    // Move to thank-you page after 3 seconds

    setTimeout(function () {

        window.location.href = "outro.html";

    }, 3000);

});