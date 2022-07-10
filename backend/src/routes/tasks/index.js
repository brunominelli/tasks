const express = require('express');

const route = express.Router();

const {
  createTask,
  readTasks,
  readTaskById,
  updateTask,
  deleteTask,
} = require('../../controllers/tasksController');

route.post('/', createTask);
route.get('/:id', readTaskById);
route.get('/', readTasks);
route.put('/:id', updateTask);
route.delete('/:id', deleteTask);

module.exports = route;
