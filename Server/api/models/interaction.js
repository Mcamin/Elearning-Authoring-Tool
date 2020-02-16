const mongoose = require('mongoose');

const interactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  questions: Array,
  questionIndex: Object,

  question: String,
  answers: Object,
  correctAnswers: String,
  Feedback:Object
});

module.exports = mongoose.model('Interaction',interactionSchema);
