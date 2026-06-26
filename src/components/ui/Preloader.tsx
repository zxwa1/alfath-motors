"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Glitch Logo */}
      <div className="flex flex-col items-center">
        <motion.h1 
          animate={{ x: [-2, 2, -2, 0], y: [1, -1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
          className="text-5xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[4px_0_0_#00d4ff]"
        >
          AL FATH
        </motion.h1>
        
        <motion.h1 
          animate={{ x: [2, -2, 2, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 0.15, repeatType: "mirror" }}
          className="text-5xl sm:text-6xl md:text-9xl font-black text-[#ff00a0] tracking-widest drop-shadow-[-4px_0_0_#00d4ff]"
        >
          MOTORS
        </motion.h1>
      </div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "circOut" }}
        className="w-64 h-1 bg-gradient-to-r from-[#ff00a0] to-[#00d4ff] mt-8 origin-left"
      />
    </motion.div>
  );
}
