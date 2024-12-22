import TitledSection from "@/components/container/titled-section";
import ClassesTitle from "./title";
import Carousel from "./carousel";
import { twMerge } from "tailwind-merge";
import { CLOTH_CLASSES } from "@/constant/bounding-box";
import ClassCard from "@/components/container/class-card";
import RevealOnScroll from "@/components/framer-motion/reveal-on-scroll";

const getAllCard: () => React.ReactElement[] = () => {
  const cards: React.ReactElement[] = [];

  CLOTH_CLASSES.forEach((clothClass, index) => {
    cards.push(
      <RevealOnScroll className={twMerge("h-100")} delay={Math.random() * 0.5 + 0.5} x={0} y={20} >
        <ClassCard key={index} clothClass={clothClass} />
      </RevealOnScroll>
    )
  })

  return cards;
}

export default function ClassesSection() {
  const cards = getAllCard();
  return <TitledSection id={"class"} title={<ClassesTitle />}>
    <div className={twMerge("h-[350px]")}>
      <Carousel items={cards} itemPerSlide={7} />
    </div>
  </TitledSection>
}
