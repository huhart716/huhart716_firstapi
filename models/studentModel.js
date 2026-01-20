const db = require("../config/db");

// GET all students
const getAllStudents = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_student");
    return rows;
};

// GET student by ID
const findStudentById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM tbl_student WHERE id = ?",
        [id]
    );
    return rows[0];
};

// ADD student
const createStudent = async (student) => {
    const {
        firstname,
        lastname,
        gender,
        age,
        course_id,
        department_id,
        status
    } = student;

    const [result] = await db.query(
        `INSERT INTO tbl_student 
        (firstname, lastname, gender, age, course_id, department_id, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [firstname, lastname, gender, age, course_id, department_id, status]
    );

    return result.insertId;
};

// UPDATE student info
const updateStudent = async (id, student) => {
    const {
        firstname,
        lastname,
        gender,
        age,
        course_id,
        department_id
    } = student;

    await db.query(
        `UPDATE tbl_student
         SET firstname = ?, lastname = ?, gender = ?, age = ?, 
             course_id = ?, department_id = ?
         WHERE id = ?`,
        [firstname, lastname, gender, age, course_id, department_id, id]
    );
};

// UPDATE student status ONLY
const updateStudentStatus = async (id, status) => {
    await db.query(
        "UPDATE tbl_student SET status = ? WHERE id = ?",
        [status, id]
    );
};

// DELETE student
const deleteStudent = async (id) => {
    await db.query(
        "DELETE FROM tbl_student WHERE id = ?",
        [id]
    );
};

module.exports = {
    getAllStudents,
    findStudentById,
    createStudent,
    updateStudent,
    updateStudentStatus,
    deleteStudent,
};
