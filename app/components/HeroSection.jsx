"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
            
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Hello, I&apos;m
            </span>

            <br />

            <TypeAnimation
              sequence={[
                "Katravath Shireesha",
                1000,
                "Web Developer",
                1000,
                "Content Creator",
                1000,
                "Programmer",
                1000,
                "Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Passionate about building web applications and learning new technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center hover:opacity-90"
            >
              Hire Me
            </Link>

              <a
              href="/resume/shireesha_resume5.pdf"
              download
              className="px-6 py-3 rounded-full border border-white text-white text-center hover:bg-slate-800 inline-block"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
