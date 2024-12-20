"use client"

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ModelResult from "./result";
import { useModelInput } from "@/hooks/useModelInput";

export default function ImageViewer() {
  const { imageUrl, results, ratio } = useModelInput();

  if (!imageUrl) return null;

  return <div className={twMerge("relative", "w-full h-full", "border-2 border-secondary", "rounded-xl", "overflow-hidden")} >
    <Image src={imageUrl} layout="fill" objectFit="contain" alt={imageUrl} />

    {results && ratio && <ModelResult />}
  </div>
}

