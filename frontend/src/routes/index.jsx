import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/task/:id" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
