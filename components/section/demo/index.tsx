import TitledSection from "@/components/container/titled-section";
import DemoTitle from "./title";
import ModelInput from "./model-input";
import { twMerge } from "tailwind-merge";
import Reveal from "@/components/framer-motion/reveal-on-scroll";
import DemoInformation from "./information";

export default function DemoSection() {
  return (
    <TitledSection title={<DemoTitle />}>
      <div className={twMerge("w-full", "flex flex-row gap-x-14 justify-center")}>
        <Reveal className={twMerge("w-fit h-fit min-h-[800px]",)} x={0} y={20} >
          <ModelInput />
        </Reveal>

        <Reveal className={twMerge("w-[450px] h-fit")} x={0} y={20} >
          <DemoInformation />
        </Reveal>
      </div>
    </TitledSection>)
}
