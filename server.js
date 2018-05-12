const express = require('express');
const bodyParser = require('body-parser');
const tasks = require('./routes/tasks');

const app = express();

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Welcome to Lab 10 API');
});

/* Pour un nouvel utilisateur */
app.post('/users', tasks.createNewUserId);

/* Pour les GET requests */
app.get('/:userId/tasks', tasks.findAll);

/* Pour les POST requests */
app.post('/:userId/tasks', jsonParser, tasks.addTask);

/* Pour les PUT requests */
app.put('/:userId/tasks/:taskId', jsonParser, tasks.editTaskWithId);

/* Pout les DELETE requests */
app.delete('/:userId/tasks/:taskId', tasks.deleteTaskWithId);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
