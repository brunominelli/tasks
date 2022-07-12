import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TasksContext from '../context/tasks';
import Tasks from '../../services';

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  async function getTasks() {
    const tasks = await Tasks.readTasks();
    setTasks(tasks);
  }

  async function createTasks() {
    await Tasks.createTasks(task, deadline);
    setTask('');
    setDeadline('');
  }

  async function readTaskById(id) {
    const { task, deadline } = await Tasks.readTaskById(id);
    setTask(task);
    setDeadline(deadline);
  }

  async function updateTasks(id) {
    await Tasks.updateTasks(id, task, deadline);
    setTask('');
    setDeadline('');
  }

  async function deleteTasks(id) {
    await Tasks.deleteTasks(id);
    setTask('');
    setDeadline('');
  }

  const tasksValue = {
    task,
    setTask,
    deadline,
    setDeadline,
    tasks,
    getTasks,
    createTasks,
    readTaskById,
    updateTasks,
    deleteTasks,
  };

  return (
    <TasksContext.Provider value={ tasksValue }>
      { children }
    </TasksContext.Provider>
  )
}

TasksProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default TasksProvider