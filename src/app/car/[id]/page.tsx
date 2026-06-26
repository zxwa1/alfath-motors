"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { BookingModal } from "@/components/blocks/BookingModal";
import { useEffect, useState } from "react";
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
    return <div className="min-h-screen bg-[#0a0a0a]" />;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-32">
      <div className="max-w-[90vw] mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="font-industrial text-sm tracking-widest uppercase flex items-center gap-2 hover:text-[#d40000] transition-colors mb-12"
        >
          <span className="text-xl">←</span> BACK TO SHOWROOM
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Image Section - Brutalist styling */}
          <div className="relative aspect-[4/3] bg-white/5 border border-white/10 p-4">
            <div className="w-full h-full relative grayscale">
              <Image 
                src={car.image} 
                alt={car.name} 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d40000] translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d40000] -translate-x-4 translate-y-4" />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <span className="font-industrial text-[#d40000] text-sm tracking-[0.3em] font-bold mb-4">
              EDITION // {car.year}
            </span>
            <h1 className="font-editorial text-5xl md:text-7xl font-black uppercase leading-none mb-8">
              {car.name}
            </h1>
            
            <div className="text-3xl font-industrial mb-12 border-b border-white/20 pb-6 font-bold">
              {car.price}
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-16 font-industrial text-sm">
              {Object.entries(car.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase tracking-widest text-xs mb-1">{key}</span>
                  <span className="font-bold">{value as React.ReactNode}</span>
                </div>
              ))}
            </div>

            {/* Brutalist Button */}
            <BookingModal 
              carName={car.name} 
              trigger={
                <button className="w-full font-industrial bg-white text-black py-6 text-xl tracking-widest uppercase font-bold hover:bg-[#d40000] hover:text-white transition-colors duration-300">
                  REQUEST A TEST DRIVE
                </button>
              } 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
