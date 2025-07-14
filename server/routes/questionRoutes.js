const express = require('express');
const router = express.Router();
const {
  postQuestion,
  getAllQuestions,
  getQuestionById,
} = require('../controllers/questionController');

const protect = require('../middleware/authMiddleware');

// Routes
router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.post('/', protect, postQuestion);

module.exports = router;
