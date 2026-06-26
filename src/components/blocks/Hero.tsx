"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.4], [1, 1.2]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop")' }}
        />
        {/* GTA VI Style Vice City Sunset Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00a0]/60 via-[#7928ca]/40 to-[#00d4ff]/30 mix-blend-color-burn z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div 
        style={{ opacity: opacityText, scale: scaleText }}
        className="relative z-30 text-center px-4 w-full"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_30px_rgba(255,0,160,0.4)] leading-none mb-2"
        >
          AL FATH
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-7xl font-black tracking-widest text-[#00d4ff] uppercase drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] mb-8"
        >
          MOTORS
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="text-lg md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-bold tracking-wide drop-shadow-lg leading-relaxed"
        >
          الوجهة الحصرية لأفخم السيارات في مصر. صُممت لتلفت الأنظار.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-[#ff00a0] to-[#7928ca] text-white hover:from-[#ff00a0]/80 hover:to-[#7928ca]/80 text-xl px-12 py-8 rounded-none border-2 border-white/20 uppercase font-black tracking-widest shadow-[0_0_40px_rgba(255,0,160,0.4)] transition-all duration-300">
            استعرض الأسطول
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Glitch Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center mix-blend-screen"
      >
        <span className="text-[#00d4ff] text-xs mb-3 font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(0,212,255,1)]">Scroll Down</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
          className="relative w-[2px] h-16 bg-white/20 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#ff00a0] shadow-[0_0_10px_#ff00a0]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
