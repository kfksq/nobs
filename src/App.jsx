import React from 'react';
import RotatingText from './RotatingText';
import './App.css';

function App() {
  const words = ['solutions', 'apps', 'websites', 'agents', 'automations'];

  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <h1 className="main-title">
            nobs.
            <RotatingText
              texts={words}
              mainClassName="text-teal-color inline-animation"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden inline-block"
              elementLevelClassName="inline-block"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
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