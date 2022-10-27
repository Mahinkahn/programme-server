const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
const courses = require('./data/Courses.json');

app.get('/', (req, res) => {
    res.send('Online School  API Runing');
});

//Send All Courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

//Send Data For Courses Course Detels page
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id == id);
    res.send(selectCourse);
});

// Send Data For  Check  Out  page
app.get('/course/:id/checkout', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id == id);
    res.send(selectCourse);
});

app.listen(port, () => {
    console.log('Online School Server Runing', port);
});