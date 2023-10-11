// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/quiz', quizController.getQuizData);

module.exports = router;
