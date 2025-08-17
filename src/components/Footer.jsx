import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/footer.css"; // Import CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} B. Srinivasa Ranganath | All Rights Reserved
        </p>

        <p className="footer-tagline">
          Frontend & Full Stack Developer | Always learning & building
        </p>
      </div>
    </footer>
  );
}