import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
      <body className={`${cairo.variable} ${space.variable} ${playfair.variable} font-arabic bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`}>
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
