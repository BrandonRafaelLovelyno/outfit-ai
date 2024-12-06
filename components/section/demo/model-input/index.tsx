"use client";

import { twMerge } from "tailwind-merge";
import { FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";
import InputSample from "./sample";
import ImageInput from "./image-input";
import React, { useState } from "react";
import ImageViewer from "./image-viewer";
import Reveal from "@/components/framer-motion/reveal-on-scroll";

const IMAGE_CONTAINER_TRANSITION = { x: 0, y: 20 }

const RevealContainer = ({ children }: { children: React.ReactNode }) => <Reveal className={twMerge("w-full h-full")} {...IMAGE_CONTAINER_TRANSITION} >{children}</Reveal>

export default function ModelInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const clearImage = () => setImageUrl(null)

  return (
    <div className={twMerge("relative", "h-[800px] w-[500px]", "flex flex-col items-start justify-center py-8 px-6 gap-y-5", "bg-[#6EACDA] bg-opacity-10", "rounded-xl")}>

      {/* Absolute input sample */}
      <InputSample />

      <h2>Model Input</h2>

      {
        imageUrl ? <RevealContainer key={"viewer"}><ImageViewer imageUrl={imageUrl} /></RevealContainer> : <RevealContainer key={"input"} ><ImageInput setImageUrl={setImageUrl} /></RevealContainer>
      }

      <div className={twMerge("ml-auto", "flex flex-row gap-x-5")}>
        <IconButton title="Clear" Icon={FaTrash} onClick={clearImage} type="secondary" />
        <IconButton title="Send" Icon={RiRobot2Fill} onClick={() => { }} />
      </div>
    </div>
  )
}

