const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid:{type: String, required: true},
  type: {type: String, default: 'Module'},
  title: {
    type: String,
    required: true
  },
  description: String,
  contentIndex:  { type: mongoose.Schema.Types.Mixed, default: {} },
  usage: [{type: mongoose.Schema.Types.ObjectId, ref: 'Parent', required: false}]
},{ minimize: false,timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);

