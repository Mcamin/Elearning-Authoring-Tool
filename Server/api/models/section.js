const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Section'},
  title: {
    type: String,
    required: true
  },
  description: String,
  modulesIndex: {
    type: Map,
    of: mongoose.Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model('Section', sectionSchema);

