import { ClothClass } from "@/constant/bounding-box";
import { CLASS_CARD_COLOR } from "@/constant/classes-card";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  clothClass: ClothClass;
  percentage?: number;
}

const getImageFileName = (clothClass: ClothClass) => {
  const fileName = clothClass.replace(/ /g, "-").toLowerCase();
  return fileName;
}

export default function ClassCard({ clothClass, percentage }: Props) {
  const imageDir = `/classes/${getImageFileName(clothClass)}.svg`;

  const bgColor = CLASS_CARD_COLOR[clothClass].background
  const iconColor = CLASS_CARD_COLOR[clothClass].icon

  return (
    <div className={twMerge("flex flex-row items-center gap-x-5", "p-6", "rounded-lg", "bg-opacity-30")} style={{ background: bgColor }}>
      <div className={twMerge("relative", "w-24 h-24")}>
        <Image src={imageDir} fill={true} alt={clothClass} />
      </div>
      <div className={twMerge("flex flex-col")} style={{ color: iconColor }} >
        <h1>{clothClass}</h1>
        {
          percentage &&
          <h2>{percentage}%</h2>
        }
      </div>
    </div>
  )
}
