const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

router.get('/', (request, response) => {
    StudentModel.find({})
        .then((students) => {
            res.send('students/index', {
                students : students
            })
        })
    })
    router.get('/:id', (request, response) => {
        const studentId = request.params.id
    
        StudentModel.findById(studentId)
            .then((student) => {
                response.render('student/show',{
                    student
                })
            })
    
    })

module.exports = router