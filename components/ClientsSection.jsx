"use client";

import { motion } from "framer-motion";

/* -------------------- */
/* Data                 */
/* -------------------- */

const clientsData = [
  {
    id: 1,
    name: "Power Grid Corporation of India",
    logo: "/clients/powergrid.png",
    alt: "Power Grid India Logo",
  },
  {
    id: 2,
    name: "Crescent Foundry",
    logo: "/clients/crescent-foundry.png",
    alt: "Crescent Foundry Logo",
  },
  {
    id: 3,
    name: "Syama Prasad Mookerjee Port",
    logo: "/clients/smp.png",
    alt: "Syama Prasad Mookerjee Port Logo",
  },
  {
    id: 4,
    name: "Titagarh Rail System Limited (TRSL)",
    logo: "/clients/titagarh.png",
    alt: "Titagarh Company Logo",
  },
  {
    id: 5,
    name: "National Forgings",
    logo: "/clients/national-forgings.jpg",
    alt: "National Forgings Logo",
  },
  {
    id: 6,
    name: "BMN Alloy Steels Private Limited",
    logo: "/clients/bmn-alloy.jpg",
    alt: "BMN Alloy Steels Logo",
  },
  {
    id: 7,
    name: "Hindustan Engineering Industries (HEI)",
    logo: "/clients/hei.png",
    alt: "HEI Engineering Logo",
  },
];

/* -------------------- */
/* Animation presets    */
/* -------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* -------------------- */
/* Reusable classes     */
/* -------------------- */

const logoWrapperClass =
  "relative group flex flex-col justify-center items-center p-5 sm:p-6";

const logoImgClass =
  "w-full h-20 sm:h-24 object-contain relative z-10 " +
  "transition-all duration-500 ease-[0.16,1,0.3,1] " +
  "lg:group-hover:opacity-0";

const mobileNameClass =
  "mt-3 text-center text-[13px] sm:text-sm font-medium text-sky-200/90 " +
  "tracking-wide block lg:hidden border-b border-sky-300/40 pb-1 w-fit mx-auto";

const desktopHoverWrapperClass =
  "hidden lg:flex absolute inset-0 items-center justify-center z-20 " +
  "opacity-0 group-hover:opacity-100 transition-all duration-300";

const desktopHoverTextClass =
  "text-sky-200 text-lg font-semibold opacity-0 group-hover:opacity-100 " +
  "transition-opacity duration-500 " +
  "drop-shadow-[0_0_10px_rgba(251,146,60,0.45)]";

/* -------------------- */
/* Component            */
/* -------------------- */

export default function ClientsSection() {
  return (
    <motion.section
      id="clients"
      {...fadeUp}
      className="w-full mt-20 mb-20 scroll-mt-28"
    >
      {/* Section Heading */}
      <motion.div {...fadeUp} className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          <span className="text-orange-300">Our Clients</span>
        </h2>
        <p className="mt-2 text-sky-200/90 text-sm sm:text-base">
          Some of the organizations we work with
        </p>
      </motion.div>

      {/* Logo Grid */}
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {clientsData.map((client) => (
          <motion.div
            key={client.id}
            variants={childVariant}
            className={logoWrapperClass}
          >
            {/* Logo */}
            <img src={client.logo} alt={client.alt} className={logoImgClass} />

            {/* Mobile Name */}
            <p className={mobileNameClass}>{client.name}</p>

            {/* Desktop Hover Name */}
            <motion.div className={desktopHoverWrapperClass}>
              <motion.span
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={desktopHoverTextClass}
              >
                {client.name}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
