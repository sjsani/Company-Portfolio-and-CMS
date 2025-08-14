"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

interface Props {
  hero: {
    heroTitle: string;
    heroDescription: string;
    callToAction: string;
    imageUrl: string;
  };
  site: {
    siteTitle: string;
    logoUrl: string;
  };
}

export default function HomeHeroNav({ hero, site }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-colors duration-750 ${
          scrolled
            ? "bg-black shadow-lg" // solid when scrolled
            : "" // transparent at top
        }`}
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={site.logoUrl}
            alt="Logo"
            width={60}
            height={40}
            className="w-12 sm:w-[70px] h-auto"
          />
          <span className="text-2xl sm:text-4xl text-white font-semibold">
            {site.siteTitle}
          </span>
        </Link>

        <div className="hidden md:flex text-white space-x-6 text-sm md:text-base">
          {["Home", "About", "Testimonials", "Services", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition duration-300 hover:text-blue-400
                           after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 
                           after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="h-screen relative flex items-center justify-center text-center w-full overflow-hidden">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Particle Background */}
          <div className="absolute inset-0 z-0">
            <ParticleBackground imageUrl={hero.imageUrl} />
            {/* Gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
            

          </div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 max-w-3xl px-2 mx-auto flex flex-col justify-center h-full"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              {hero.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              {hero.heroDescription}
            </p>
            <a
              href="#contact"
              className="text-white inline-block px-4 sm:px-6 py-2 sm:py-3 
                         bg-blue-600 rounded font-medium hover:bg-blue-700 transition"
            >
              {hero.callToAction}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
