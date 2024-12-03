"use client";

import IconButton from "@/components/icon-button";
import { twMerge } from "tailwind-merge";
import { RiRobot2Fill } from "react-icons/ri";

export default function HeroTitle() {
  return (
    <div className={twMerge("flex flex-col gap-y-5")}>
      <h1 className={twMerge("font-bold text-8xl text-secondary")}>
        Outfit object detector
      </h1>
      <h2 className={twMerge("opacity-65", "text-xl text-primary-light")}>
        Detect and classify clothes by 13 classes
      </h2>
      <div className={twMerge("w-fit")}>
        <IconButton title="Try now" Icon={RiRobot2Fill} onClick={() => { }} />
      </div>
    </div>
  );
}
