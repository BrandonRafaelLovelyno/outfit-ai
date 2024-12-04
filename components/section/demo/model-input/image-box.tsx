"use client"

import { twMerge } from "tailwind-merge"
import { FaImage, FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";

export default function ModelImageBox() {
  return <div className={twMerge("w-full flex-1", "flex flex-col justify-center items-center gap-y-6", "bg-[#6EACDA] bg-opacity-10", "border-2 border-secondary", "rounded-xl", "cursor-pointer")}>
    <FaImage size={100} />
    <div className={twMerge("flex flex-col gap-y-1 items-center")}>
      <p className={twMerge("font-bold text-lg")}>Drop your image here</p>
      <p className={twMerge("text-sm font-medium")}>or click to browse</p>
    </div>
  </div>
}

