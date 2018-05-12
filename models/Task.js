const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

taskSchema.method('toId', function() {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

const Task = mongoose.model('Task', taskSchema);

exports.schema = taskSchema;
exports.model = Task;
