import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    duration: "May 2025 – July 2025",
    location: "Bangalore, Karnataka",
    description:
      "Developed dynamic web applications using React.js and Node.js, improving site performance by 30%, and optimized database queries in MongoDB, reducing load times by 25%. Built features like Excel file upload, automated data cleaning, and interactive chart generation to visualize insights.",
    techStack: ["React.js", "Node.js", "MongoDB", "Excel", "DataViz","TeamWork"],
  },
  {
    title: "Web Development Intern",
    company: "Aitch Nu Global Technologies Pvt.Ltd",
    duration: "Dec 2024 - Jan 2025",
    location: "Bangalore, Karnataka",
    description:
      "Developed dynamic web applications using HTML, CSS, JavaScript, and Node.js, improving site performance by 30%. Optimized MySQL database queries, reducing load times by 25%. Designed interactive dashboards, UI components, and responsive layouts.",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "4rem 2rem",
        maxWidth: 900,
        margin: "0 auto",
        color: "white",
      }}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          @keyframes shineBorder {
            0% {
              box-shadow: 0 0 0 transparent;
            }
            50% {
              box-shadow: 0 0 10px #3da9fc, 0 0 20px #3da9fc55;
            }
            100% {
              box-shadow: 0 0 0 transparent;
            }
          }

          .experience-card {
            background-color: rgba(26, 29, 35, 0.5);
            border: 1px solid black;
            border-radius: 12px;
            padding: 1.5rem 1.8rem;
            margin-bottom: 2rem;
            position: relative;
            animation: float 4s ease-in-out infinite;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
          }

          .experience-card:hover {
            transform: translateY(-6px) scale(1.01);
            border: 1px solid #3da9fc;
            animation: shineBorder 1.5s ease-in-out;
          }

          .experience-title {
            font-size: 1.2rem;
            font-weight: bold;
          }

          .experience-company {
            color: #61dafb;
            margin-bottom: 0.8rem;
            display: block;
            font-weight: 500;
          }

          .experience-duration {
            position: absolute;
            top: 1rem;
            right: 1.2rem;
            background-color: #2e323c;
            color: #a0bcd8;
            font-size: 0.85rem;
            padding: 0.3rem 0.7rem;
            border-radius: 6px;
          }

          .experience-location {
            font-size: 0.85rem;
            font-weight: 500;
            color: #bcdcff;
            margin-top: 0.3rem;
            margin-bottom: 0.8rem;
          }

          .experience-description {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #cbd5e1;
            margin-bottom: 1rem;
          }

          .badge-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .badge {
            background-color: #2c3e50;
            color: #b2d7ff;
            font-size: 0.75rem;
            padding: 0.3rem 0.7rem;
            border-radius: 9999px;
          }
        `}
      </style>

      <h2
        style={{
          fontSize: "2rem",
          borderBottom: "2px solid #4fc3f7",
          paddingBottom: "0.5rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
        >
          <div className="experience-duration">{exp.duration}</div>
          <h3 className="experience-title">{exp.title}</h3>
          <span className="experience-company">{exp.company}</span>
          <div className="experience-location">{exp.location}</div>
          <p className="experience-description">{exp.description}</p>
          <div className="badge-container">
            {exp.techStack.map((tech, index) => (
              <span key={index} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
