import React from 'react';
import RotatingText from './RotatingText';
import './App.css';

function App() {
  const words = ['Innovative', 'Creative', 'Professional', 'Strategic', 'Dynamic'];

  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <h1 className="main-title">
            We are <RotatingText words={words} interval={2500} />
          </h1>
          <p className="subtitle">
            Building exceptional digital experiences
          </p>
        </div>
      </div>
    </div>
  );
}

export default App; 