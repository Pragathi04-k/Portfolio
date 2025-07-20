import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaLeaf } from "react-icons/fa";
import arts from "../assets/arts.png"; 
const activities = [
  {
    title: "Youth Red Cross Volunteer",
    description:
      "Promoted health awareness and organized blood donation drives with active community engagement.",
    icon: <FaHandHoldingHeart className="text-4xl text-red-400" />,
  },
  {
    title: "Indian Cultural Arts Performer",
    description:
      "Passionate performer of classical dance and admirer of Indian classical music, blending rhythm, expression, and tradition.",
    icon: (
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md">
        <img
          src={arts}
          alt="Indian Art Icon"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/64"; // fallback
          }}
        />
      </div>
    ),
  },
  {
    title: "NSS Volunteer",
    description:
      "Actively involved in community service, social awareness programs, and environment-friendly campaigns.",
    icon: <FaLeaf className="text-4xl text-green-300" />,
  },
];

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="bg-slate-900/80 px-6 pt-12 pb-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white inline-block border-b-4 border-blue-400 pb-1">
          Extracurricular Activities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-6 text-center text-white shadow-md border border-white/20 backdrop-blur-sm transition duration-300 hover:shadow-yellow-100"
          >
            <div className="mb-4 flex justify-center">{activity.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
            <p className="text-sm">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
