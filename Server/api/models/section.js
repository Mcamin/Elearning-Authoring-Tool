const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Section'},
  title: {
    type: String,
    required: true
  },
  description: String,
  modulesIndex: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: false }],
  usage:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: false }]
});

module.exports = mongoose.model('Section', sectionSchema);

