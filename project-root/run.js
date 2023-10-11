const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = 3000;

mongoose.connect('mongodb://0.0.0.0:27017/MetaGrowth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const quizSchema = new mongoose.Schema({
  question: String,
  index: Number,
  answers: {
    options: [String],
    weightage: [Number],
    answertype: Number,
  },
});

// Specify the collection name explicitly as "Quiz"
const Quiz = mongoose.model('Quiz', quizSchema, 'Quiz');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/quiz', async (req, res) => {
  try {
    const quizData = await Quiz.find({});
    res.json(quizData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
