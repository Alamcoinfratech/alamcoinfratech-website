"use client";

import { motion } from "framer-motion";

/* -------------------- */
/* Animation presets    */
/* -------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const sectionFade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
  viewport: { once: true },
});

/* -------------------- */
/* Reusable classes     */
/* -------------------- */

const sectionClass = "bg-gray-900 text-gray-100 py-20 px-6 md:px-16";

const pointClass =
  "relative border border-gray-800 rounded-lg px-4 py-2 bg-gray-900/30 " +
  "border-l-4 border-l-orange-400 border-r-4 border-r-orange-400/40 " +
  "hover:border-orange-400 hover:border-r-orange-400 " +
  "hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.03]";

const hoverPop = {
  whileHover: {
    scale: 1.04,
    y: -4,
    zIndex: 10,
  },
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 18,
  },
};

/* -------------------- */
/* Data                 */
/* -------------------- */

const capacityData = [
  {
    id: "earth-moving",
    title: "Earth Moving & Transport Equipment",
    description:
      "Used for site clearing, leveling, excavation, and material transport.",
    image: "/OurCapacity/generated-image (36).png",
    points: [
      "Excavators",
      "Backhoe loaders",
      "Dump trucks",
      "Wheel loaders",
      "Tippers",
      "Tractor trucks",
    ],
  },
  {
    id: "rcc-machinery",
    title: "Reinforced Concrete Machinery",
    description:
      "Supports high-quality reinforced cement concrete (RCC) works across foundations and structural elements.",
    image: "/OurCapacity/generated-image (37).png",
    points: [
      "Concrete mixers",
      "Concrete vibrators",
      "Concrete pumps",
      "Shuttering systems",
      "Scaffolding systems",
    ],
  },
  {
    id: "light-machinery",
    title: "Light Construction Machinery",
    description:
      "Ensures precision, efficiency, and safety in civil, electrical, and finishing works.",
    image: "/OurCapacity/generated-image (38).png",
    points: [
      "Plate compactors",
      "Generators",
      "Welding machines",
      "Cutting machines",
      "Hand tools",
    ],
  },
];

/* -------------------- */
/* Component            */
/* -------------------- */

export default function OurCapacity() {
  return (
    <section id="capacity" className={sectionClass}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <span className="text-orange-300">Our Capacity</span>
          </h2>
          <p className="mt-2 text-sky-200/90 text-sm sm:text-base">
            Equipment and resources that enable safe, efficient project
            execution
          </p>
        </motion.div>

        {capacityData.map((item, index) => (
          <motion.div
            key={item.id}
            {...sectionFade(index * 0.2)}
            className="mb-24"
          >
            {/* Title */}
            <motion.h3
              {...fadeUp}
              className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-2"
            >
              {item.title}
            </motion.h3>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-sky-200/90 text-[15px] sm:text-base leading-relaxed mb-6"
            >
              {item.description}
            </motion.p>

            {/* Content (LIST +IMAGE) */}
            <div className="grid lg:grid-cols-2 gap-10 mt-6">
              {/* Bullet Points */}
              <motion.ul
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="space-y-2 text-gray-300 leading-relaxed"
              >
                {item.points.map((point, i) => (
                  <li key={i} className={pointClass}>
                    {point}
                  </li>
                ))}
              </motion.ul>

              {/* image section */}
              <motion.div
                {...sectionFade(0.25)}
                {...hoverPop}
                className="relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
