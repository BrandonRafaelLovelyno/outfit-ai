import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
}

export default function RevealOnPresence({ children, x = 0, y = 20, duration = 0.5, delay = 0 }: Props) {
  return (
    <AnimatePresence>
      <motion.div initial={{ x, y, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 100 }}
        exit={{ x, y, opacity: 0 }} transition={{ duration, delay }}
        key={Math.random()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 
