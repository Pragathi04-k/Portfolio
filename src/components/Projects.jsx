import React from "react";
import { motion } from "framer-motion";

// Import images from src/assets
import excelImage from "../assets/excel.png";
import testImage from "../assets/test-assessment.png";
import itineraryImage from "../assets/itinerary-planner.png";

const projects = [
  {
    name: "Excel-Analyzer",
    duration: "May 2025 – July 2025",
    description:
      "Developed as a full stack project during an internship, this web-based tool allows users to upload Excel files, automatically clean and process the data, and generate visual charts to highlight key insights. The project streamlined manual data analysis and improved user understanding through a responsive and user-friendly interface.",
    github: "https://github.com/Pragathi04-k/Excel-Analyzer",
    image: excelImage,
    skills: ["React.js", "Node.js", "Express", "CSS", "Chart.js"],
  },
  {
    name: "Test-Assessment",
    duration: "Dec 2024 – Jan 2025",
    description:
      "Developed a web-based test assessment portal, streamlining online testing by 70% through dynamic question delivery, real-time scoring, and responsive UI using HTML, CSS, and JavaScript.",
    github: "https://github.com/Pragathi04-k/Internship-Project",
    image: testImage,
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Forms"],
  },
  {
    name: "Itinerary-Planner",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Created a travel app simplifying trip planning by 80%, optimizing destinations, activities, timings, and budgets.",
    github: "https://github.com/Pragathi04-k/Itinerary-Planner",
    image: itineraryImage,
    skills: ["JavaScript", "Planning Algorithms", "Responsive UI", "Bootstrap"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-sky-400 pb-2 mb-10 text-center text-white">
        Projects
      </h2>
      <div className="space-y-10">
        {projects.map(({ name, duration, description, github, image, skills }, idx) => (
          <motion.a
            href={github}
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="block bg-[#142e75] rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {/* Title Section */}
            <div className="bg-[#0d1c45] p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white text-center">
                {name}
              </h3>
              <p className="text-sm text-blue-200 text-center">{duration}</p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row">
              {/* Image Box */}
              <div className="md:w-1/3 p-4 bg-[#0b1a3d] flex items-center justify-center border-r border-gray-700">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Description Box */}
              <div className="p-6 text-white flex flex-col justify-center md:w-2/3">
                <p className="text-sm text-blue-100 mb-4">{description}</p>

                <div className="mb-4">
                  <h4 className="text-sm text-sky-300 font-semibold mb-1">
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-sky-800 text-sm px-3 py-1 rounded-full text-sky-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">
                  View Source &rarr;
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
