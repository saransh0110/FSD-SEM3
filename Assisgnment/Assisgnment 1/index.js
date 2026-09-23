const studentForm = document.getElementById("studentForm");
const startQuiz = document.getElementById("startQuiz");

studentForm.addEventListener("submit", function (event) {

    // Get student details
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const section = document.querySelector('input[name="section"]:checked').value;


    // Check whether all details are filled
    if (
        name === "" ||
        email === "" ||
        roll === "" ||
        section === ""
    ) {
        alert("Please fill all the details.");
        return;
    }


    // Create student object
    const studentData = {
        name: name,
        email: email,
        roll: roll,
        section: section
    };


    // Store student information
    localStorage.setItem(
        "studentData",
        JSON.stringify(studentData)
    );


    // Confirmation message
    alert("Details saved successfully!");


    // Move to quiz page
    window.location.href = "quiz.html";

});


// ------------------------------------
// MOUSE EVENT
// ------------------------------------

startQuiz.addEventListener("mouseover", function () {

    startQuiz.style.transform = "scale(1.03)";

});


startQuiz.addEventListener("mouseout", function () {

    startQuiz.style.transform = "scale(1)";

});


// ------------------------------------
// KEYBOARD EVENT
// ------------------------------------

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        console.log("Enter key pressed");

    }

});