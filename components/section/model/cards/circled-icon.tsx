import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  Icon: IconType;
}

export default function CircledIcon({ Icon }: Props) {
  return <div className={twMerge("flex flex-col items-center justify-center", "p-4", "bg-white bg-opacity-15", "rounded-full")}>
    <Icon size={24} />
  </div>
}


