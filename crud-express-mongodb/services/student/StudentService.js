const StudentModel = require('../../models/student/StudentModel');

let students = [
    {_id: 0, name:"Jefferson de Carvalho", course: "Sistemas de Informação", ira: 6.7},
    {_id: 1, name:"Juan David", course: "Engenharia de Computação", ira: 7.8},
    {_id: 2, name:"Sarah Soares", course: "Sistemas de Informação", ira: 8.4},
    {_id: 3, name:"Auri Joter", course: "Engenharia de Computação", ira: 7.2},
    {_id: 4, name:"Daemon Salvatore", course: "Engenharia de Computação", ira: 9.7},
    {_id: 5, name:"Stefan Salvatore", course: "Ciências da Computação", ira: 7.8},
    {_id: 6, name:"Carlisle Cullin", course: "Sistemas de Informação", ira: 10},
    {_id: 7, name:"Matt Rodrigues", course: "Engenharia de Computação", ira: 7.2}
]
let _id = 8

class StudentService {

    static create(data) {
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira)
        students.push(student)
        return student
    }
    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i]
            }
        }
        return {}
    }
    static update(_id, data) {
        for (let s of students) {
            if (s._id == _id) {
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s
            }
        }
        return null
    }
    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1)
                return true
            }
        }
        return false
    }
    static list() {
        return students
    }

}
module.exports = StudentService