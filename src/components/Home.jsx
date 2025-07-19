import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/Profile.jpg";

const sentence =
  "Open to Opportunities✨ MERN Stack⚛️ Indian Classical Arts Enthusiast🪷";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Home() {
  return (
    <section
      id="home"
      className="px-6 pt-10 pb-10 bg-blue flex flex-col md:flex-row items-start"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl text-left ml-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white font-times">
          Hi, I'm Pragathi
        </h1>
        <h2 className="text-2xl font-semibold text-sky-400 mb-2">
          Full Stack Developer
        </h2>

        {/* Animated One-Line Sentence */}
        <motion.div
          className="text-sm md:text-base font-medium text-white mt-4 mb-4 whitespace-nowrap overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-2 text-gray-200">
          <a
            href="http://www.linkedin.com/in/pragathi-kodmad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/pragathikodmad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500 animate-glow mt-19  mx-auto"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
