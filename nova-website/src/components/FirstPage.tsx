"use client";

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
  return (
    <>
      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black fixed w-full z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-opacity-80"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={site.logoUrl}
            alt="Logo"
            width={60}
            height={40}
            className="w-12 sm:w-[70px] h-auto"
          />
          <span className="text-2xl sm:text-4xl text-white">
            {site.siteTitle}
          </span>
        </Link>

        <div className="hidden md:flex text-white space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </motion.nav>
      {/* <ParticleBackground imageUrl={hero.imageUrl}/> */}
      
      <section className="h-screen relative flex items-center justify-center text-center  w-full overflow-hidden">
        <div className="relative w-full h-screen overflow-hidden">
  
        <div className="absolute inset-0 z-0">
          <ParticleBackground imageUrl={hero.imageUrl} />
        </div>

        {/* Content sits above */}
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
            href="#"
            className="text-white inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded font-medium hover:bg-blue-700 transition"
          >
            {hero.callToAction}
          </a>
        </motion.div>
      </div>
      </section>
    </>
  );
}
