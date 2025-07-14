const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],  // if you track answers here
}, {
  timestamps: true,
});

module.exports = mongoose.model('Question', questionSchema);
