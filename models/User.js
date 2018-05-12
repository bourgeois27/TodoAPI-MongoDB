const mongoose = require('mongoose');
const Task = require('../models/Task').schema;

const userSchema = new mongoose.Schema({
  tasks: [Task],
});

const User = mongoose.model('User', userSchema);

exports.schema = userSchema;
exports.model = User;
