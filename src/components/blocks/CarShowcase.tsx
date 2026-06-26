"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import Link from "next/link";

const CARS = [
  { 
    id: 1, 
    name: "BMW 318 Luxury", 
    price: "EGP 1,200,000", 
    year: "2018", 
    type: "Sedan",
    km: "123,000",
    engine: "1500 CC",
    image: "/images/bmw_318.png"
  },
  { 
    id: 2, 
    name: "Mercedes-AMG G 63", 
    price: "EGP 12,500,000", 
    year: "2024", 
    type: "Luxury SUV",
    km: "0",
    engine: "4000 CC",
    image: "/images/car1.png"
  },
  { 
    id: 3, 
    name: "Porsche 911 GT3 RS", 
    price: "EGP 18,900,000", 
    year: "2024", 
    type: "Sports Car",
    km: "0",
    engine: "4000 CC",
    image: "/images/car2.png"
  },
  { 
    id: 4, 
    name: "Range Rover SV", 
    price: "EGP 14,200,000", 
    year: "2024", 
    type: "Luxury SUV",
    km: "0",
    engine: "4400 CC",
    image: "/images/car3.png"
  },
];

export function CarShowcase() {
  return (
    <section className="py-32 bg-black text-white px-4 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#7928ca] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            العروض الحصرية
          </h2>
          <p className="text-[#00d4ff] text-xl font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
            أقوى السيارات المعروضة على OLX
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "backOut" }}
            >
              <Link href={`/car/${car.id}`} className="block">
                <TiltCard className="group cursor-pointer">
                {/* Image Container with Aggressive Hover */}
                <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden mb-6 border border-white/5 group-hover:border-[#ff00a0]/50 transition-colors duration-500 shadow-2xl">
                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00a0]/40 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 z-10" />
                  
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ backgroundImage: `url(${car.image})` }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />
                  
                  {/* Badges */}
                  <div className="absolute top-6 right-6 z-30 flex flex-col gap-2">
                    <span className="px-4 py-1.5 bg-white text-black font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      {car.year} | {car.engine}
                    </span>
                    <span className="px-4 py-1.5 bg-[#ff00a0] text-white font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,160,0.5)]">
                      OLX VERIFIED
                    </span>
                  </div>

                  {/* Details positioned inside the image card for dramatic effect */}
                  <div className="absolute bottom-6 left-6 right-6 z-30 transform transition-transform duration-500 md:group-hover:translate-y-[-10px]">
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white drop-shadow-lg leading-tight uppercase">
                      {car.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-4 items-center mb-3 text-xs sm:text-sm text-zinc-300 font-bold uppercase tracking-widest">
                       <span>{car.km === "0" ? "جديد" : `${car.km} كم`}</span>
                       <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,1)]" />
                       <span>{car.type}</span>
                    </div>
                    <div className="h-[2px] w-12 bg-[#00d4ff] mb-3 transition-all duration-500 md:group-hover:w-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    <p className="text-xl sm:text-2xl font-bold text-[#00d4ff] drop-shadow-md">{car.price}</p>
                  </div>
                </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
