import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { title: "Languages", desc: "Python, JavaScript, TypeScript" },
    { title: "Frontend", desc: "HTML, CSS, React.js, Tailwind CSS, Bootstrap" },
    { title: "Backend", desc: "Node.js, Express.js" },
    { title: "Databases", desc: "MongoDB, SQL" },
    { title: "Tools", desc: "Git, GitHub, VS Code, Postman" },
    { title: "Soft Skills", desc: "Problem-Solving, Team Collaboration, Time Management, Communication" },
  ];

  return (
    <div className="skills-container">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="skills-heading"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Card key={i} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
}