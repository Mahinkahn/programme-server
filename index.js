const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
const courses = require('./data/Courses.json');

app.get('/', (req, res) => {
    res.send('Online School  API Runing');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id == id);
    res.send(selectCourse);
    console.log(id);
});
app.get('/course/:id/checkout', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id == id);
    res.send(selectCourse);
    console.log(id);
});

app.listen(port, () => {
    console.log('Hero News Server Runing', port);
});