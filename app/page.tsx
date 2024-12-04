import Navbar from "@/components/layout/navbar";
import ClassesSection from "@/components/section/classes";
import DemoSection from "@/components/section/demo";
import HeroSection from "@/components/section/hero";
import ModelSection from "@/components/section/model";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className={twMerge("relative", "w-full h-fit overflow-y-auto", "flex flex-col", "pb-10")}>
      <div className={twMerge("absolute", "w-full h-fit")}>
        <Navbar />
      </div>
      <div className={twMerge("h-[100vh]")}>
        <HeroSection />
      </div>
      <div className={twMerge("flex flex-col gap-y-56")}>
        <ModelSection />
        <ClassesSection />
        <DemoSection />
      </div>
    </main>
  );
}
