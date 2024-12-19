import ParagraphCard from "@/components/container/paragraph-card";
import { getInformation } from "@/helper/input-information";
import { twMerge } from "tailwind-merge";

export default async function DemoInformation() {
  const information = await getInformation();

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
