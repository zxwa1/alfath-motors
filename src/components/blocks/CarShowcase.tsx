"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const CARS = [
  {
    id: "bmw-318-2018",
    name: "BMW 318",
    year: "2018",
    price: "1,200,000 ج.م",
    image: "/images/bmw_318.png",
    tag: "LUXURY SEDAN",
  },
  {
    id: "porsche-911-gt3-rs-2022",
    name: "PORSCHE 911 GT3 RS",
    year: "2022",
    price: "15,500,000 ج.م",
    image: "/images/car2.png",
    tag: "TRACK FOCUSED SUPERCAR",
  },
  {
    id: "range-rover-velar-2021",
    name: "RANGE ROVER VELAR",
    year: "2021",
    price: "4,100,000 ج.م",
    image: "/images/car3.png",
    tag: "PREMIUM SUV",
  },
  {
    id: "mercedes-g63-amg-2023",
    name: "MERCEDES G63 AMG",
    year: "2023",
    price: "12,000,000 ج.م",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2000",
    tag: "LUXURY OFF-ROAD",
  },
  {
    id: "lamborghini-huracan-2022",
    name: "LAMBORGHINI HURACÁN",
    year: "2022",
    price: "18,500,000 ج.م",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=2000",
    tag: "EXOTIC",
  },
  {
    id: "rolls-royce-ghost-2024",
    name: "ROLLS-ROYCE GHOST",
    year: "2024",
    price: "25,000,000 ج.م",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop",
    tag: "ULTRA LUXURY",
  },
];

const Card = ({ car, index, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-10% + ${index * 40}px)` }}
        className="relative w-[90vw] md:w-[70vw] h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden glass-panel border border-white/20 origin-top flex flex-col md:flex-row"
      >
        {/* Background Ambient Glow inside card */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#111] z-0" />
        <div className="ambient-glow opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center h-1/2 md:h-full order-2 md:order-1">
          <span className="font-industrial text-white/50 text-xs tracking-[0.3em] font-bold mb-4">
            {car.tag} // {car.year}
          </span>
          <h3 className="font-editorial text-4xl md:text-6xl font-bold uppercase leading-none mb-6 text-white drop-shadow-xl">
            {car.name}
          </h3>
          <div className="text-2xl md:text-3xl font-industrial mb-8 border-b border-white/10 pb-6 font-bold text-white/90">
            {car.price}
          </div>
          <Link href={`/car/${car.id}`} className="mt-auto font-industrial glass-panel py-4 px-8 text-center uppercase tracking-widest text-sm text-white hover:bg-white hover:text-black transition-colors duration-500 rounded-full font-bold w-max">
            DISCOVER MORE
          </Link>
        </div>

        {/* Image */}
        <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full order-1 md:order-2 overflow-hidden flex items-center justify-center">
          <motion.div style={{ scale: imageScale }} className="relative w-full h-[150%]">
             {/* Using object-contain or cover based on layout. We'll use cover to fill the space luxuriously */}
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export function CarShowcase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} className="relative bg-[#050505] text-white">
      <div className="py-20 text-center sticky top-0 h-screen flex flex-col justify-center items-center -z-10 opacity-30">
        <h2 className="font-editorial text-5xl md:text-8xl font-black uppercase leading-none">
          THE <br/> COLLECTION
        </h2>
      </div>

      <div className="mt-[-100vh]">
        {CARS.map((car, i) => {
          const targetScale = 1 - ( (CARS.length - i) * 0.05);
          return (
            <Card 
              key={car.id} 
              index={i} 
              car={car} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
      
      {/* Extra space at bottom to allow scrolling past the last sticky element cleanly */}
      <div className="h-[20vh] bg-[#050505]" />
    </section>
  );
}
