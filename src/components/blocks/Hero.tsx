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
        <motion.div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
            className="font-editorial text-7xl md:text-[18vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap"
          >
            LUXURY
          </motion.h1>
        </motion.div>
        <motion.div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
            className="font-editorial text-7xl md:text-[18vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap md:indent-[10vw]"
          >
            MOTORS
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Main Hero Image */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[50vw] aspect-[4/3] md:aspect-[16/9] z-0 overflow-hidden"
      >
        <motion.div 
          initial={{ clipPath: "inset(100% 0 0 0)", filter: "grayscale(100%)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="relative w-full h-full hover:filter-none transition-all duration-700 ease-in-out"
        >
          <Image
            src="/images/bmw_318.png"
            alt="Al Fath Motors Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Brutalist Accents & Data */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-4 md:left-8 z-20 font-industrial text-white/70 text-[10px] md:text-xs tracking-[0.2em] uppercase"
      >
        <p>EST. 2024</p>
        <p>CAIRO, EGYPT</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-4 md:right-8 z-20 font-industrial text-right"
      >
        <p className="text-[#d40000] text-[10px] md:text-sm font-bold tracking-widest mb-1">DISCOVER</p>
        <motion.div 
          className="w-[1px] h-8 md:h-12 bg-white/30 ml-auto"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>

      {/* Sharp borders */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none z-30" />
    </section>
  );
}
