// Dylan Park, 2021.
// Node.js w/Firebase Tutorial.

const express = require('express');
const {addStudent, 
       getAllStudents, 
       getStudent,
       updateStudent,
       deleteStudent
      } = require('../controllers/studentController');

const router = express.Router();

router.post('/student', addStudent);
router.get('/students', getAllStudents);

module.exports = {
    routes: router
}