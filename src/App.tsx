import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className='home '>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About</div>} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
