// Get student data from localStorage

const studentData = JSON.parse(
    localStorage.getItem("studentData")
);


// Display student's name

if (studentData) {

    document.getElementById("thankYouMessage").textContent =
        "Thank you, " + studentData.name + "!";

}


// Home button

const homeButton = document.getElementById("homeButton");


homeButton.addEventListener("click", function () {

    window.location.href = "index.html";

});