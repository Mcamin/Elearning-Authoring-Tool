const mongoose = require('mongoose');

const interactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Interaction'},
  title: String,
  Description: String,
  score: Number,
  shuffle:Boolean,
  questions: [{
    id: String,
    questions: String,
    answers: [],
    correctAnswers:[],
    score: Number,
    feedbacks:[{
      id: String,
      text: String,
      type: String
    }],
  }],
  questionsIndex: Object,
});

module.exports = mongoose.model('Interaction',interactionSchema);
