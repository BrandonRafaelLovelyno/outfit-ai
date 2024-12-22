import ParagraphCard from "@/components/container/paragraph-card";
import useDemoInformation from "@/hooks/useDemoInformation";
import { twMerge } from "tailwind-merge";

export default function DemoInformation() {
  const { information } = useDemoInformation();

  return (
    <div className={twMerge("w-full h-full", "flex flex-col gap-y-6 items-start")}>
      {
        information.map((info, index) => (
          <ParagraphCard key={index} title={info.title} Icon={info.Icon} textColor={info.textColor} backgroundColor={info.backgroundColor}>
            <span className={twMerge("font-normal text-lg")}>{info.description}</span>
          </ParagraphCard>
        ))
      }
    </div>
  )
}
