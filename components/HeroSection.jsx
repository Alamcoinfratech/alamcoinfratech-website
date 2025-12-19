"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const heroImages = [
  {
    src: "Herosection/generated-image-6.png",
    alt: "Project 1",
    title: "Engineering Construction with Precision & Integrity",
    subtitle: "Delivering Reliable Solutions for Power, Roads & Buildings",
  },
  {
    src: "Herosection/generated-image-2.png",
    alt: "Project 2",
    title: "Building the Future of Infrastructure",
    subtitle: "Creating Sustainable and Modern Engineering Projects",
  },
  {
    src: "Herosection/generated-image-16.png",
    alt: "Project 3",
    title: "Safety, Quality & Excellence in Every Project",
    subtitle: "We Build with Care, Commitment, and Craftsmanship",
  },
  {
    src: "Herosection/generated-image-4.png",
    alt: "Project 4",
    title: "Your Trusted Partner in Civil & Structural Engineering",
    subtitle: "From Power Substations to Modern Infrastructure",
  },
  {
    src: "Herosection/generated-image-5.png",
    alt: "Project 5",
    title: "Innovation that Builds the Nation",
    subtitle: "Smart, Affordable & Sustainable Construction Solutions",
  },
];

// ✅ Centralized reusable classes
const slideContainerClass =
  "w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] relative overflow-hidden";

const overlayClass = "absolute inset-0 bg-black/40";

const contentWrapperClass =
  "absolute inset-0 flex flex-col items-center justify-center text-center px-4";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-900 pb-px">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        speed={1200}
        slidesPerView={1}
        loop
        spaceBetween={1}
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className={slideContainerClass}>
              {/* Background Image */}
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                className="w-full h-full object-cover animate-zoomSlow"
              />

              {/* Overlay */}
              <div className={overlayClass} />

              {/* Text Content */}
              <div className={contentWrapperClass}>
                <h1 className="opacity-0 text-3xl sm:text-5xl md:text-6xl font-bold text-orange-300 drop-shadow-[3px_3px_8px_rgba(0,0,0,0.8)] animate-fadeInUp">
                  {img.title}
                </h1>
                <p className="mt-3 opacity-0 text-lg sm:text-2xl text-sky-200 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)] animate-fadeInUp animation-delay-500">
                  {img.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
