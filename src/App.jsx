import React from 'react';
import RotatingText from './RotatingText';
import './App.css';

function App() {
  const words = ['solutions', 'apps', 'websites', 'AI agents', 'AI automations'];

  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <h1 className="main-title">
            nobs.<RotatingText
              texts={words}
              mainClassName="text-teal-color"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
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