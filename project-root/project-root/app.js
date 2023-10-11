// app.js
const express = require('express');
const app = express();
const db = require('./database/db');
const quizRoutes = require('./routes/quizRoutes');
const cors = require('cors');


app.use(cors());


const port = 3000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', quizRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
