"use client"

import TitledSection from "@/components/container/titled-section";
import DemoTitle from "./title";
import ModelInput from "./model-input";
import { twMerge } from "tailwind-merge";
import Reveal from "@/components/framer-motion/reveal-on-scroll";
import DemoInformation from "./information";
import { useModelInput } from "@/hooks/useModelInput";
import RevealOnPresence from "@/components/framer-motion/reveal-on-presence";
import DemoResult from "./result";

export default function DemoSection() {
  const { results } = useModelInput();

  return (
    <TitledSection title={<DemoTitle />}>
      <div className={twMerge("w-full", "flex flex-row gap-x-14 justify-center")}>
        <Reveal className={twMerge("w-fit h-fit min-h-[800px]",)} x={0} y={20} >
          <ModelInput />
        </Reveal>

        <Reveal className={twMerge(!results && "max-w-[450px]", "w-full h-fit")} x={0} y={20} >
          <RevealOnPresence>
            {!results && <DemoInformation />}
          </RevealOnPresence>

          <RevealOnPresence>
            {results && <DemoResult />}
          </RevealOnPresence>
        </Reveal>
      </div>
    </TitledSection>)
}
