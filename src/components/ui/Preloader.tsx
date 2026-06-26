"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sharp fast loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Brutalist huge text */}
          <div className="relative overflow-hidden">
            <motion.h1
              className="font-editorial text-[15vw] leading-none tracking-tighter uppercase font-black"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              AL FATH
            </motion.h1>
          </div>
          <div className="relative overflow-hidden mt-[-2vw]">
            <motion.h2
              className="font-industrial text-[5vw] leading-none tracking-widest text-[#d40000] font-bold"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            >
              MOTORS
            </motion.h2>
          </div>
          
          {/* Progress bar stark line */}
          <motion.div 
            className="absolute bottom-10 left-10 right-10 h-[2px] bg-[#333]"
          >
            <motion.div 
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
