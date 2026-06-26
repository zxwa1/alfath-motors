"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative h-[100svh] flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* Ambient Red Glow */}
      <div className="ambient-glow" />

      {/* Floating Glass Texts */}
      <motion.div 
        style={{ y: textY, opacity: opacityOut }}
        className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "120%", opacity: 0, rotateX: 20 }}
            animate={isMounted ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="font-editorial text-7xl md:text-[16vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap drop-shadow-2xl mix-blend-overlay"
          >
            LUXURY
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "120%", opacity: 0, rotateX: 20 }}
            animate={isMounted ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="font-editorial text-7xl md:text-[16vw] leading-[0.8] tracking-tighter text-white font-black uppercase whitespace-nowrap md:indent-[10vw] drop-shadow-2xl mix-blend-overlay"
          >
            MOTORS
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Hero Image */}
      <motion.div 
        style={{ scale: imageScale, opacity: opacityOut }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] aspect-[4/3] md:aspect-[16/9] z-20 pointer-events-none"
      >
        <motion.div 
          initial={{ x: "20%", opacity: 0, filter: "blur(10px)" }}
          animate={isMounted ? { x: "0%", opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
          className="relative w-full h-full drop-shadow-2xl"
        >
          {/* We use a transparent car PNG for the hyper-premium floating look */}
          <Image
            src="/images/bmw_318.png"
            alt="Al Fath Motors Hero"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Premium Glass Accents */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-4 md:left-8 z-30 font-industrial glass-panel px-6 py-3 rounded-2xl flex flex-col items-center justify-center border border-white/10"
      >
        <span className="text-white/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">CAIRO, EGYPT</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-4 md:right-8 z-30 font-industrial flex flex-col items-end"
      >
        <p className="text-white/80 text-[10px] md:text-sm tracking-widest mb-2 uppercase glass-panel px-4 py-2 rounded-full border border-white/10">Scroll to explore</p>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mr-6"
          initial={{ scaleY: 0, originY: 0 }}
          animate={isMounted ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
