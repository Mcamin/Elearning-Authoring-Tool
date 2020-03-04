const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid:{type: String, required: true},
  type: {type: String, default: 'Section'},
  title: {
    type: String,
    required: true
  },
  description: String,
  modulesIndex:  { type: mongoose.Schema.Types.Mixed, default: {} },
  usage:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: false }]
},{ minimize: false,timestamps: true });

module.exports = mongoose.model('Section', sectionSchema);

