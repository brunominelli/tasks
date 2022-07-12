import React from 'react';
import TasksProvider from './store/provider/tasks';
import AppRoutes from './store/routes';

function App() {
  return (
    <TasksProvider>
      <AppRoutes />
    </TasksProvider>
  );
}

export default App;
