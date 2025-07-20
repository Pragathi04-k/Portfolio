import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 px-6 pt-6 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black/40 px-10 md:px-20 py-12 rounded-2xl shadow-md max-w-5xl mx-auto border border-white/10"
      >
        <h2 className="text-3xl font-semibold border-b-2 border-sky-400 pb-2 mb-6 text-white text-center">
          About Me
        </h2>
        <p className="leading-relaxed text-white text-base text-center">
          I am a passionate and detail-oriented <strong>Full Stack Developer</strong> with a solid foundation in
          <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. Seeking to apply technical skills in building dynamic, user-friendly
          websites and applications while continuously learning and contributing to innovative web
          development projects. I enjoy creating responsive, clean user interfaces and efficient backend systems. <br /><br />
          Beyond coding, I bring a creative mindset, strong collaboration skills, and a continuous hunger for learning.
          I'm deeply inspired by Indian classical arts, which influence my sense of rhythm,
          structure, and design. I thrive on contributing to meaningful projects that blend technology and creativity.
        </p>
      </motion.div>
    </section>
  );
}
