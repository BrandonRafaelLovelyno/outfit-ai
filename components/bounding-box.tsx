import { BOUNDING_BOX_COLOR, ClothClass } from "@/constant/bounding-box";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: React.ReactNode;
  clothClass: ClothClass;
  isHero: boolean;
}

export default function BoundingBox({ children = <div />, clothClass, isHero }: Props) {
  const { headingBg, mainBg, border } = BOUNDING_BOX_COLOR[clothClass];

  return (
    <div className={twMerge("w-full h-full", "flex flex-col items-start")}>
      <div
        className={twMerge(
          "flex justify-center items-center",
          "p-2",
          "rounded-t-lg",
          isHero && "boundingHero"
        )}
        style={{ background: headingBg }}
      >
        <p className={twMerge("font-extrabold text-secondary", !isHero && "text-sm")}>{clothClass}</p>
      </div>
      <div className={twMerge("relative", "flex-1 w-full")}>
        <div
          className={twMerge(
            "absolute",
            "h-full w-full",
            `border-4`,
            isHero && "boundingHero"
          )}
          style={{ borderColor: border, background: mainBg }}
        />
        {children}
      </div>
    </div>
  );
}
