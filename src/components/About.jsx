import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-blue-900/10 px-6 pt-6 pb-16 rounded-t-[4rem] rounded-b-[4rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-200/40 px-10 md:px-20 py-12 rounded-[3rem] shadow-md max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-semibold border-b-2 border-sky-400 pb-2 mb-4 text-gray-800 text-center">
          About Me
        </h2>
        <p className="leading-relaxed text-white -800 text-base text-center">
          I am a passionate and detail-oriented Full Stack Developer with a strong foundation in HTML, CSS,
          JavaScript, and React. I enjoy building responsive, clean user interfaces and efficient backend
          systems, continuously learning and contributing to innovative web projects.
        </p>
      </motion.div>
    </section>
  );
}
