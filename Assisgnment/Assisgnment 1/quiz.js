// Get student data from localStorage

const studentData = JSON.parse(
    localStorage.getItem("studentData")
);


// Display student's name

if (studentData) {

    document.getElementById("studentName").textContent =
        "Welcome, " + studentData.name + "!";

}


// Get Next button

const nextButton = document.getElementById("nextButton");


// Next button click event

nextButton.addEventListener("click", function () {

    const selectedAnswer = document.querySelector(
        'input[name="question1"]:checked'
    );


    // Check whether an option was selected

    if (!selectedAnswer) {

        alert("Please select an answer.");

        return;

    }


    // Check answer

    if (selectedAnswer.value === "B") {

        alert("Correct Answer!");

    } else {

        alert("Wrong Answer!");

    }

});