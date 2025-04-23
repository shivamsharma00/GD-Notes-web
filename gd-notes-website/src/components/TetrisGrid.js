import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import '../styles/TetrisGrid.css';

const items = [
  { id: 1, title: "Quick Notes", desc: "Create and save notes instantly with keyboard shortcuts.", height: 2 },
  { id: 2, title: "Markdown Support", desc: "Write using markdown and preview it live.", height: 1 },
  { id: 3, title: "Auto Save", desc: "Your notes are auto-saved in real time.", height: 2 },
  { id: 4, title: "Tags & Folders", desc: "Organize your notes with ease.", height: 1 },
  { id: 5, title: "Search Feature", desc: "Find anything with lightning-fast search.", height: 1 },
  { id: 6, title: "Cross-device Sync", desc: "Use the app on your laptop, tablet, or phone.", height: 2 },
  { id: 7, title: "Dark Mode", desc: "Toggle between light and dark themes.", height: 1 },
  { id: 8, title: "Export Notes", desc: "Download notes in PDF or text format.", height: 2 },
];

const TetrisGrid = () => {
  return (
    <section className="tetris-section" id="demo">
      <div className="tetris-grid">
        {items.map(item => (
          <motion.div
            key={item.id}
            className="tetris-box"
            style={{ gridRowEnd: `span ${item.height}` }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: item.id * 0.05 }}
            viewport={{ once: true }}
          >
            <FiCheckCircle className="tetris-box__icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TetrisGrid;