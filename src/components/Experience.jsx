import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Intern - Web Developer",
    company: "XYZ Tech Solutions",
    duration: "May 2024 – July 2024",
    description:
      "Worked on building internal tools using React and Node.js. Improved app performance and user experience by optimizing frontend logic.",
  },
  {
    title: "Freelance Web Designer",
    company: "Self-employed",
    duration: "Jan 2024 – Mar 2024",
    description:
      "Designed responsive websites for small businesses using HTML, CSS, and JavaScript. Delivered 3+ client projects with 100% satisfaction.",
  },
  // Add more experience items as needed
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", borderBottom: "2px solid #4fc3f7", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          style={{
            backgroundColor: "#142e75",
            padding: "1.5rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>{exp.title}</h3>
          <p style={{ color: "#9ecbff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
            {exp.company} — <em>{exp.duration}</em>
          </p>
          <p style={{ lineHeight: 1.6 }}>{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
