const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    updateStudentStatus,
    deleteStudent,
} = require("../controllers/studController");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.patch("/:id/status", updateStudentStatus);
router.delete("/:id", deleteStudent);

module.exports = router;
