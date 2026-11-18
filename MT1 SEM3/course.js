
let courses = [
    {
        "id": 1,
        "course": "FSD",
        "course code": "FSD101",
        "department": "CSE-DS"
    }
];

// GET - Read all courses
exports.getCourses = (req, res) => {
    res.status(200).json(courses);
};

// POST - Add new course
exports.addCourse = (req, res) => {
    let body = req.body;

    courses.push(body);

    res.status(201).json(body);
};

// PUT - Update course
exports.updateCourse = (req, res) => {
    let id = parseInt(req.params.id);

    let body = req.body;

    let index = courses.findIndex(c => c.id === id);

    if (index !== -1) {
        courses[index] = {
            ...body,
            id: id
        };

        res.status(200).json(courses[index]);
    }
    else {
        res.status(404).json("Course not found");
    }
};

// DELETE - Delete course
exports.deleteCourse = (req, res) => {
    let id = parseInt(req.params.id);

    let index = courses.findIndex(c => c.id === id);

    if (index !== -1) {
        courses.splice(index, 1);

        res.status(200).json("Course deleted");
    }
    else {
        res.status(404).json("Course not found");
    }
};
