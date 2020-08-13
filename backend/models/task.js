const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = Schema({
  value: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
