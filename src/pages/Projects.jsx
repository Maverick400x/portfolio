import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css"; // Import the CSS

export default function Projects() {
    const projects = [
        {
            title: "Flash Connect",
            period: "Jul 2025 - Present",
            desc: "FlashConnect is a social networking application designed to enable users to connect with other professionals, manage their connections, and communicate through messages.",
            github: "",
            live: "",
            ongoing: true,
            lagging: "message distribution",
            tags: ["Frontend", "Backend", "Social Networking"],
            phases: [
                { name: "Phase 2: Messaging System", eta: "Aug 2025", completed: false },
            ],
        },
        {
            title: "Book Nest",
            period: "March 2025 – Present",
            desc: "Full-featured online bookstore with authentication, search, shopping cart, and REST APIs using Node.js, Express.js, and MongoDB. Deployed on Render.",
            github: "https://github.com/Maverick400x/BookNest",
            live: "https://book-nest-wgrp.onrender.com",
            ongoing: true,
            lagging: "Payment Gateway - razorpay",
            tags: ["Fullstack", "MongoDB", "Node.js", "E-commerce"],
            phases: [
                { name: "Phase 1: Core Store Features", eta: "Jul 2025", completed: true },
                { name: "Phase 2: Payment Integration", eta: "Sep 2025", completed: false },
            ],
        },
        {
            title: "Github User Finder",
            period: "Jan 2025 – Feb 2025",
            desc: "Web app to search GitHub profiles and view avatar, bio, followers, following, and repositories. Built with JavaScript and GitHub API.",
            github: "https://github.com/Maverick400x/Github-user-id-finder",
            live: "https://maverick400x.github.io/Github-user-id-finder/",
            tags: ["Frontend", "API Integration"],
        },
        {
            title: "Weather Application",
            period: "Feb 2025 – Mar 2025",
            desc: "Weather forecast app using OpenWeather API with real-time updates. Built with JavaScript & API integration.",
            github: "https://github.com/Maverick400x/Weather-Application",
            live: "https://weather-application-three-liard.vercel.app/",
            tags: ["Frontend", "API Integration"],
        },
        {
            title: "Reinforcement learning-based hyperspectral image classification",
            period: "Nov 2023 – Mar 2024",
            desc: "Reinforcement learning-based hyperspectral image classification for remote sensing using Python, TensorFlow, NumPy, and SciKit-Learn.",
            github: "https://github.com/MAVERICK400x/Reinforcement-learning-based-Hyperspectral-Image-Classification-using-binary-entropy-method",
            live: "",
            document: "https://www.ijfmr.com/papers/2024/2/18303.pdf",
            tags: ["Machine Learning", "Python", "TensorFlow"],
        },
        {
            title: "Discord Music Bot (Therapy)",
            period: "Dec 2022 – Mar 2023",
            desc: "Music bot integrated with Discord API & YouTube API for therapeutic music streaming in servers. Built with React.js, Node.js, and Discord.js.",
            github: "https://github.com/Maverick400x",
            live: "",
            tags: ["Backend", "Discord.js", "API Integration"],
        },
    ];

    const ongoingProjects = projects.filter((p) => p.ongoing);
    const completedProjects = projects.filter((p) => !p.ongoing);

    return (
        <div className="projects-container">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="projects-heading"
            >
                Projects
            </motion.h2>

            {/* Ongoing Projects */}
            {ongoingProjects.length > 0 && (
                <>
                    <h3 className="projects-subheading">Ongoing Projects</h3>
                    <div className="projects-grid">
                        {ongoingProjects.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="project-card"
                            >
                                <div className="project-badges">
                                    <span className="project-ongoing">Ongoing</span>
                                    {p.lagging && (
                                        <span className="project-lagging">
                                            Working: {p.lagging}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3>{p.title}</h3>
                                    <p className="project-period">{p.period}</p>
                                    <p>{p.desc}</p>
                                </div>

                                {/* Tags */}
                                {p.tags && (
                                    <div className="project-tags">
                                        {p.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Phases */}
                                {p.phases && (
                                    <div className="project-phase">
                                        {p.phases.map((phase, idx) => (
                                            <div
                                                key={idx}
                                                className={`phase-step ${
                                                    phase.completed
                                                        ? "phase-completed"
                                                        : "phase-pending"
                                                }`}
                                            >
                                                {phase.name} — {phase.eta}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="project-links">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link live-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

            {/* Completed Projects */}
            {completedProjects.length > 0 && (
                <>
                    <h3 className="projects-subheading">Completed Projects</h3>
                    <div className="projects-grid">
                        {completedProjects.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="project-card"
                            >
                                <div>
                                    <h3>{p.title}</h3>
                                    <p className="project-period">{p.period}</p>
                                    <p>{p.desc}</p>
                                </div>

                                {/* Tags */}
                                {p.tags && (
                                    <div className="project-tags">
                                        {p.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-links">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link live-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {p.document && (
                                        <a
                                            href={p.document}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link live-link"
                                        >
                                            View Document
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}