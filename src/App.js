
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlamePage from './components/BlamePage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blame" element={<BlamePage />} />
      </Routes>
    </div>
  );
}

export default App;
