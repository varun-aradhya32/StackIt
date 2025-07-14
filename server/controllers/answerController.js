const Answer = require('../models/Answer');
const Question = require('../models/Question');

// Controller to post an answer
const postAnswer = async (req, res) => {
  const { content, questionId } = req.body;

  if (!content || !questionId) {
    return res.status(400).json({ message: 'Content and Question ID are required' });
  }

  try {
    const answer = await Answer.create({
      content,
      user: req.user._id,
      question: questionId,
    });

    await Question.findByIdAndUpdate(questionId, { $push: { answers: answer._id } });

    res.status(201).json(answer);
  } catch (error) {
    console.error('Error posting answer:', error);
    res.status(500).json({ message: 'Error posting answer' });
  }
};

// Controller to vote on an answer
const voteAnswer = async (req, res) => {
  try {
    const { voteType } = req.body;
    const answer = await Answer.findById(req.params.id);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }

    if (voteType === 'upvote') {
      answer.upvotes++;
    } else if (voteType === 'downvote') {
      answer.downvotes++;
    } else {
      return res.status(400).json({ message: 'Invalid vote type' });
    }

    await answer.save();
    await answer.populate('user', 'username');
    res.json(answer);
  } catch (error) {
    console.error('Vote error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { postAnswer, voteAnswer };
