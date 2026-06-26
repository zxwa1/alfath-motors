import { Hero } from "@/components/blocks/Hero";
import { CarShowcase } from "@/components/blocks/CarShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <CarShowcase />
    </main>
  );
}
