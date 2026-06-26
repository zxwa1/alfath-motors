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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${cairo.variable} ${inter.variable} font-arabic bg-black text-white antialiased selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
