"use client"

import { twMerge } from "tailwind-merge";
import { Result } from "../../model-input/image-viewer/result";
import ClassCard from "@/components/container/class-card";
import { CLOTH_CLASSES } from "@/constant/bounding-box";
import { useDemoResult } from "@/hooks/useDemoResult";

interface Props {
  index: number;
  result: Result
}

const getCN = (index: number, selectedIndex: number | undefined) => {
  let cn = twMerge("transition-all duration-300")

  if (index != selectedIndex) {
    cn = twMerge(cn, "opacity-50 hover:opacity-80", "cursor-pointer")
  }

  return cn
}

export default function ResultCard({ index, result }: Props) {
  const { selectedIndex, setSelectedIndex } = useDemoResult()
  const cn = getCN(index, selectedIndex)

  const onClick = () => {
    setSelectedIndex(index)
  }

  return (
    <div className={cn} onClick={onClick}>
      <ClassCard clothClass={CLOTH_CLASSES[result.label]} confidence={result.confidence} />
    </div>
  )
}
