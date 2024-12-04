"use client";

import { twMerge } from "tailwind-merge";
import ModelImageBox from "./image-box";
import { FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";
import InputSample from "./sample";
import Reveal from "@/components/framer-motion/reveal-on-scroll";

export default function ModelInput() {
  return (
    <div className={twMerge("relative", "h-[800px] w-[500px]", "flex flex-col items-start justify-center py-8 px-6 gap-y-5", "bg-[#6EACDA] bg-opacity-10", "rounded-xl")}>

      {/* Absolute input sample */}
      <InputSample />

      <h2>Model Input</h2>
      <ModelImageBox />
      <div className={twMerge("ml-auto", "flex flex-row gap-x-5")}>
        <IconButton title="Clear" Icon={FaTrash} onClick={() => { }} type="secondary" />
        <IconButton title="Send" Icon={RiRobot2Fill} onClick={() => { }} />
      </div>
    </div>
  )
}

