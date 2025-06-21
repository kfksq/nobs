import React from 'react';
import RotatingText from './RotatingText';
import './App.css';

function App() {
  const words = ['Solutions', 'Apps', 'Websites', 'AI Agents'];

  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <h1 className="main-title">
            nobs.<RotatingText words={words} interval={2500} />
          </h1>
          <p className="subtitle">
            coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

export default App; 