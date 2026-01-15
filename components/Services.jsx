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

const bannerClass =
  "relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mt-8";

const pointClass =
  "relative border border-gray-800 rounded-lg px-4 py-2 bg-gray-900/30 " +
  "border-l-4 border-l-orange-400 border-r-4 border-r-orange-400/40 " +
  "hover:border-orange-400 hover:border-r-orange-400 " +
  "hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.03]";

const dividerClass = "w-full h-px bg-gray-800/60 mt-16";

/* -------------------- */
/* Data                 */
/* -------------------- */

const servicesData = [
  {
    id: "civil-engineering",
    title: "Civil Engineering Structures & Road Construction",
    description:
      "We execute major civil and road infrastructure projects with precision, safety, and reliable engineering practices.",
    banner:
      "/Services/Civil Engineering Structures Road Construction/generated-image (17).png",
    points: [
      "Steel structure erection",
      "Reinforced concrete structures (RCC)",
      "Road construction in:",
      "Gravel",
      "Paver blocks",
      "Concrete (RCC)",
      "Bitumen / Asphalt",
      "Associated drainage structures",
      "Culverts and retaining walls",
    ],
    gallery: [
      "/Services/Civil Engineering Structures Road Construction/generated-image (18).png",
      "/Services/Civil Engineering Structures Road Construction/generated-image (19).png",
    ],
  },
  {
    id: "electrical-installation",
    title: "Electrical Installation & Substation Works",
    description:
      "We deliver complete electrical installation works for power substations and industrial projects, ensuring safety, reliability, and engineering accuracy.",
    banner:
      "/Services/Electrical Installation Substation Works/generated-image (35).png",
    points: [
      "LT cable laying & termination",
      "Cable tray installation",
      "Substation earthing system works",
      "Transformer installation support",
      "Switchgear & control panel installation support",
      "Internal building electrification",
      "Testing & commissioning support",
    ],
    gallery: [
      "/Services/Electrical Installation Substation Works/generated-image (21).png",
      "/Services/Electrical Installation Substation Works/generated-image (22).png",
    ],
  },
  {
    id: "substation-transmission",
    title: "Power Substation & Transmission Line Civil Works",
    description:
      "We execute complete civil infrastructure works required for substations and transmission lines, ensuring structural integrity and long-term reliability.",
    banner:
      "/Services/Power Substation Transmission Line Civil Works/generated-image (23).png",
    points: [
      "Earthworks & land development",
      "Transformer & outdoor equipment foundations",
      "Oil pits & containment pits",
      "Cable trenches",
      "Control building civil works",
      "Fencing & boundary walls",
      "Drainage construction",
      "Substation internal roads",
      "Substation access roads",
      "Transmission line foundation works",
    ],
    gallery: [
      "/Services/Power Substation Transmission Line Civil Works/generated-image (24).png",
      "/Services/Power Substation Transmission Line Civil Works/generated-image (25).png",
    ],
  },
  {
    id: "construction-management",
    title: "Construction Project Management",
    description:
      "We provide end-to-end project management ensuring timely delivery, cost efficiency, quality control, and complete documentation support.",
    banner:
      "/Services/Construction Project Management/generated-image (32).png",
    points: [
      "Project planning & scheduling",
      "Contract & documentation management",
      "Construction supervision",
      "Quality control & safety monitoring",
      "Site inspections & reporting",
    ],
    gallery: [
      "/Services/Construction Project Management/generated-image (33).png",
      "/Services/Construction Project Management/generated-image (34).png",
    ],
  },
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "We deliver high-quality residential, commercial, and institutional buildings with strong engineering standards and durable construction practices.",
    banner: "/Services/Building Construction/generated-image (29).png",
    points: [
      "High-rise residential buildings",
      "Low-rise residential buildings",
      "Commercial buildings",
      "Institutional buildings",
      "General building & structural works",
    ],
    gallery: [
      "/Services/Building Construction/generated-image (30).png",
      "/Services/Building Construction/generated-image (31).png",
    ],
  },
];

/* -------------------- */
/* Component            */
/* -------------------- */

export default function Services() {
  return (
    <section id="services" className={sectionClass}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <span className="text-orange-300">Our Services</span>
          </h2>
          <p className="mt-2 text-sky-200/90 text-sm sm:text-base">
            Services that we Offer
          </p>
        </motion.div>

        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            {...sectionFade(index * 0.2)}
            whileHover={{ scale: 1.01 }}
            className="mb-28"
          >
            {/* Title */}
            <motion.h3
              {...fadeUp}
              className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-2"
            >
              {service.title}
            </motion.h3>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-sky-200/90 text-[15px] sm:text-base leading-relaxed mb-4"
            >
              {service.description}
            </motion.p>

            {/* Banner */}
            <div className={bannerClass}>
              <img
                src={service.banner}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-10 mt-6 sm:mt-8">
              {/* Points */}
              <motion.ul
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="space-y-2 text-gray-300 leading-relaxed"
              >
                {service.points.map((point, i) => (
                  <li key={i} className={pointClass}>
                    {point}
                  </li>
                ))}
              </motion.ul>

              {/* Gallery */}
              <div className="grid gap-6">
                {service.gallery.map((src, i) => (
                  <motion.div
                    key={i}
                    {...sectionFade(0.2 + i * 0.1)}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={dividerClass} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

