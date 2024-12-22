import { useModelInput } from "@/hooks/useModelInput";
import { AnimatePresence, motion } from "framer-motion";
import DemoResult from "./result";
import DemoInformation from "./information";
import { twMerge } from "tailwind-merge";

const MOTION_PROPS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.5, delay: 0 } },
};

export default function InformationAndResult() {
  const { results } = useModelInput();

  return (
    <AnimatePresence mode="popLayout">
      {results ? (
        <motion.div {...MOTION_PROPS} key="results" className={twMerge("max-w-[800px] w-fit")}>
          <DemoResult />
        </motion.div>
      ) : (
        <motion.div {...MOTION_PROPS} key="information" className={twMerge("w-[450px]")}>
          <DemoInformation />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
