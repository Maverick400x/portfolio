import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/hero.css"; // Import the CSS

export default function Hero() {
  return (
    <div className="hero-container">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Hi, I'm <span>B. Srinivasa Ranganath</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hero-subtitle"
      >
        Frontend & Full Stack Developer | Data Science Enthusiast
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="hero-buttons"
      >
        <a href="/projects">View Projects</a>
        <a href="/contact">Contact Me</a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hero-socials"
      >
        <a href="https://github.com/Maverick400x" target="_blank" rel="noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/b-srinivasa-ranganath-b3562b329/" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} />
        </a>
      </motion.div>
    </div>
  );
}