import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

// Using Cairo for Arabic luxury typography and Inter as fallback
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Al Fath Motors | الفتح موتورز",
  description: "معرض السيارات الفاخرة - الفتح موتورز",
};

import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${cairo.variable} ${inter.variable} font-arabic bg-black text-white antialiased selection:bg-[#ff00a0]/30 selection:text-white overflow-x-hidden`}>
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
