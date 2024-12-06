"use client";

import { twMerge } from "tailwind-merge";
import { FaTrash } from "react-icons/fa";
import IconButton from "@/components/icon-button";
import { RiRobot2Fill } from "react-icons/ri";
import InputSample from "./sample";
import ImageInput from "./image-input";
import { useState } from "react";
import ImageViewer from "./image-viewer";

export default function ModelInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const clearImage = () => setImageUrl(null)

  return (
    <div className={twMerge("relative", "h-[800px] w-[500px]", "flex flex-col items-start justify-center py-8 px-6 gap-y-5", "bg-[#6EACDA] bg-opacity-10", "rounded-xl")}>

      {/* Absolute input sample */}
      <InputSample />

      <h2>Model Input</h2>

      {
        imageUrl ? <ImageViewer imageUrl={imageUrl} /> : <ImageInput setImageUrl={setImageUrl} />
      }

      <div className={twMerge("ml-auto", "flex flex-row gap-x-5")}>
        <IconButton title="Clear" Icon={FaTrash} onClick={clearImage} type="secondary" />
        <IconButton title="Send" Icon={RiRobot2Fill} onClick={() => { }} />
      </div>
    </div>
  )
}

