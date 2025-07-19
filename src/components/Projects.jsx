import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Test-Assessment",
    duration: "Dec 2024 – Jan 2025",
    description: "Developed a web-based test assessment portal, streamlining online testing by 70% through dynamic question delivery, real-time scoring, and responsive UI using HTML, CSS, and JavaScript.",
    github: "https://github.com/Pragathi04-k/Internship-Project",
  },
  {
    name: "Itinerary-Planner",
    duration: "Oct 2024 – Dec 2024",
    description: "Created a travel app simplifying trip planning by 80%, optimizing destinations, activities, timings, and budgets.",
    github: "https://github.com/Pragathi04-k/Itinerary-Planner",
  },
  {
    name: "Excel-Analyzer",
    duration: "May 2025 – July 2025",
    description: "Full stack project enabling users to upload Excel files, clean/process data, and generate charts for insights, improving manual analysis and user understanding.",
    github: "https://github.com/Pragathi04-k/Excel-Analyzer",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", borderBottom: "2px solid #4fc3f7", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Projects</h2>
      {projects.map(({ name, duration, description, github }, idx) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.3, duration: 0.6 }}
          style={{ backgroundColor: "#142e75", padding: "1.5rem", borderRadius: 8, marginBottom: "1rem" }}
        >
          <h3 style={{ marginBottom: "0.25rem" }}>{name} <span style={{ fontWeight: "400", fontSize: "0.9rem", color: "#81a2c6" }}>({duration})</span></h3>
          <p style={{ marginBottom: "0.5rem" }}>{description}</p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#4fc3f7",
              textDecoration: "none",
              fontWeight: "600",
              transition: "color 0.3s",
            }}
            onMouseEnter={e => (e.target.style.color = "#82ccf6")}
            onMouseLeave={e => (e.target.style.color = "#4fc3f7")}
          >
            View Source &rarr;
          </a>
        </motion.div>
      ))}
    </section>
  );
}
