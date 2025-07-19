import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "2px solid #4fc3f7", paddingBottom: "0.5rem", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ lineHeight: 1.6 }}>
          I am a passionate and detail-oriented Full Stack Developer with a strong foundation in HTML, CSS,
          JavaScript, and React. I enjoy building responsive, clean user interfaces and efficient backend
          systems, continuously learning and contributing to innovative web projects.
        </p>
      </motion.div>
    </section>
  );
}
