"use client"

import BoundingBox from "@/components/bounding-box";
import { CLOTH_CLASSES, } from "@/constant/bounding-box";
import { determineStyle } from "@/helper/model-input/result";
import { useDemoResult } from "@/hooks/useDemoResult";
import { useModelInput } from "@/hooks/useModelInput"
import { twMerge } from "tailwind-merge";

export interface Result {
  label: number;
  confidence: number;
  bbox: number[];
}

const getCN = (index: number, selectedIndex: number | undefined) => {
  let cn = twMerge("absolute transition-all duration-300")

  if (index != selectedIndex) {
    cn = twMerge(cn, "opacity-20")
  }

  return cn
}

export default function ModelResult() {
  const { results, ratio } = useModelInput();
  const { selectedIndex } = useDemoResult()

  if (!results || !ratio) return null;

  return (
    <>
      {
        results.map((res, index) => (
          <div key={index} className={getCN(index, selectedIndex)} style={determineStyle(res.bbox, ratio)}>
            <BoundingBox clothClass={CLOTH_CLASSES[res.label]} isHero={false} />
          </div>
        ))
      }
    </>
  )
}
