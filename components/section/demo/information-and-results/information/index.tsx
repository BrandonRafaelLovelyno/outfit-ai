import ParagraphCard from "@/components/container/paragraph-card";
import { getInformation } from "@/helper/input-information";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export default function DemoInformation() {
  const [information, setInformation] = useState<{ title: string, description: string, Icon: IconType, textColor: string, backgroundColor: string }[]>([]);

  const updateInformation = async () => {
    const information = await getInformation();
    setInformation(information);
  }

  useEffect(() => {
    updateInformation();
  }, [])

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
