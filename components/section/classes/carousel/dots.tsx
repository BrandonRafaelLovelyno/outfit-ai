import { twMerge } from "tailwind-merge";

interface Props {
  index: number
  setIndex: (index: number) => void
  length: number
}

export default function CarouselDots({ index, setIndex, length }: Props) {
  return (
    <div className={twMerge("flex flex-row gap-x-2")}>
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          className={twMerge(
            "w-3 h-3 rounded-full",
            index === i ? "bg-primary-light" : "bg-secondary")}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
}
