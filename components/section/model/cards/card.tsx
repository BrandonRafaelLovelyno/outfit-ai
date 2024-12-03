import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";
import CircledIcon from "./circled-icon";

interface Props {
  Icon: IconType;
  title: string;
  description: string;
}

export default function ModelCard({ Icon, title, description }: Props) {
  return <div className={twMerge("flex flex-col gap-y-5 items-start", "px-7 py-10", "text-secondary", "bg-[#6EACDA] bg-opacity-20", "rounded-xl")}>
    <CircledIcon Icon={Icon} />
    <div className={twMerge("flex flex-col gap-y-2 items-start")}>
      <p className={twMerge("font-bold text-lg")}>{title}</p>
      <p className={twMerge("text-sm font-medium")}>{description}</p>
    </div>
  </div>
}
