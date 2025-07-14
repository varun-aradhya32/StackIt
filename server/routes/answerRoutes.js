const express = require('express');
const { postAnswer, voteAnswer } = require('../controllers/answerController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// POST route to submit an answer
router.post('/answer', protect, postAnswer);

// POST route to vote on an answer
router.post('/:id/vote', protect, voteAnswer);

module.exports = router;
