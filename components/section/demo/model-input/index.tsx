"use client";

import { twMerge } from "tailwind-merge";
import { FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";
import ImageInput from "./image-input";
import React, { useMemo } from "react";
import ImageViewer from "./image-viewer/index";
import RevealOnScroll from "@/components/framer-motion/reveal-on-scroll";
import { Size } from "@/helper/model-input/preprocessing";
import { tryToExecute } from "@/helper/integration";
import { useModelInput } from "@/hooks/useModelInput";

const determineRevealProps = (imageUrl: string | null, rescaledSize: Size | null) => {
  const transition = imageUrl ? { initial: { y: 20 }, animate: { y: 0 } } : { initial: { y: 0 }, animate: { y: 20 } }
  const style = imageUrl && rescaledSize ? { width: rescaledSize.width, height: rescaledSize.height } : { width: 500, height: 800 }

  return { transition, style, }
}

export default function ModelInput() {
  const { imageUrl, clearImage, processImage, rescaledSize, uploading, setUploading } = useModelInput();
  const onSend = tryToExecute(processImage, setUploading)

  const revealProps = useMemo(() => determineRevealProps(imageUrl, rescaledSize), [imageUrl, rescaledSize])

  return (
    <div className={twMerge("relative", "flex flex-col items-start justify-center py-8 px-6 gap-y-5", "bg-[#6EACDA] bg-opacity-10", "rounded-xl")}>

      <h2>Model Input</h2>

      <RevealOnScroll {...revealProps} key={imageUrl ? "viewer" : "input"}>
        {
          imageUrl ? <ImageViewer /> : <ImageInput />
        }
      </RevealOnScroll>

      <div className={twMerge("ml-auto", "flex flex-row gap-x-5")}>
        <IconButton disabled={uploading} title="Clear" Icon={FaTrash} onClick={clearImage} type="secondary" />
        <IconButton disabled={uploading} title="Send" Icon={RiRobot2Fill} onClick={onSend} />
      </div>
    </div>
  )
}

