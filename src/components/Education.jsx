import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    color: "bg-gray-800",
    icon: <GraduationCap className="w-7 h-7 text-sky-400" />,
    title: "SDM Institute of Technology, Ujire",
    subtitle: "B.E in Computer Science and Engineering",
    detail: "CGPA: 8.48",
    year: "2022–2026",
  },
  {
    color: "bg-gray-800",
    icon: <School className="w-7 h-7 text-amber-300" />,
    title: "Sri Annapurneshwari PU College, Agalpady",
    subtitle: "PUC in PCMB",
    detail: "Percentage: 88.75%",
    year: "2020–2022",
  },
];

export default function LegoBlockEducation() {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-[#0d1b2a] text-white">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-blue-400">
        Education
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className={`animate-strong-float flex flex-col justify-start w-64 h-64 ${item.color} border border-gray-600 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex justify-between items-center mb-4">
              {item.icon}
              <span className="text-sm font-semibold text-gray-300">
                {item.year}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{item.subtitle}</p>
              <p className="text-sm text-sky-300 mt-2">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stronger Floating Animation */}
      <style jsx>{`
        @keyframes strong-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Increased float height */
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-strong-float {
          animation: strong-float 3s ease-in-out infinite;
        }

        .animate-strong-float:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
