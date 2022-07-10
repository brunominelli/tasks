const TasksService = require('../services/tasksService');

const Tasks = {
  async createTask(request, response) {
    const { task, deadline } = request.body;
    const tasks = await TasksService.createTask(task, deadline);
    response.status(201).json(tasks);
  },
  async readTasks(_request, response) {
    const tasks = await TasksService.readTasks();
    response.status(200).json(tasks);
  },
  async readTaskById(request, response) {
    const { id } = request.params;

    const tasks = await TasksService.readTaskById(Number(id));

    response.status(200).json(tasks);
  },
  async updateTask(request, response) {
    const { id } = request.params;
    const { task, deadline } = request.body;
    const tasks = await TasksService.updateTask(Number(id), task, deadline);
    response.status(200).json(tasks);
  },
  async deleteTask(request, response) {
    const { id } = request.params;
    await TasksService.deleteTask(Number(id));
    response.sendStatus(204);
  },
};

module.exports = Tasks;
