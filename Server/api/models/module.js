const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Module'},
  title: {
    type: String,
    required: true
  },
  description: String,
  contentIndex: [{type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: false}],
  usage: [{type: mongoose.Schema.Types.ObjectId, ref: 'Parent', required: false}]
});

module.exports = mongoose.model('Module', moduleSchema);

