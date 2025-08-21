import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="contact-heading"
            >
                Get in Touch
            </motion.h2>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="social-icons"
            >
                <a href="mailto:ranganathsrinivasa95@gmail.com">
                    <FaEnvelope size={26} />
                </a>
                <a href="https://github.com/Maverick400x" target="_blank" rel="noreferrer">
                    <FaGithub size={26} />
                </a>
                <a
                    href="https://www.linkedin.com/in/b-srinivasa-ranganath-b3562b329/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin size={26} />
                </a>
            </motion.div>
        </div>
    );
}