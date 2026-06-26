"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
      <DialogContent className="sm:max-w-[425px] bg-black border border-[#ff00a0]/30 shadow-[0_0_40px_rgba(255,0,160,0.2)] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00d4ff]">
            حجز معاينة
          </DialogTitle>
          <DialogDescription className="text-zinc-400 font-bold">
            اترك بياناتك لتحديد موعد لمعاينة {carName}
          </DialogDescription>
        </DialogHeader>
        
        {!submitted ? (
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-[#ff00a0]">الاسم بالكامل</label>
              <input id="name" className="bg-zinc-900 border border-white/10 p-3 outline-none focus:border-[#00d4ff] transition-colors font-bold" placeholder="أدخل اسمك" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-[#ff00a0]">رقم الهاتف</label>
              <input id="phone" type="tel" className="bg-zinc-900 border border-white/10 p-3 outline-none focus:border-[#00d4ff] transition-colors font-bold" placeholder="01X XXX XXXX" dir="ltr" />
            </div>
            
            <Button 
              onClick={() => setSubmitted(true)}
              className="mt-4 bg-gradient-to-r from-[#ff00a0] to-[#7928ca] hover:opacity-90 text-white font-black uppercase tracking-widest p-6 rounded-none"
            >
              تأكيد الحجز
            </Button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <span className="text-green-500 text-3xl">✓</span>
            </div>
            <h3 className="text-xl font-black mb-2 text-white">تم استلام طلبك بنجاح!</h3>
            <p className="text-zinc-400 text-center text-sm font-bold">
              سيقوم أحد ممثلي المبيعات بالتواصل معك قريباً لتأكيد الموعد.
            </p>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
