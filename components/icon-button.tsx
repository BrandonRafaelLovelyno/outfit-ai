"use client";

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick: () => void;
  title: string;
  Icon: IconType;
}

export default function IconButton({ onClick, title, Icon }: Props) {
  return (
    <button
      className={twMerge(
        "w-full h-full",
        "flex flex-row gap-x-3 items-center justify-center",
        "px-4 py-2",
        "rounded-xl",
        "bg-secondary hover:bg-primary-light",
        "text-primary-light hover:text-secondary",
        "transition-all duration-200"
      )}
      onClick={onClick}
    >
      <p className={twMerge("text-xl font-bold")}>{title}</p>
      <Icon className={twMerge("w-8 h-8")} />
    </button>
  );
}
