const Question = require('../models/Question');

const postQuestion = async (req, res) => {
  const { title, description, tags } = req.body;
  try {
    const question = await Question.create({
      title,
      description,
      tags,
      user: req.user._id, // store user ID (make sure req.user is populated)
    });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error posting question' });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate('user', 'username')  // populate username from user
      .populate({
        path: 'answers',
        populate: { path: 'user', select: 'username' },
      });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate('user', 'username')
      .populate({
        path: 'answers',
        populate: { path: 'user', select: 'username' },
      });
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question' });
  }
};

module.exports = { postQuestion, getAllQuestions, getQuestionById };
