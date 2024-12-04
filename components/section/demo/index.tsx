import TitledSection from "@/components/container/titled-section";
import DemoTitle from "./title";
import ModelInput from "./model-input";
import { twMerge } from "tailwind-merge";

export default function DemoSection() {
  return <TitledSection title={<DemoTitle />}>
    <div className={twMerge("w-full h-fit min-h-[800px]", "flex flex-row justify-center gap-x-10")}>
      <ModelInput />
    </div>
  </TitledSection>
}
