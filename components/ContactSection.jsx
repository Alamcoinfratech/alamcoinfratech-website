"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import toast from "react-hot-toast";
import { contactSchema } from "@/lib/contactSchema";

/* -------------------- */
/* Animation presets    */
/* -------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const infoCardMotion = {
  ...fadeUp,
  whileHover: {
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(251, 146, 60, 0.3)",
    borderColor: "rgba(251, 146, 60, 1)",
  },
  whileTap: {
    scale: 0.98,
    boxShadow: "0px 5px 15px rgba(251, 146, 60, 0.25)",
  },
};

/* -------------------- */
/* Reusable classes     */
/* -------------------- */

const infoCardClass =
  "p-5 rounded-xl bg-black/40 border border-gray-800 " +
  "flex items-start gap-4 transition-all duration-300";

const inputClass =
  "w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg " +
  "text-white text-sm placeholder:text-sky-200/50 " +
  "focus:outline-none focus:border-orange-300 transition-colors";

/* -------------------- */
/* Component            */
/* -------------------- */

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error("Failed to send message");
      }

      toast.success(
        "Your message has been sent successfully. We’ll get back to you soon."
      );

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      {...fadeUp}
      className="w-full mt-20 mb-20 scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          <span className="text-orange-300">Contact Us</span>
        </h2>
        <p className="mt-2 text-sky-200/90 text-sm sm:text-base">
          We would love to hear from you
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT — Info */}
        <div className="space-y-6">
          <motion.div {...infoCardMotion} className={infoCardClass}>
            <MapPin className="text-orange-400 w-6 h-6 shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg">Address</h4>
              <p className="text-sky-200/90 text-sm leading-relaxed">
                Plot No - 424, Ruiya Paschim Para,
                <br />
                P.O - Patulia, Khardah,
                <br />
                North 24 Parganas,
                <br />
                West Bengal - 700119, India
              </p>
            </div>
          </motion.div>

          <motion.div {...infoCardMotion} className={infoCardClass}>
            <Phone className="text-orange-400 w-6 h-6 shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg">Phone</h4>
              <a
                href="tel:+919831315832"
                className="text-sky-200/90 text-sm hover:text-orange-300 transition-colors"
              >
                +91 9831315832
              </a>
            </div>
          </motion.div>

          <motion.div {...infoCardMotion} className={infoCardClass}>
            <Mail className="text-orange-400 w-6 h-6 shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg">Email</h4>
              <a
                href="mailto:info@alamco.co.in"
                className="block text-sky-200/90 text-sm hover:text-orange-300"
              >
                info@alamco.co.in
              </a>
              <a
                href="mailto:alamcoinfratech@gmail.com"
                className="block text-sky-200/90 text-sm hover:text-orange-300 mt-1"
              >
                alamcoinfratech@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div {...infoCardMotion} className={infoCardClass}>
            <a
              href="https://www.linkedin.com/in/alamcoinfratech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <FaLinkedinIn className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
              <div>
                <h4 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-sky-200/90 text-sm group-hover:text-sky-100">
                  Connect with us on LinkedIn
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Form */}
        <motion.div
          {...fadeUp}
          className="p-6 sm:p-8 rounded-xl bg-black/40 border border-gray-800"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            <span className="text-orange-300">Send Us a Message</span>
          </h3>
          <p className="text-sky-200/80 text-sm mb-6">
            Fill out the form and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (optional)"
                className={inputClass}
              />
            </div>

            <div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold bg-orange-300 text-black transition-all
                ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-orange-300 cursor-pointer"
                }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        {...fadeUp}
        className="mt-16 w-full h-80 rounded-xl overflow-hidden border border-gray-800"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5221261690535!2d88.38339637385592!3d22.745996726595624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b00179e6537%3A0x113ea4e744bb5beb!2sAlamco%20Infratech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765627487962!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>
    </motion.section>
  );
}
