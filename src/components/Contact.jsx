import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-900 py-20 px-4 text-white overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-sky-400">Let's Talk</h2>
          <form action="https://formspree.io/f/mdkdader" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-2xl bg-slate-700/70 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-2xl bg-slate-700/70 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-2xl bg-slate-700/70 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md"
            >
              📩 Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Contact Info</h2>
          <div className="space-y-4 text-gray-300 mb-6">
            <p className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400 text-xl" />
              <a href="mailto:kodmadpragathi@gmail.com" className="hover:underline text-white">
                kodmadpragathi@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-400 text-xl" />
              Karnataka, India
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3">Let’s connect professionally</h3>
          <p className="text-gray-400 leading-relaxed">
            "Passionate about turning ideas into seamless digital experiences -- let’s build something impactful together!"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
