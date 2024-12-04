"use client"

import { useState } from "react";
import CarouselItem from "./item";
import { twMerge } from "tailwind-merge";
import CarouselDots from "./dots";

interface Props {
  items: React.ReactElement[];
  itemPerSlide?: number;
}

const splitItems = (items: React.ReactElement[], itemPerSlide: number) => {
  const slides = [];
  for (let i = 0; i < items.length; i += itemPerSlide) {
    slides.push(items.slice(i, i + itemPerSlide));
  }
  return slides;
};

export default function Carousel({ items, itemPerSlide = 3 }: Props) {
  const [index, setIndex] = useState(0);
  const slides = splitItems(items, itemPerSlide);

  return (
    <div className={twMerge("w-full h-full", "flex flex-col items-center justify-center gap-y-5", "overflow-x-hidden")}>
      <div className={twMerge("relative", "w-full h-full")}>
        {slides.map((slide, i) => (
          <CarouselItem key={i} index={{ carousel: index, item: i }} items={slide} />
        ))}
      </div>
      <CarouselDots length={slides.length} setIndex={setIndex} index={index} />
    </div>
  )

}
