"use client";

import { motion } from "framer-motion";

const CARS = [
  { id: 1, name: "Mercedes-Benz S-Class", price: "يبدأ من $110,000", year: "2024", type: "Luxury Sedan" },
  { id: 2, name: "Porsche 911 GT3", price: "يبدأ من $170,000", year: "2024", type: "Sports Car" },
  { id: 3, name: "Range Rover Autobiography", price: "يبدأ من $140,000", year: "2024", type: "Luxury SUV" },
];

export function CarShowcase() {
  return (
    <section className="py-32 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">التشكيلة الحصرية</h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              مجموعة منتقاة بعناية من أندر وأفخم السيارات في العالم، متوفرة الآن في صالة العرض الخاصة بنا.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {/* Placeholder for car image */}
                <div className="w-full h-full bg-zinc-800 transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute bottom-6 right-6 z-20 flex gap-3">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/10">
                    {car.year}
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/10">
                    {car.type}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">{car.name}</h3>
                  <p className="text-zinc-500 font-medium">{car.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
