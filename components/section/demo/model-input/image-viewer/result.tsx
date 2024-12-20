import BoundingBox from "@/components/bounding-box";
import ClassCard from "@/components/container/class-card";
import { CLOTH_CLASSES, ClothClass } from "@/constant/bounding-box";
import { determineStyle } from "@/helper/model-input/result";
import { twMerge } from "tailwind-merge";

export interface Result {
  label: number;
  confidence: number;
  bbox: number[];
}

interface Props {
  result: Result[];
  ratio: number;
}


export default function ModelResult({ result, ratio }: Props) {
  return (
    <>
      {
        result.map((res, index) => (
          <div key={index} className={twMerge("absolute")} style={determineStyle(res.bbox, ratio)}>
            <BoundingBox clothClass={CLOTH_CLASSES[res.label - 1]} isHero={false} />
          </div>
        ))
      }
    </>
  )
}
