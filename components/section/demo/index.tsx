"use client";

import TitledSection from "@/components/container/titled-section";
import DemoTitle from "./title";
import ModelInput from "./model-input";
import { twMerge } from "tailwind-merge";
import RevealOnScroll from "@/components/framer-motion/reveal-on-scroll";
import InformationAndResult from "./information-and-result";

export default function DemoSection() {
  return (
    <TitledSection id={"demo"} title={<DemoTitle />}>
      <div
        className={twMerge(
          "w-full",
          "flex flex-row gap-x-14 justify-center",
          "overflow-hidden"
        )}
      >
        <RevealOnScroll
          className={twMerge("w-fit h-fit min-h-[800px]")}
          x={0}
          y={20}
        >
          <ModelInput />
        </RevealOnScroll>

        <RevealOnScroll className={twMerge("w-fit h-fit")} x={0} y={20}>
          <InformationAndResult />
        </RevealOnScroll>
      </div>
    </TitledSection>
  );
}
