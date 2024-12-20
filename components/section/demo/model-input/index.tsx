"use client";

import { twMerge } from "tailwind-merge";
import { FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";
import ImageInput from "./image-input";
import React, { useMemo } from "react";
import ImageViewer from "./image-viewer/index";
import Reveal from "@/components/framer-motion/reveal-on-scroll";
import useModelInput from "@/hooks/useModelInput";
import { Size } from "@/helper/model-input/preprocessing";
import { tryToExecute } from "@/helper/integration";

const determineRevealProps = (imageUrl: string | null, rescaledSize: Size | null) => {
  const transition = imageUrl ? { initial: { y: 20 }, animate: { y: 0 } } : { initial: { y: 0 }, animate: { y: 20 } }
  const style = imageUrl && rescaledSize ? { width: rescaledSize.width, height: rescaledSize.height } : { width: 500, height: 800 }

  return { transition, style, }
}

export default function ModelInput() {
  const { imageUrl, setImageUrl, clearImage, setRescaledSize, processImage, rescaledSize, ratio, setRatio, results, setResults } = useModelInput();
  const onSend = tryToExecute(processImage)

  const revealProps = useMemo(() => determineRevealProps(imageUrl, rescaledSize), [imageUrl, rescaledSize])

  return (
    <div className={twMerge("relative", "flex flex-col items-start justify-center py-8 px-6 gap-y-5", "bg-[#6EACDA] bg-opacity-10", "rounded-xl")}>

      <h2>Model Input</h2>

      <Reveal {...revealProps} key={imageUrl ? "viewer" : "input"}>
        {
          imageUrl ? <ImageViewer imageUrl={imageUrl} results={results} ratio={ratio} /> : <ImageInput setImageUrl={setImageUrl} setRescaledSize={setRescaledSize} setRatio={setRatio} />
        }
      </Reveal>

      <div className={twMerge("ml-auto", "flex flex-row gap-x-5")}>
        <IconButton title="Clear" Icon={FaTrash} onClick={clearImage} type="secondary" />
        <IconButton title="Send" Icon={RiRobot2Fill} onClick={onSend} />
      </div>
    </div>
  )
}

