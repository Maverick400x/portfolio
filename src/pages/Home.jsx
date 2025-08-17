import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/home.css";
import ProfilePic from "../assets/profile.svg"; // Import the SVG

export default function IntroPage() {
  const cards = [
    {
      title: "Experience",
      desc: "Frontend Developer – Built BookNest, a full-featured online bookstore with user authentication, REST APIs, and MongoDB backend.",
    },
    {
      title: "Projects",
      desc: "Github User Finder, Weather App, Hyperspectral Image Classification, Discord Music Bot for Medical Therapy.",
    },
    {
      title: "Skills",
      desc: "JavaScript, React, Node.js, Express.js, MongoDB, SQL, Python, Problem-Solving, Team Collaboration.",
    },
  ];

  return (
    <div className="home-container">

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Profile Picture */}
        <img
          src={ProfilePic}
          alt="Profile"
          className="profile-pic"
        />

        <h1 className="home-heading">B. Srinivasa Ranganath</h1>
        <p className="home-subtext">Institute of Aeronautical Engineering</p>
        <p className="home-subtext">B.Tech, Computer Science Engineering (2020 - 2024)</p>
        <p className="home-role">Frontend & Full Stack Developer</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="social-icons"
      >
        <a
          href="https://github.com/Maverick400x"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/b-srinivasa-ranganath-b3562b329/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://leetcode.com/u/uInn4XILyH/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode size={28} />
        </a>
      </motion.div>

      {/* Highlights / Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="cards-container"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card"
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="cta-buttons"
      >
        <a
          href="mailto:ranganathsrinivasa95@gmail.com"
          className="cta-button"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="cta-button resume-button"
        >
          View My Resume
        </a>
      </motion.div>
    </div>
  );
}