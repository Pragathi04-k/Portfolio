import React from "react";
import { motion } from "framer-motion";

// Project images
import excelImage from "../assets/excel.png";
import testImage from "../assets/test-assessment.png";
import itineraryImage from "../assets/itinerary-planner.png";
import blogImage from "../assets/blog.png";

// Certification logos
import udemyLogo from "../assets/udemy.png";
import codlabLogo from "../assets/codelab.png";
import tcsLogo from "../assets/tcs.png";
import infosysLogo from "../assets/infosys.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1 },
  }),
};

// Project Data
const projects = [
  {
    name: "Excel-Analyzer",
    duration: "May 2025 – June 2025",
    description:
      "Developed as a full stack project during an internship, this web-based tool allows users to upload Excel files, automatically clean and process the data, and generate visual charts to highlight key insights.",
    github: "https://github.com/Pragathi04-k/Excel-Analyzer",
    image: excelImage,
    skills: ["React.js", "Node.js", "Express", "CSS", "Chart.js", "MongoDB"],
  },
  {
    name: "Test-Assessment",
    duration: "Dec 2024 – Jan 2025",
    description:
      "Developed a web-based test assessment portal, streamlining online testing by 70% through dynamic question delivery, real-time scoring, and responsive UI.",
    github: "https://github.com/Pragathi04-k/Internship-Project",
    image: testImage,
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "MYSQL"],
  },
  {
    name: "Itinerary-Planner",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Created a travel app simplifying trip planning by 80%, optimizing destinations, activities, timings, and budgets.",
    github: "https://github.com/Pragathi04-k/Itinerary-Planner",
    image: itineraryImage,
    skills: ["HTML", "CSS", "JavaScript", "Responsive UI", "Bootstrap"],
  },
  {
    name: "Blog-App",
    duration: "June 2025 – July 2025",
    description:
      "A dynamic blog application that allows users to create, read, update, and delete blog posts. Built with modern web technologies to manage and display content efficiently.",
    github: "https://github.com/Pragathi04-k/Blog-app",
    image: blogImage, 
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
];

// Certification Data with Logos
const certifications = [
  {
    name: "The Complete Web Development Bootcamp – Udemy",
    link: "https://drive.google.com/file/d/1hitkUGJGfROiBe-xIITtjL2esnOJGMRg/view?usp=sharing",
    logo: udemyLogo,
  },
  {
    name: "React Workshop – Codlab Systems",
    link: "https://drive.google.com/file/d/1uClw35Q5moK8q0fimiFnsGl4FPbpwBmy/view?usp=sharing",
    logo: codlabLogo,
  },
  {
    name: "TCS iON Career Edge – Young Professional Course",
    link: "https://drive.google.com/file/d/13sEYOrcZd3qH0LYuXGyBYQdU7nWjfFwE/view?usp=sharing",
    logo: tcsLogo,
  },
  {
    name: "Database and SQL Course – Infosys Springboard",
    link: "https://drive.google.com/file/d/1ySw8q0SHGFosfU-OFtpV2sQ3GWPKiqsO/view?usp=sharing",
    logo: infosysLogo,
  },
];

export default function Projects() {
  return (
    <>
      {/* --- Projects Section --- */}
      <section id="projects" className="py-16 bg-slate-800 text-white">
        <div className="px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold border-b-2 border-sky-400 pb-2 mb-10 text-center">
            Projects
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {projects.map(({ name, duration, description, github, image, skills }, idx) => (
              <motion.a
                href={github}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(0, 255, 255, 0.25)",
                }}
                className="block bg-black/20 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300"
              >
                <div className="bg-black/10 p-4 border-b border-gray-700 text-center">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-sm text-gray-300">{duration}</p>
                </div>

                <div className="flex flex-col md:flex-row bg-black/10">
                  <div className="md:w-1/3 p-4 flex items-center justify-center border-r border-gray-700 overflow-hidden">
                    <motion.img
                      src={image}
                      alt={name}
                      className="w-full h-60 object-cover rounded-lg shadow-md border-4 border-gray-700 transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-center md:w-2/3">
                    <p className="text-sm text-gray-300 mb-4">{description}</p>
                    <div className="mb-4">
                      <ul className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <motion.li
                            key={skill}
                            custom={i}
                            variants={skillVariants}
                            className="bg-gray-600 text-sm px-3 py-1 rounded-full text-gray-100"
                          >
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">
                      View Source →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Certifications Section --- */}
      <section id="certifications" className="py-16 bg-slate-800 text-white">
        <div className="px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Certifications
            <div className="mx-auto mt-3 h-1 w-[185px] bg-blue-400 rounded"></div>
          </h2>

          <ul className="grid gap-6 sm:grid-cols-1">
            {certifications.map(({ name, link, logo }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 60 }}
                className="flex items-center gap-4 bg-black/30 backdrop-blur-sm border border-gray-700 p-5 rounded-xl hover:border-sky-400 transition-all"
              >
                {/* Logo in circular frame */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-300 overflow-hidden">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Certificate name */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline text-lg font-medium"
                >
                  {name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
