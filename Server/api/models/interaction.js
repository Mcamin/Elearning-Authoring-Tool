const mongoose = require('mongoose');

const interactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid: String,
  type: {type: String, default: 'Interaction'},
  title: String,
  description: String,
  score: Number,
  shuffle:Boolean,
  questions: [{
    question_id: String,
    questionText: String,
    questionType: String,
    answers: [],
     score: Number,
    /* feedbacks:[{
       id: String,
       text: String,
       type: String
     }],*/
  }],
  tokens: { type: mongoose.Schema.Types.Mixed, default: {} },
  usage:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: false }]
},{timestamps: true });

module.exports = mongoose.model('Interaction',interactionSchema);
