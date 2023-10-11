// models/quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: String,
  index: Number,
  answers: {
    options: [String],
    weightage: [Number],
    answertype: Number,
  },
});

module.exports = mongoose.model('Quiz', quizSchema, 'Quiz');
