const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid:{
    type: String,
    required: true
  },
  type: {type: String, default: 'Lesson'},
  title: {
    type: String,
    required: true
  },
  description: String,
  content: String,
  tags: {
    type: Array,
    required: false
  },
  usage: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: false }],

},{ minimize: false,timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);

