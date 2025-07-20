import React, { useState } from "react";
import {
  FaNodeJs, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiMysql, SiMongodb, SiCanva, SiNpm, SiNetlify, SiAdobexd
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";

const tools = [
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
  { name: "Adobe XD", icon: <SiAdobexd size={40} color="#FF61F6" /> },
  { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
  { name: "GitHub", icon: <FaGithub size={40} color="#ffffff" /> },
  { name: "VS Code", icon: <VscCode size={40} color="#007ACC" /> },
  { name: "npm", icon: <SiNpm size={40} color="#CB3837" /> },
  { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" /> },
  {
    name: "Vercel", icon: (
      <svg width="40" height="40" viewBox="0 0 256 256" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 32L256 224H0L128 32Z" />
      </svg>
    )
  },
  {
    name: "ServiceNow", icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#0C8A96" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" fontSize="10" textAnchor="middle" fill="white">Now</text>
      </svg>
    )
  }
];

const skillPercents = [
  { name: "HTML", value: 95, color: "#E44D26" },
  { name: "CSS", value: 90, color: "#264DE4" },
  { name: "JavaScript", value: 80, color: "#F7DF1E" },
  { name: "React.js", value: 85, color: "#61DBFB" },
  { name: "C", value: 75, color: "#A8B9CC" },
  { name: "C++", value: 70, color: "#00599C" },
  { name: "Java", value: 65, color: "#f89820" },
  { name: "Python", value: 85, color: "#3776AB" },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <>
      <style>{`
        .skills-section {
          background-color: #1e293b; /* Tailwind's bg-slate-800 */
          padding: 60px 20px;
          color: white;
          text-align: center;
        }

        .skills-heading {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .circular-skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 30px;
          justify-items: center;
          padding-bottom: 50px;
        }

        .circular-skill {
          width: 80px;
          height: 80px;
        }

        .circular-skill-label {
          margin-top: 10px;
          font-weight: 500;
          font-size: 14px;
        }

        .skills-scroll-container {
          overflow-x: auto;
          white-space: nowrap;
          padding: 10px;
        }

        .skills-list {
          display: inline-flex;
          gap: 20px;
          padding: 10px;
        }

        .skill-item {
          background-color: rgba(255, 255, 255, 0.05);
          border: 3px solid #000000;
          padding: 16px;
          border-radius: 12px;
          min-width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .skill-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .skill-name {
          font-size: 14px;
          font-weight: 500;
          margin-top: 5px;
        }
      `}</style>

      <section id="skills" className="skills-section" ref={ref}>
        <h2 className="skills-heading">My Skills</h2>

        <div className="circular-skill-grid">
          {skillPercents.map(({ name, value, color }) => (
            <div key={name} className="circular-skill">
              <CircularProgressbar
                value={hasAnimated ? value : 0}
                text={`${hasAnimated ? value : 0}%`}
                styles={buildStyles({
                  pathColor: color,
                  textColor: "#ffffff",
                  trailColor: "#334155",
                  textSize: "22px",
                  pathTransitionDuration: 1.4
                })}
              />
              <div className="circular-skill-label">{name}</div>
            </div>
          ))}
        </div>

        <div style={{ height: "30px" }}></div>

        <h2 className="skills-heading">Tools & Technologies</h2>
        <div className="skills-scroll-container">
          <div className="skills-list">
            {tools.map(({ name, icon }) => (
              <div className="skill-item" key={name}>
                {icon}
                <p className="skill-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
