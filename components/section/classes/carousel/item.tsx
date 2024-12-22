"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  index: { carousel: number; item: number };
  items: React.ReactElement[];
}

const VARIANTS: { [key: string]: { x: string | number } } = {
  left: {
    x: "-100%",
  },
  show: {
    x: 0,
  },
  right: {
    x: "100%",
  },
};

const getVariant = (index: number, currentIndex: number) => {
  if (index === currentIndex) {
    return "show";
  } else if (index < currentIndex) {
    return "left";
  } else {
    return "right";
  }
};

export default function CarouselItem({ index, items }: Props) {
  const animate = useMemo(
    () => getVariant(index.item, index.carousel),
    [index.carousel, index.item]
  );

  return (
    <motion.div
      className={twMerge(
        "absolute",
        "w-full h-fit",
        "flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-3"
      )}
      variants={VARIANTS}
      initial={"right"}
      animate={animate}
      transition={{ duration: 0.5 }}
    >
      {items.map((item) => item)}
    </motion.div>
  );
}
