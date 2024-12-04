"use client"

import { twMerge } from "tailwind-merge";
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
}

export default function Reveal({ children, className, duration = 0.5, delay = 0.5, x = 0, y = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (isInView) animation.start("visible")
  }, [isInView]);

  return <div ref={ref} className={twMerge("relative", className)}>
    <motion.div variants={{ hidden: { x: x || -20, y: y || 20, opacity: 0 }, visible: { x: 0, y: 0, opacity: 100 } }}
      transition={{ duration: duration, delay: delay }}
      animate={animation} initial="hidden"
    >
      {children}
    </motion.div>
  </div>
}


