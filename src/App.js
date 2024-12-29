import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import React, {
  Component
} from 'react';
import './App.css';

import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
