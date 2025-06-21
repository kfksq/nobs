import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import './App.css';

function App() {
  const words = ['solutions', 'apps', 'websites', 'AI agents', 'AI automations'];

  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <h1 className="main-title">
            nobs.<ReactRotatingText 
              items={words} 
              pause={2000}
              emptyPause={500}
              typingInterval={100}
              deletingInterval={50}
              color="#4fd1c7"
              cursor={true}
            />
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