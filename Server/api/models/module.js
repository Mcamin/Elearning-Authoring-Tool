const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Module'},
  title: {
    type: String,
    required: true
  },
  description: String,
  contentIndex: {
    type: Map,
    of: mongoose.Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model('Module', moduleSchema);

