import React from "react";
import { motion } from "framer-motion";
import {FaCode, FaMedal } from "react-icons/fa";

const awards = [
  {
    title: "Fusion-Techathon 3.0",
    description:
      "Awarded 2nd place in a 24-hour National Level Hackathon organized by the Department of AI & ML at Alva’s Institute of Engineering and Technology.",
    icon: <FaCode className="text-4xl text-yellow-400" />,
    link: "https://drive.google.com/file/d/10jLX0uCWm1f62VDXa_5FviBuKwEzWMZ5/view?usp=sharing", 
  },
  {
    title: "Infothon 4.0",
    description:
      "Secured 4th place in a National Level Hackathon hosted by the Dept. of Information Science at Vidyavardhaka College of Engineering, Mysore.",
    icon: <FaCode className="text-4xl text-green-300" />,
    link: "https://drive.google.com/file/d/1rRF-bqSeJXtrx_nS8KLKcxzPNuKELggo/view?usp=sharing", 
  },
  {
    title: 'VTU "INTERACT-2025"',
    description:
      "Won 1st place in Classical Dance (Solo) at VTU 24th State Level Youth Festival held at Global Academy of Technology, Bangalore.",
    icon: <FaMedal className="text-4xl text-pink-400" />,
    link: "https://drive.google.com/file/d/1SFHF5gDWamKDz0ltNeVM3tpSgavEbti6/view?usp=sharing", 
  },
];
export default function HonorsAwards() {
  return (
    <section id="honors" className="bg-slate-900/80 px-6 pt-10 pb-16">
      <div className="text-center mb-10">
  <h2 className="text-3xl font-semibold text-white mb-2 inline-block relative">
    Honors and Awards
    <span className="block h-1 bg-blue-400 rounded mt-1 w-full"></span>
  </h2>
</div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-6 text-center text-white shadow-md border border-white/20 backdrop-blur-sm transition duration-300 hover:shadow-yellow-200"
          >
            <div className="mb-4 flex justify-center">{award.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
            <p className="text-sm mb-3">{award.description}</p>
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-400 text-sm"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
