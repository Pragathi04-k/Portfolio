import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Profile.jpg"; 

export default function Home() {
  return (
    <section
      id="home"
      style={{
        padding: "6rem 2rem",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: "1 1 300px", textAlign: "center", maxWidth: "600px" }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Hi, I'm Pragathi</h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "#81a2c6" }}>Full Stack Developer</h2>
        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
          A passionate and detail-oriented Full Stack Developer with a strong foundation in HTML, CSS,
          JavaScript, and React. Seeking to build dynamic, user-friendly websites and applications.
        </p>
      </motion.div>

      {/* Circular Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #14b8a6", // Teal border
          flexShrink: 0,
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </section>
  );
}
