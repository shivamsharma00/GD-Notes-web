import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TetrisGrid.css';

const items = [
  { id: 1, title: "Multi-Tab Note Organization", desc: "Seamlessly manage multiple notes at once. Each tab is its own workspace, perfect for organizing thoughts, tasks, or projects—just like browser tabs, but for your mind.", width: 1, height: 1, color: "#4c49c2" },
  { id: 2, title: "Floating Windows for Focused Work", desc: "Open notes in separate windows to multitask like a pro. Great for writers, developers, and thinkers who juggle multiple ideas.", width: 2, height: 1, color: "#2a2d8a" },
  { id: 3, title: "Rich Text Formatting", desc: "Add structure and flair with bold, italic, bullet lists, and more. Your notes don’t have to be plain—they can be powerful.", width: 1, height: 2, color: "#5d7bf3" },
  { id: 4, title: "Auto-Save & Persistent Storage", desc: "Never lose a note again. Every word is auto-saved and stored securely on your system, even when you close the app.", width: 1, height: 1, color: "#3b5dc9" },
  { id: 5, title: "Lightweight, Fast, and Cross-Platform", desc: "Built on Electron, optimized for Mac and Windows. Launches in seconds, runs like a feather, and doesn’t eat your RAM.", width: 1, height: 1, color: "#2a2d8a" },
  { id: 6, title: "Cross-device Sync", desc: "Use the app on your laptop, tablet, or phone.", width: 2, height: 1, color: "#4c49c2" },
  { id: 7, title: "Dark Mode Ready", desc: "Your eyes matter. Switch between light and dark themes for a comfortable writing experience, day or night.", width: 1, height: 2, color: "#5d7bf3" },
  ];

// Array of possible animation effects
const animationVariants = [
  {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  {
    initial: { opacity: 0, y: 100, rotateZ: -5 },
    animate: { opacity: 1, y: 0, rotateZ: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }
];

const TetrisGrid = () => {
  // Shuffle the items array to make them appear in random order
  const shuffledItems = [...items].sort(() => 0.5 - Math.random());
  
  return (
    <section className="tetris-section" id="features">
      <h2>Feature Highlights</h2>
      <div className="tetris-grid">
        {shuffledItems.map((item, index) => {
          // Pick a random animation variant for each item
          const randomVariant = animationVariants[Math.floor(Math.random() * animationVariants.length)];
          
          return (
            <motion.div
              key={item.id}
              className="tetris-box"
              style={{ 
                gridColumn: `span ${item.width}`,
                gridRow: `span ${item.height}`,
                backgroundColor: item.color
              }}
              initial={randomVariant.initial}
              whileInView={randomVariant.animate}
              transition={{ 
                ...randomVariant.transition,
                delay: (index % 3) * 0.2 // Group delays to create staggered effect
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TetrisGrid;