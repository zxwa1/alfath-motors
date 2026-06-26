"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/blocks/BookingModal";
import { useEffect, useState } from "react";

const CARS_DB: Record<string, any> = {
  "1": { 
    name: "BMW 318 Luxury", 
    price: "EGP 1,200,000", 
    year: "2018", 
    type: "Sedan",
    km: "123,000",
    engine: "1500 CC",
    image: "/images/bmw_318.png",
    desc: "سيارة BMW الفئة الثالثة الفاخرة، بحالة ممتازة ومواصفات أداء استثنائية."
  },
  "2": { 
    name: "Mercedes-AMG G 63", 
    price: "EGP 12,500,000", 
    year: "2024", 
    type: "Luxury SUV",
    km: "0",
    engine: "4000 CC V8 Biturbo",
    image: "/images/car1.png",
    desc: "أيقونة مرسيدس الفاخرة المخصصة للأداء العالي والطرق الوعرة بتصميم لا يقهر."
  },
  "3": { 
    name: "Porsche 911 GT3 RS", 
    price: "EGP 18,900,000", 
    year: "2024", 
    type: "Sports Car",
    km: "0",
    engine: "4000 CC Flat-6",
    image: "/images/car2.png",
    desc: "سيارة سباق بامتياز مرخصة للشارع، أداء خارق وتصميم أيروديناميكي مذهل."
  },
  "4": { 
    name: "Range Rover SV", 
    price: "EGP 14,200,000", 
    year: "2024", 
    type: "Luxury SUV",
    km: "0",
    engine: "4400 CC V8",
    image: "/images/car3.png",
    desc: "قمة الفخامة البريطانية مع محرك جبار ومقصورة داخلية بأعلى معايير الرفاهية."
  },
};

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const car = CARS_DB[params.id as string];

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-[#ff00a0]">السيارة غير موجودة</h1>
        <Button onClick={() => router.push('/')} className="mt-8 bg-[#00d4ff] text-black font-bold">العودة للرئيسية</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm" 
          style={{ backgroundImage: `url(${car.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 md:py-32 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex gap-4">
            <span className="px-4 py-1.5 bg-[#ff00a0] text-white font-black text-xs uppercase tracking-widest">
              OLX VERIFIED
            </span>
            <span className="px-4 py-1.5 bg-white text-black font-black text-xs uppercase tracking-widest">
              {car.year}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black mb-4 md:mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            {car.name}
          </h1>
          
          <p className="text-3xl md:text-4xl font-black text-[#00d4ff] mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]">
            {car.price}
          </p>

          <p className="text-lg md:text-xl text-zinc-400 mb-8 md:mb-12 font-bold leading-relaxed">
            {car.desc}
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="border border-white/10 p-3 md:p-4 bg-zinc-900/50 backdrop-blur-md">
              <span className="text-[10px] md:text-xs text-[#ff00a0] font-bold block mb-1">المحرك</span>
              <strong className="text-lg md:text-xl">{car.engine}</strong>
            </div>
            <div className="border border-white/10 p-3 md:p-4 bg-zinc-900/50 backdrop-blur-md">
              <span className="text-[10px] md:text-xs text-[#ff00a0] font-bold block mb-1">العداد</span>
              <strong className="text-lg md:text-xl">{car.km === "0" ? "جديد" : `${car.km} كم`}</strong>
            </div>
            <div className="border border-white/10 p-3 md:p-4 bg-zinc-900/50 backdrop-blur-md col-span-2">
              <span className="text-[10px] md:text-xs text-[#ff00a0] font-bold block mb-1">النوع</span>
              <strong className="text-lg md:text-xl">{car.type}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookingModal 
              carName={car.name} 
              trigger={
                <Button size="lg" className="w-full sm:flex-1 bg-gradient-to-r from-[#ff00a0] to-[#7928ca] text-white hover:opacity-90 text-lg md:text-xl py-6 md:py-8 rounded-none uppercase font-black">
                  احجز معاينة الآن
                </Button>
              } 
            />
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/')}
              className="w-full sm:w-auto px-8 border-white/20 text-white hover:bg-white hover:text-black py-6 md:py-8 rounded-none font-bold"
            >
              رجوع
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,0,160,0.2)] md:shadow-[0_0_50px_rgba(255,0,160,0.2)] border border-white/10"
        >
          <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </main>
  );
}
