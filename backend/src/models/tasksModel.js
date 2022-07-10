const connection = require('./database');

const Tasks = {
  async createTask(task, deadline) {
    const query = 'INSERT INTO ToDoList.Tasks (task, deadline) VALUES (?, ?)';
    const [{ insertId }] = await connection.query(query, [task, deadline]);
    return { id: insertId, task, deadline };
  },
  async readTasks() {
    const query = `
      SELECT
        id,
          task,
          DATE_FORMAT(deadline, '%d/%m/%Y') AS deadline
      FROM ToDoList.Tasks;
    `;
    const [data] = await connection.query(query);
    return data;
  },
  async readTaskById(id) {
    const query = `
      SELECT
        id,
          task,
          DATE_FORMAT(deadline, '%Y-%m-%d') AS deadline
      FROM ToDoList.Tasks
      WHERE id = ?;
    `;
    const [data] = await connection.query(query, [id]);
    return data[0];
  },
  async updateTask(id, task, deadline) {
    const query = 'UPDATE ToDoList.Tasks SET task = ?, deadline = ? WHERE id = ?';
    await connection.query(query, [task, deadline, id]);
  },
  async deleteTask(id) {
    const query = 'DELETE FROM ToDoList.Tasks WHERE id = ?';
    await connection.query(query, [id]);
  },
};

module.exports = Tasks;
