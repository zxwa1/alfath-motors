"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";

export function BookingModal({ carName, trigger }: { carName: string, trigger: React.ReactElement }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      {/* Brutalist Dialog Content: sharp borders, pure black, white borders */}
      <DialogContent className="sm:max-w-[500px] bg-[#0a0a0a] border-2 border-white rounded-none p-8 text-white">
        <DialogHeader className="mb-6">
          <DialogTitle className="font-editorial text-4xl font-black uppercase tracking-tighter">
            ACQUIRE <br/> <span className="text-[#d40000]">{carName}</span>
          </DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-6 font-industrial"
          >
            <div className="space-y-2">
              <label className="text-xs tracking-widest text-white/50 uppercase">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors uppercase"
                placeholder="JOHN DOE"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs tracking-widest text-white/50 uppercase">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="+20 10X XXX XXXX"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-[#d40000] hover:text-white rounded-none h-14 text-lg font-bold tracking-widest uppercase transition-colors"
            >
              CONFIRM REQUEST
            </Button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 border-2 border-[#d40000] flex items-center justify-center rounded-full mb-6">
              <span className="text-[#d40000] text-2xl">✓</span>
            </div>
            <h3 className="font-editorial text-3xl font-bold mb-2 uppercase">REQUEST RECEIVED</h3>
            <p className="font-industrial text-white/60 text-sm tracking-widest uppercase">
              OUR AGENT WILL CONTACT YOU SHORTLY.
            </p>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
