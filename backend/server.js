const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let courses = [];

app.post('/add-course', (req, res) => {
  const course = req.body;
  courses.push(course);
  res.status(201).json(course);
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

