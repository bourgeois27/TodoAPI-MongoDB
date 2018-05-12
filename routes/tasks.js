// importer les models pour User et pour Task
const User = require('../models/User').model;
const Task = require('../models/Task').model;

// connexion à la base de données
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo')
  .then(() => {
    console.log('MongoDB connected');
    const db = mongoose.connection;
  })
  .catch(err => console.log(err));

/* Add a new user to DB */
exports.createNewUserId = (req, res) => {
  const user = new User();
  user.save((err, newUser) => {
    if (err) {
      res.send(err);
    } if (res) {
      res.send({ id: newUser._id });
    }
  });
};

/* GET all tasks for a user in DB */
exports.findAll = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      const data = [];
      user.tasks.forEach((task) => {
        data.push(task.toId());
      });
      res.send({ tasks: data });
    })
    .catch(err => res.status(400).send(err));
};

/* POST a task for a user in DB */
exports.addTask = (req, res) => {
  const task = new Task({ name: req.body.name });
  User.findById(req.params.userId)
    .then((user) => {
      user.tasks.push(task);
      return user.save();
    })
    .then(() => {
      res.send({ id: task._id, name: task.name });
    })
    .catch(err => res.status(400).send(err));
};

/* PUT a task for a user in DB */
exports.editTaskWithId = (req, res) => {  
  User.findById(req.params.userId)
    .then((user) => {
      const task = user.tasks.id(req.params.taskId);
      task.name = req.body.name;
      return user.save();
    })
    .then(() => {
      res.send({ id: req.params.taskId, name: req.body.name });
    })
    .catch(err => res.status(400).send(err));
};

/* DELETE a task for a user in DB */
exports.deleteTaskWithId = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      user.tasks.id(req.params.taskId).remove();
      return user.save();
    })
    .then(() => {
      res.send('Task deleted successfully');
    })
    .catch(err => res.status(400).send(err));
  };
