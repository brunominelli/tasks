const Tasks = {
  async createTasks(task, deadline) {
    const endpoint = 'http://localhost:3001/tasks';
    const headers = {
      method: 'POST',
      headers:{ "Content-Type": 'application/json'},
      body: JSON.stringify({ task, deadline }),
      mode: 'cors',
    };
    await fetch(endpoint, headers);
  },
  async readTasks() {
    const endpoint = 'http://localhost:3001/tasks';
    const response = await fetch(endpoint, { method: 'GET' });
    const data = await response.json();
    return data;
  },
  async readTaskById(id) {
    const endpoint = `http://localhost:3001/tasks/${id}`;
    const response = await fetch(endpoint, { method: 'GET' });
    const data = await response.json();
    return data;
  },
  async updateTasks(id, task, deadline) {
    const endpoint = `http://localhost:3001/tasks/${id}`;
    const headers = {
      method: 'PUT',
      headers:{ "Content-Type": 'application/json'},
      body: JSON.stringify({ task, deadline }),
      mode: 'cors',
    };
    const response = await fetch(endpoint, headers);
    const data = await response.json()
    return data;
  },
  async deleteTasks(id) {
    const endpoint = `http://localhost:3001/tasks/${id}`;
    const headers = {
      method: 'DELETE',
      headers:{ "Content-Type": 'application/json'},
      mode: 'cors',
    };
    await fetch(endpoint, headers);
  },
};

export default Tasks;
