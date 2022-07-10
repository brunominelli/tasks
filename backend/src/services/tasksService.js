const TasksModel = require('../models/tasksModel');

const Tasks = {
  async createTask(task, deadline) {
    if (!task) {
      const error = new Error('"Task" is required!');
      error.code = 400;
      throw error;
    }

    if (!deadline) {
      const error = new Error('"Deadline" is required!');
      error.code = 400;
      throw error;
    }

    const tasks = await TasksModel.createTask(task, deadline);
    return tasks;
  },
  async readTasks() {
    const tasks = await TasksModel.readTasks();
    return tasks;
  },
  async readTaskById(id) {
    const tasks = await TasksModel.readTaskById(id);
    const condition = !id || id <= 0 || !tasks;

    if (condition) {
      const error = new Error('Task not found!');
      error.code = 404;
      throw error;
    }

    return tasks;
  },
  async updateTask(id, task, deadline) {
    await this.readTaskById(id);

    if (!task) {
      const error = new Error('"Task" is required!');
      error.code = 400;
      throw error;
    }

    if (!deadline) {
      const error = new Error('"Deadline" is required!');
      error.code = 400;
      throw error;
    }

    await TasksModel.updateTask(id, task, deadline);
    return { id: Number(id), task, deadline };
  },
  async deleteTask(id) {
    const task = await this.readTaskById(id);
    if (task) await TasksModel.deleteTask(id);
  },
};

module.exports = Tasks;
