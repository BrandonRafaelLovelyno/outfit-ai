import { twMerge } from "tailwind-merge";
import HeroTitle from "./title";
import BoundingBox from "@/components/bounding-box";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={twMerge(
        "w-full h-full",
        "flex flex-row justify-between items-center"
      )}
    >
      <div className={twMerge("max-w-[60%]")}>
        <HeroTitle />
      </div>
      <div className={twMerge("relative")}>
        <div
          className={twMerge(
            "absolute right-[70%] -top-[20%]",
            "w-full h-full",
            "-z-[1]"
          )}
        >
          <BoundingBox clothClass="Short Sleeve Top" isHero={true}>
            <Image
              width={300}
              height={300}
              src={"/short-sleeve-top.svg"}
              alt="short sleeve top"
            />
          </BoundingBox>
        </div>
        <BoundingBox clothClass="Trouser" isHero={true}>
          <Image
            width={300}
            height={300}
            src={"/trousers.svg"}
            alt="short sleeve top"
          />
        </BoundingBox>
      </div>
    </section>
  );
}
