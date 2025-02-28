// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
