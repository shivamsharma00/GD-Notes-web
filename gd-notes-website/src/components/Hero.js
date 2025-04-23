// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  // Define animation phases for clear sequencing
  useEffect(() => {
    const phases = [
      // Phase 0: Initial delay
      { action: 'delay', duration: 500 },
      
      // Phase 1: Type "Speak"
      { action: 'type', text: 'Speak', duration: 100 },
      
      // Phase 2: Pause
      { action: 'delay', duration: 800 },
      
      // Phase 3: Strike through "Speak"
      { action: 'style', target: 'strike', duration: 10 },
      
      // Phase 4: Pause
      { action: 'delay', duration: 500 },
      
      // Phase 5: Type "Write"
      { action: 'type', text: ' Write', duration: 100 },
      
      // Phase 6: Apply cursive to "Write"
      { action: 'style', target: 'cursive', duration: 10 },
      
      // Phase 7: Pause
      { action: 'delay', duration: 500 },
      
      // Phase 8: Type "your"
      { action: 'type', text: ' your', duration: 100 },
      
      // Phase 9: Pause
      { action: 'delay', duration: 500 },
      
      // Phase 10: Type "mind"
      { action: 'type', text: ' mind', duration: 100 },
      
      // Phase 11: Bold "mind"
      { action: 'style', target: 'bold', duration: 10 },
      
      // Phase 12: Final state, stay here
      { action: 'complete' }
    ];
    
    const currentStep = phases[currentPhase];
    if (!currentStep) return;
    
    let timer;
    
    if (currentStep.action === 'delay') {
      timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
      }, currentStep.duration);
    }
    
    else if (currentStep.action === 'type') {
      let currentText = text;
      let charIndex = 0;
      
      const typeNextChar = () => {
        if (charIndex < currentStep.text.length) {
          currentText += currentStep.text.charAt(charIndex);
          setText(currentText);
          charIndex++;
          timer = setTimeout(typeNextChar, currentStep.duration);
        } else {
          setCurrentPhase(prev => prev + 1);
        }
      };
      
      timer = setTimeout(typeNextChar, 100);
    }
    
    else if (currentStep.action === 'style') {
      // Just move to next phase, CSS will handle the style
      timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
      }, currentStep.duration);
    }
    
    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [currentPhase, text]);
  
  return (
    <div className="typewriter-container">
      <div className="typewriter-text">
        {/* Show "Speak" with strikethrough when phase >= 3 */}
        {text.includes('Speak') && (
          <span className={currentPhase >= 3 ? 'strikethrough' : ''}>
            Speak
          </span>
        )}
        
        {/* Show "Write" with cursive when phase >= 6 */}
        {text.includes('Write') && (
          <span className={currentPhase >= 6 ? 'cursive' : ''}>
            {' Write'}
          </span>
        )}
        
        {/* Show "your" */}
        {text.includes('your') && (
          <span className="normal">
            {' your'}
          </span>
        )}
        
        {/* Show "mind" with bold when phase >= 11 */}
        {text.includes('mind') && (
          <span className={currentPhase >= 11 ? 'bold' : ''}>
            {' mind'}
          </span>
        )}
        
        {/* Cursor */}
        {showCursor && <span className="cursor">|</span>}
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="hero">
    <motion.div
      className="hero__content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Write it.</h1>
      <TypewriterEffect />
      <Link to="/try" className="hero__button">Give it a try →</Link>
    </motion.div>
  </section>
);

export default Hero;