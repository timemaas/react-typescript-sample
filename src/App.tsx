import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
