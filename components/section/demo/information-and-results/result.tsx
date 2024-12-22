"use client"

import ClassCard from "@/components/container/class-card"
import { CLOTH_CLASSES } from "@/constant/bounding-box"
import { useModelInput } from "@/hooks/useModelInput"
import { twMerge } from "tailwind-merge"

export default function DemoResult() {
  const { results } = useModelInput()

  if (!results) return null

  return (
    <div className={twMerge("w-full", "flex flex-row flex-wrap gap-x-5 gap-y-3")}>
      {
        results.map((result, index) => (
          <ClassCard key={index} clothClass={CLOTH_CLASSES[result.label]} confidence={result.confidence} />
        ))
      }
    </div>
  )
}
