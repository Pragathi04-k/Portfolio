import React from "react";
import { motion } from "framer-motion";

const skills = [
  "C", "C++", "Python",
  "HTML", "CSS", "JavaScript", "React.js", "Node.js",
  "MySQL", "MongoDB",
  "Figma", "Adobe XD", "Canva", "Wireframing", "Prototyping", "Design Thinking",
  "Git", "GitHub",
  "VS Code", "npm", "Netlify"
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", borderBottom: "2px solid #4fc3f7", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Technical Skills</h2>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", listStyle: "none", paddingLeft: 0 }}
      >
        {skills.map(skill => (
          <li
            key={skill}
            style={{
              backgroundColor: "#1b3b8a",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontWeight: "600",
              fontSize: "0.9rem",
              cursor: "default",
              userSelect: "none",
              color: "#cce6ff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4fc3f7"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1b3b8a"}
          >
            {skill}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
