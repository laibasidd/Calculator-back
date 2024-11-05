
const GPA = require('../models/gpaModel');

exports.calculateGPA = (req, res) => {
    const { courses } = req.body;

    if (!courses || courses.length === 0) {
        return res.status(400).json({ error: "No courses provided" });
    }

    let totalCredits = 0;
    let totalGradePoints = 0;

    courses.forEach(course => {
        const gradePoint = GPA.getGradePoint(course.grade);
        totalGradePoints += gradePoint * course.credits;
        totalCredits += course.credits;
    });

    const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    res.json({ gpa: gpa.toFixed(2) });
};
