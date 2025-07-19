import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" style={{ padding: "6rem 2rem", minHeight: "80vh", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Hi, I'm Pragathi</h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "#81a2c6" }}>Full Stack Developer</h2>
        <p style={{ maxWidth: 600, margin: "1rem auto", lineHeight: 1.6 }}>
          A passionate and detail-oriented Full Stack Developer with a strong foundation in HTML, CSS,
          JavaScript, and React. Seeking to build dynamic, user-friendly websites and applications.
        </p>
      </motion.div>
    </section>
  );
}
