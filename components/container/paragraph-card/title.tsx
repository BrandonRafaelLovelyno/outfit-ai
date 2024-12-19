import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  Icon: IconType;
  textColor: string;
}

export default function ParagpraphCardTitle({ title, Icon, textColor }: Props) {
  return (
    <div className={twMerge("w-full", "flex flex-col gap-y-3 items-center")} style={{ color: textColor }}>
      <div className={twMerge("w-full", "flex flex-row gap-x-3 justify-start items-center")}>
        <Icon className={twMerge("w-6 h-6")} />
        <h3 className={twMerge("font-bold text-xl")}>{title}</h3>
      </div>
      <div className={twMerge("h-[2px] w-full")} style={{ backgroundColor: textColor }} />
    </div>
  )
}
