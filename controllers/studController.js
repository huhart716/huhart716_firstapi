const StudentModel = require("../models/studentModel");

// GET all
const getAllStudents = async (req, res) => {
    try {
        const students = await StudentModel.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one
const getStudentById = async (req, res) => {
    try {
        const student = await StudentModel.findStudentById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST
const addStudent = async (req, res) => {
    try {
        const id = await StudentModel.createStudent(req.body);
        res.status(201).json({
            message: "Student added successfully",
            id,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT
const updateStudent = async (req, res) => {
    try {
        await StudentModel.updateStudent(req.params.id, req.body);
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PATCH status
const updateStudentStatus = async (req, res) => {
    try {
        await StudentModel.updateStudentStatus(
            req.params.id,
            req.body.status
        );
        res.json({ message: "Student status updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
const deleteStudent = async (req, res) => {
    try {
        await StudentModel.deleteStudent(req.params.id);
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    updateStudentStatus,
    deleteStudent,
};
