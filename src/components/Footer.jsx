import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex justify-start">
          <div>
            <h1 className="text-xl font-bold text-white mb-2">
              <span className="text-sky-400">&lt;</span>
              Pragathi
              <span className="text-sky-400">/&gt;</span>
            </h1>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex gap-6 text-2xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/pragathi-kodmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/kodmadpragathi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            
            <a
              href="https://leetcode.com/u/GGhPGNtcdN/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              aria-label="Portfolio"
            >
              <FaCode />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex justify-end">
          <p className="text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Pragathi. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
