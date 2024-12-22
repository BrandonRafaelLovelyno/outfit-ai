"use client"

import { useModelInput } from "@/hooks/useModelInput"
import { twMerge } from "tailwind-merge"
import ResultCard from "./card"

export default function DemoResult() {
  const { results } = useModelInput()

  if (!results) return null

  return (
    <div className={twMerge("w-full", "flex flex-row flex-wrap gap-x-5 gap-y-3")}>
      {
        results.map((result, index) => (
          <ResultCard key={index} index={index} result={result} />
        ))
      }
    </div>
  )
}
