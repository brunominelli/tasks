const { Tasks, sequelize } = require('../database/models');

const TasksService = {
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

    const tasks = await Tasks.create({ task, deadline });
    return tasks;
  },
  async readTasks() {
    const tasks = await Tasks.findAll({
      attributes: {
        include: [
          'deadline',
          [
            sequelize
              .fn(
                'DATE_FORMAT',
                sequelize.col('deadline'),
                '%d/%m/%Y',
              ),
            'deadline',
          ],
        ],
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return tasks;
  },
  async readTaskById(id) {
    const tasks = await Tasks.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!tasks) {
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

    await Tasks.update({ task, deadline }, { where: { id } });
    return { id: Number(id), task, deadline };
  },
  async deleteTask(id) {
    const task = await this.readTaskById(id);
    if (task) await Tasks.destroy({ where: { id } });
  },
};

module.exports = TasksService;
