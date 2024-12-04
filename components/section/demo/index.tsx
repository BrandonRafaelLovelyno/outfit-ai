import TitledSection from "@/components/container/titled-section";
import DemoTitle from "./title";
import ModelInput from "./input";
import { twMerge } from "tailwind-merge";
import Reveal from "@/components/framer-motion/reveal-on-scroll";

export default function DemoSection() {
  return <TitledSection title={<DemoTitle />}>
    <Reveal className={twMerge("w-full h-fit min-h-[800px]", "flex flex-row justify-center gap-x-10")} x={0} y={20} >
      <ModelInput />
    </Reveal>
  </TitledSection>
}
