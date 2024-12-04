import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick: () => void;
  title: string;
  Icon: IconType;
  type?: "primary" | "secondary";
}

export default function IconButton({ onClick, title, Icon, type = "primary" }: Props) {
  const isPrimary = type == "primary";
  return (
    <button
      className={twMerge(
        "w-full h-full",
        "flex flex-row gap-x-3 items-center justify-center",
        "px-4 py-2",
        "rounded-xl",
        isPrimary ? "bg-secondary hover:bg-primary-light" : "border-2 border-acent-purple-normal hover:bg-acent-purple-normal",
        isPrimary ? "text-primary-light hover:text-secondary" : "text-acent-purple-light hover:text-secondary",
        "transition-all duration-200"
      )}
      onClick={onClick}
    >
      <p className={twMerge("text-xl font-bold")}>{title}</p>
      <Icon className={twMerge("w-6 h-6")} />
    </button>
  );
}
