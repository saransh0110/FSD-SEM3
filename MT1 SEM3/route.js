
const express = require('express');
const router = express.Router();

const course = require('./course');

// GET
router.get('/', course.getCourses);

// POST
router.post('/', course.addCourse);

// PUT
router.put('/:id', course.updateCourse);

// DELETE
router.delete('/:id', course.deleteCourse);

module.exports = router;
