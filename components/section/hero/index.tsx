import { twMerge } from "tailwind-merge";
import HeroTitle from "./title";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={twMerge(
        "w-full h-full",
        "flex flex-row justify-center items-center"
      )}
    >
      <HeroTitle />
      <div className="flex-1" />
    </section>
  );
}
