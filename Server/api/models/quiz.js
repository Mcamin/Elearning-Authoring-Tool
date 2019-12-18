
const mongoose = require('mongoose');
const lessonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: String,
  answers: Object,
  correctAnswers: String,
  Feedback:Object
});

module.exports = mongoose.model('Lesson',lessonSchema);
