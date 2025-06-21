import React, { useState, useEffect } from 'react';
import './RotatingText.css';

const RotatingText = ({ words, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 400); // Half of transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="rotating-text-container">
      <span 
        className={`rotating-text ${isVisible ? 'visible' : 'hidden'}`}
        key={currentIndex}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingText; 