import React from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiMysql, SiMongodb, SiCanva,
  SiNpm, SiNetlify, SiAdobexd
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "C", icon: <SiC size={40} color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "HTML", icon: <FaHtml5 size={40} color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#264DE4" /> },
  { name: "JavaScript", icon: <TbBrandJavascript size={40} color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
  { name: "Adobe XD", icon: <SiAdobexd size={40} color="#FF61F6" /> },
  { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={40} color="#181717" /> },
  { name: "VS Code", icon: <VscCode size={40} color="#007ACC" /> },
  { name: "npm", icon: <SiNpm size={40} color="#CB3837" /> },
  { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" /> },
];

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-section {
          background-color: #0f172a;
          padding: 60px 20px;
          color: white;
          text-align: center;
        }
        .skills-heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
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
          background-color: #1e293b;
          padding: 16px;
          border-radius: 10px;
          min-width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background 0.3s;
        }
        .skill-item:hover {
          background-color: #3b82f6;
        }
        .skill-name {
          font-size: 14px;
          font-weight: 500;
          margin-top: 5px;
        }
      `}</style>

      <section className="skills-section">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-scroll-container">
          <div className="skills-list">
            {skills.map(({ name, icon }) => (
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
