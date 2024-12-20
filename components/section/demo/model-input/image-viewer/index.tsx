"use client"

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ModelResult, { Result } from "./result";

interface Props {
  imageUrl: string;
  ratio?: number;
  results?: Result[]
}

export default function ImageViewer({ imageUrl, results = [], ratio = 1 }: Props) {
  return <div className={twMerge("relative", "w-full h-full", "border-2 border-secondary", "rounded-xl", "overflow-hidden")} >
    <Image src={imageUrl} layout="fill" objectFit="contain" alt={imageUrl} />
    <ModelResult result={results} ratio={ratio} />
  </div>
}

