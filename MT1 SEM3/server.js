
const express = require('express');
const app = express();

const PORT = 3000;

// Accept JSON data
app.use(express.json());

// Import routes
const routes = require('./route');

// Use routes
app.use('/courses', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
