"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { BookingModal } from "@/components/blocks/BookingModal";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CARS_DB = {
  "bmw-318-2018": {
    id: "bmw-318-2018",
    name: "BMW 318",
    year: "2018",
    price: "1,200,000 ج.م",
    image: "/images/bmw_318.png",
    specs: {
      "كيلومترات": "123,000",
      "ناقل الحركة": "اوتوماتيك",
      "نوع الوقود": "بنزين",
      "الماركة": "بي ام دبليو",
      "نسخة": "luxury",
      "المحرك (سي سي)": "1500",
      "الجزء الداخلي": "جلد بالكامل",
      "اللون": "أسود"
    }
  },
  "mercedes-c180-2020": {
    id: "mercedes-c180-2020",
    name: "MERCEDES C180",
    year: "2020",
    price: "2,500,000 ج.م",
    image: "/images/car2.png",
    specs: {
      "كيلومترات": "45,000",
      "ناقل الحركة": "اوتوماتيك",
      "نوع الوقود": "بنزين",
      "الماركة": "مرسيدس بنز",
      "نسخة": "AMG",
      "المحرك (سي سي)": "1500",
      "الجزء الداخلي": "جلد أحمر",
      "اللون": "أبيض"
    }
  },
  "range-rover-velar-2021": {
    id: "range-rover-velar-2021",
    name: "RANGE ROVER VELAR",
    year: "2021",
    price: "4,100,000 ج.م",
    image: "/images/car3.png",
    specs: {
      "كيلومترات": "30,000",
      "ناقل الحركة": "اوتوماتيك",
      "نوع الوقود": "بنزين",
      "الماركة": "لاند روفر",
      "نسخة": "R-Dynamic",
      "المحرك (سي سي)": "2000",
      "الجزء الداخلي": "جلد أسود",
      "اللون": "رمادي"
    }
  }
};

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [car, setCar] = useState<any>(null);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  useEffect(() => {
    if (params?.id) {
      const carData = CARS_DB[params.id as keyof typeof CARS_DB];
      if (carData) {
        setCar(carData);
      } else {
        router.push("/");
      }
    }
  }, [params, router]);

  if (!car) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  return (
    <main ref={ref} className="bg-[#050505] text-white overflow-hidden relative">
      
      {/* Full Screen Image Parallax */}
      <motion.div 
        style={{ y: imageY, opacity: imageOpacity }}
        className="fixed top-0 left-0 w-full h-[70vh] md:h-screen z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image 
          src={car.image} 
          alt={car.name} 
          fill 
          className="object-cover" 
          priority
        />
      </motion.div>

      {/* Floating Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-8 left-4 md:left-8 z-50 glass-panel px-6 py-3 rounded-full font-industrial text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
      >
        <span>←</span> BACK
      </button>

      {/* Content - Bottom Sheet Style */}
      <div className="relative z-20 mt-[50vh] md:mt-[70vh] pb-32">
        <div className="max-w-[100vw] px-4 md:max-w-[70vw] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="glass-panel p-6 md:p-16 rounded-[40px] md:rounded-[60px] border border-white/10 relative overflow-hidden"
          >
            <div className="ambient-glow opacity-30" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8 gap-6">
              <div>
                <span className="font-industrial text-white/50 text-xs md:text-sm tracking-[0.3em] font-bold mb-4 block">
                  EDITION // {car.year}
                </span>
                <h1 className="font-editorial text-5xl md:text-7xl font-black uppercase leading-none drop-shadow-xl">
                  {car.name}
                </h1>
              </div>
              <div className="text-3xl md:text-4xl font-industrial font-bold text-white/90 glass-panel px-6 py-3 rounded-2xl">
                {car.price}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 font-industrial text-sm">
              {Object.entries(car.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col glass-panel p-4 rounded-2xl border border-white/5">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs mb-2">{key}</span>
                  <span className="font-bold text-lg">{value as React.ReactNode}</span>
                </div>
              ))}
            </div>

            {/* Premium Button */}
            <div className="relative z-10 flex justify-center">
              <BookingModal 
                carName={car.name} 
                trigger={
                  <button className="w-full md:w-auto font-industrial bg-white text-black px-12 py-5 rounded-full text-sm md:text-lg tracking-[0.2em] uppercase font-bold hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    REQUEST A TEST DRIVE
                  </button>
                } 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
