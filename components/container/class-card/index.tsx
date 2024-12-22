import { ClothClass } from "@/constant/bounding-box";
import { getCardProps } from "@/helper/class-card";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  clothClass: ClothClass;
  confidence?: number;
}

export default function ClassCard({ clothClass, confidence }: Props) {
  const { imageDir, bgColor, iconColor, displayedConfidence } = getCardProps(clothClass, confidence)

  return (
    <div className={twMerge("flex flex-row items-center gap-x-5", "p-6", "rounded-lg")} style={{ background: bgColor }}>
      <div className={twMerge("relative", "w-24 h-24")}>
        <Image src={imageDir} fill={true} alt={clothClass} />
      </div>
      <div className={twMerge("flex flex-col")} style={{ color: iconColor }} >
        <h1>{clothClass}</h1>
        {
          displayedConfidence &&
          <h2>{displayedConfidence}</h2>
        }
      </div>
    </div>
  )
}
