"use client"

import BoundingBox from "@/components/bounding-box";
import { CLOTH_CLASSES, } from "@/constant/bounding-box";
import { determineStyle } from "@/helper/model-input/result";
import { useModelInput } from "@/provider/model-input";
import { twMerge } from "tailwind-merge";

export interface Result {
  label: number;
  confidence: number;
  bbox: number[];
}

export default function ModelResult() {
  const { results, ratio } = useModelInput();

  if (!results || !ratio) return null;

  return (
    <>
      {
        results.map((res, index) => (
          <div key={index} className={twMerge("absolute")} style={determineStyle(res.bbox, ratio)}>
            <BoundingBox clothClass={CLOTH_CLASSES[res.label - 1]} isHero={false} />
          </div>
        ))
      }
    </>
  )
}
