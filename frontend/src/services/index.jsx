const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_VERSION = import.meta.env.VITE_API_VERSION;
const API_TASKS = import.meta.env.VITE_API_TASKS;

const Tasks = {
  async createTasks(task, deadline) {
    const endpoint = `${API_ENDPOINT}${API_VERSION}${API_TASKS}`;
    const headers = {
      method: 'POST',
      headers:{ "Content-Type": 'application/json'},
      body: JSON.stringify({ task, deadline }),
      mode: 'cors',
    };
    await fetch(endpoint, headers);
  },
  async readTasks() {
    const endpoint = `${API_ENDPOINT}${API_VERSION}${API_TASKS}`;
    const response = await fetch(endpoint, { method: 'GET' });
    const data = await response.json();
    return data;
  },
  async readTaskById(id) {
    const endpoint = `${API_ENDPOINT}${API_VERSION}${API_TASKS}${id}`;
    const response = await fetch(endpoint, { method: 'GET' });
    const data = await response.json();
    return data;
  },
  async updateTasks(id, task, deadline) {
    const endpoint = `${API_ENDPOINT}${API_VERSION}${API_TASKS}${id}`;
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
    const endpoint = `${API_ENDPOINT}${API_VERSION}${API_TASKS}${id}`;
    const headers = {
      method: 'DELETE',
      headers:{ "Content-Type": 'application/json'},
      mode: 'cors',
    };
    await fetch(endpoint, headers);
  },
};

export default Tasks;
