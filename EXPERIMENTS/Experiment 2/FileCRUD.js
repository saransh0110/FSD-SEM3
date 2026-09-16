const fs = require("fs");

const fileName = "example.txt";

// CREATE
fs.writeFileSync(fileName, "Hello, this is my first file.");
console.log("File created successfully.");

// READ
const data = fs.readFileSync(fileName, "utf8");
console.log("File content:", data);

// UPDATE
fs.appendFileSync(fileName, "\nThis is updated content.");
console.log("File updated successfully.");

// READ again
const updatedData = fs.readFileSync(fileName, "utf8");
console.log("Updated file content:", updatedData);

// DELETE
fs.unlinkSync(fileName);
console.log("File deleted successfully.");