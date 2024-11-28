import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/section/hero";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className={twMerge("relative", "w-full h-full", "flex flex-col")}>
      <div className={twMerge("absolute", "w-full h-fit")}>
        <Navbar />
      </div>
      <div className={twMerge("h-[100vh] w-full")}>
        <HeroSection />
      </div>
    </main>
  );
}
