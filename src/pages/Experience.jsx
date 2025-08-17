import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import "../styles/experience.css";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer – Freelance",
      period: "March 2025 – August 2025",
      desc: "Developed BookNest, a full-featured online bookstore with user authentication, REST APIs, and MongoDB backend. Deployed on Render with GitHub CI/CD."
    },
    {
      title: "Full Stack Web Development Training",
      period: "Sep 2024 – June 2025",
      desc: "Completed comprehensive training at Coding Ninjas covering Frontend, Backend, Databases, and Generative AI."
    }
  ];

  return (
    <div className="experience-container">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="experience-heading"
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <Card
            key={i}
            title={exp.title}
            desc={`${exp.period}\n${exp.desc}`}
          />
        ))}
      </div>
    </div>
  );
}