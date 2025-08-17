import React from "react";
import { motion } from "framer-motion";
import "../styles/card.css"; // Import the CSS file

export default function Card({ title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}