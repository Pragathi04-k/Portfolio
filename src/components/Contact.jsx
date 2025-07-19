import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // URL to your resume PDF — you can replace it with your actual hosted resume link or add resume.pdf in public folder
  const resumeUrl = "/Pragathi_Kodmad_Resume.pdf";

  return (
    <section id="contact" style={{ padding: "4rem 2rem", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "2px solid #4fc3f7", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Contact Me</h2>
        <p style={{ marginBottom: "1rem" }}>
          Feel free to reach out for opportunities, collaborations, or just to say hi!
        </p>
        <p style={{ fontWeight: "600" }}>Email: <a href="mailto:kodmadpragathi@gmail.com" style={{ color: "#4fc3f7" }}>kodmadpragathi@gmail.com</a></p>
        <p style={{ fontWeight: "600" }}>Phone: <a href="tel:+917907110676" style={{ color: "#4fc3f7" }}>+91 7907110676</a></p>

        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href={resumeUrl}
            download
            style={{
              padding: "0.7rem 1.2rem",
              backgroundColor: "#4fc3f7",
              color: "#0b1e4d",
              fontWeight: "700",
              borderRadius: "25px",
              textDecoration: "none",
              boxShadow: "0 4px 10px rgba(79,195,247,0.7)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = "#82ccf6")}
            onMouseLeave={e => (e.target.style.backgroundColor = "#4fc3f7")}
          >
            Download Resume
          </a>

          <a
            href="mailto:kodmadpragathi@gmail.com?subject=Hiring%20Inquiry"
            style={{
              padding: "0.7rem 1.2rem",
              backgroundColor: "#1b3b8a",
              color: "#4fc3f7",
              fontWeight: "700",
              borderRadius: "25px",
              textDecoration: "none",
              border: "2px solid #4fc3f7",
              boxShadow: "0 4px 10px rgba(79,195,247,0.5)",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#4fc3f7";
              e.target.style.color = "#0b1e4d";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#1b3b8a";
              e.target.style.color = "#4fc3f7";
            }}
          >
            Hire Me
          </a>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <a href="https://github.com/Pragathi04-k" target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", marginRight: "1rem" }}>GitHub</a>
          <a href="http://www.linkedin.com/in/pragathi-kodmad" target="_blank" rel="noreferrer" style={{ color: "#4fc3f7" }}>LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}
