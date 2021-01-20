
const express = require('express');
const app = express();

app.use(express.json());
const Student = require('./models/registration.model');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Sansari:Sara1983@cluster0.j3anv.mongodb.net/StudentName?retryWrites=true&w=majority', { useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', function () {
    console.log('MONGODB database connection established');
})

app.get('/', function (req, res) {
    console.log('in root');
    res.send({ message: 'SERVER UP!!!' })
})

app.get('/getStudents', function (req, res) {
    Student.find({})
        .then(studetResponse => {
            res.send(studetResponse)
        })
        .catch(err => 
            console.log(' ERROR!!!', err));
})

app.get('/getBoyStudents', function (req, res) {
    Student.find({gender:'boy'})
        .then(studetResponse => {
            res.send(studetResponse)
        })
        .catch(err => 
            console.log(' ERROR!!!', err));
})

app.get('/deleteStudents', function (req, res) {

    Student.findByIdAndRemove('6002549ec463c227290c89ba', (err,todo) => {
        res.send({message:'Delete'})
    })

})

app.get('/updateStudents', function (req, res) {

    let updateStudent = {
        gender: 'boy',
        grade: 'c',
        clubMember: true
    };

    Student.findByIdAndUpdate('600305fa8322893b96415d2f',updatedStudent, {
        
        console.log('updated!', todo);
        res.send({message:'Delete'})
    })

})


app.get('/storeStudent', (req, res) => {
    let studentExample = {
        gender: 'boy',
        grade: 'c',
        clubMember: false
    };
    let newStudent = new Student(studentExample);
    newStudent.save()
        .then(student => {
            console.log('student stored!!!', student);
            res.send(student);
        })
        .catch(err => {
            console.log(' ERROR!!!');
        })
})

app.listen('3000', function (req, res) {
    console.log('listening on port 3000');
})