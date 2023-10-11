// controller/quizController.js
const Quiz = require('../models/quiz');

const getQuizData = async (req, res) => {
  try {
    const quizData = await Quiz.find({});
    res.json(quizData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getQuizData,
};
