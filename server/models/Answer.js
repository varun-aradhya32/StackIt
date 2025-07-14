// models/Answer.js
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
