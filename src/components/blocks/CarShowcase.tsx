"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    id: "mercedes-c180-2020",
    name: "MERCEDES C180",
    year: "2020",
    price: "2,500,000 ج.م",
    image: "/images/car2.png",
    tag: "EXECUTIVE",
  },
  {
    id: "range-rover-velar-2021",
    name: "RANGE ROVER VELAR",
    year: "2021",
    price: "4,100,000 ج.م",
    image: "/images/car3.png",
    tag: "PREMIUM SUV",
  },
];

export function CarShowcase() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white relative border-b border-white/10">
      <div className="max-w-[100vw] px-4 md:px-0 md:max-w-[90vw] mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-32 border-b border-white/20 pb-10 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-editorial text-5xl md:text-8xl font-black uppercase leading-none">
            EXCLUSIVE<br/>COLLECTION
          </h2>
          <p className="font-industrial text-[#d40000] text-[10px] md:text-sm tracking-[0.2em] uppercase mt-6 md:mt-0 font-bold max-w-xs md:text-right">
            CURATED SELECTION OF THE FINEST VEHICLES AVAILABLE IN EGYPT
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20 group`}
            >
              {/* Massive background number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[50vw] md:text-[30vw] font-black text-white/[0.03] pointer-events-none z-0">
                0{index + 1}
              </div>

              {/* Image Container with Clip Path Reveal */}
              <Link href={`/car/${car.id}`} className="block w-full md:w-3/5 z-10 relative overflow-hidden bg-white/5 border border-white/10 aspect-[4/3]">
                <motion.div 
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 ease-[0.76,0,0.24,1]"
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Red accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#d40000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>

              {/* Text Content */}
              <div className="w-full md:w-2/5 z-10 flex flex-col space-y-6">
                <span className="font-industrial text-[#d40000] text-xs tracking-[0.3em] font-bold">
                  {car.tag} // {car.year}
                </span>
                
                <h3 className="font-editorial text-4xl md:text-6xl font-bold uppercase leading-none">
                  {car.name}
                </h3>
                
                <div className="w-full h-[1px] bg-white/20" />
                
                <div className="flex justify-between items-center font-industrial text-xl">
                  <span className="text-white/50">PRICE</span>
                  <span className="font-bold">{car.price}</span>
                </div>

                <Link href={`/car/${car.id}`} className="mt-8 font-industrial border border-white/30 py-4 text-center uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300 font-bold">
                  VIEW DETAILS
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
