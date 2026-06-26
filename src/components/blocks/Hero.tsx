"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={ref}
      className="relative h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0a0a0a] border-b border-white/10"
    >
      {/* Editorial Typography Background */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none mix-blend-difference"
      >
        <h1 className="font-editorial text-[18vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap">
          LUXURY
        </h1>
        <h1 className="font-editorial text-[18vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap indent-[10vw]">
          MOTORS
        </h1>
      </motion.div>

      {/* Main Hero Image */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] aspect-[16/9] z-0"
      >
        <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
          <Image
            src="/images/bmw_318.png"
            alt="Al Fath Motors Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Brutalist Accents & Data */}
      <div className="absolute bottom-8 left-8 z-20 font-industrial text-white/70 text-xs tracking-[0.2em] uppercase">
        <p>EST. 2024</p>
        <p>CAIRO, EGYPT</p>
      </div>

      <div className="absolute bottom-8 right-8 z-20 font-industrial text-right">
        <p className="text-[#d40000] text-sm font-bold tracking-widest mb-1">SCROLL TO DISCOVER</p>
        <motion.div 
          className="w-[1px] h-12 bg-white/30 ml-auto"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>

      {/* Sharp borders */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none z-30" />
    </section>
  );
}
