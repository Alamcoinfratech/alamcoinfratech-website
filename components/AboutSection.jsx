"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
 
// --------------------
// Animation presets
// --------------------
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

const cardAnimation = (delay) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true },
});

// --------------------
// Card content
// --------------------
const aboutCards = [
  {
    title: "Our Mission",
    desc: "To build high-quality and cost-effective infrastructure projects through engineering excellence, innovation, and professional integrity — contributing to national growth and sustainable development.",
    Icon: Target,
    delay: 0.2,
  },
  {
    title: "Our Vision",
    desc: "To be recognized as one of India’s leading infrastructure development companies — known for quality, reliability, and sustainable engineering practices that shape the nation’s future.",
    Icon: Eye,
    delay: 0.3,
  },
  {
    title: "Our Values",
    desc: "We believe in maintaining the highest standard of professionalism, integrity, creativity, and a positive attitude — ensuring timely delivery that meets and surpasses expectations while offering prompt, lasting solutions that stand the test of time.",
    Icon: Gem,
    delay: 0.4,
  },
];

// --------------------
// Reusable classes
// --------------------
const sectionClass =
  "relative bg-gray-900 text-gray-100 px-6 md:px-16 overflow-hidden scroll-mt-24 pt-16 pb-24 sm:pt-20 sm:pb-28";

const cardClass =
  "group bg-linear-to-b from-gray-900/60 to-gray-950/60 p-6 rounded-xl border border-gray-800 hover:border-orange-400 transition-all duration-300 cursor-pointer text-center";

export default function AboutSection() {
  return (
    <section id="about" className={sectionClass}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          {...fadeUp}
          className="text-3xl sm:text-4xl font-bold text-orange-300 mb-6"
        >
          About{" "}
          <span className="text-orange-300">Alamco Infratech Pvt. Ltd.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="text-[17px] sm:text-lg leading-relaxed font-light tracking-wide text-gray-300/90 max-w-3xl mx-auto mb-12 text-pretty"
        >
          <span className="text-gray-200/90 font-medium">
            Alamco Infratech Pvt. Ltd.
          </span>{" "}
          is a company founded in{" "}
          <span className="text-orange-300 font-semibold">2024</span>.
          Specialized in execution, project management, and design of
          large-scale civil, structural, and electrical works across India. We
          are committed to delivering{" "}
          <span className="text-orange-200 font-medium">
            innovative, reliable, and sustainable
          </span>{" "}
          infrastructure solutions with a strong focus on{" "}
          <span className="text-orange-300 font-semibold">quality, safety</span>{" "}
          and{" "}
          <span className="text-orange-300 font-semibold">
            client satisfaction
          </span>
          .
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aboutCards.map(({ title, desc, Icon, delay }, index) => (
            <motion.div
              key={index}
              {...cardAnimation(delay)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(251, 146, 60, 0.3)",
                borderColor: "rgba(251, 146, 60, 1)",
              }}
              whileTap={{
                scale: 0.98,
                boxShadow: "0px 5px 15px rgba(251, 146, 60, 0.25)",
              }}
              className={cardClass}
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-orange-400 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
              </div>

              <h3 className="text-xl font-semibold text-orange-300 mb-3 transition-colors duration-300 group-hover:text-orange-400">
                {title}
              </h3>

              <p className="text-[15px] sm:text-[16px] leading-relaxed font-light tracking-wide text-gray-300/90 group-hover:text-gray-100 transition-all duration-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
