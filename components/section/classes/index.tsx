import TitledSection from "@/components/container/titled-section";
import ClassesTitle from "./title";
import Carousel from "./carousel";
import { twMerge } from "tailwind-merge";
import { CLOTH_CLASSES } from "@/constant/bounding-box";
import ClassCard from "@/components/container/class-card";

const getAllCard: () => React.ReactElement[] = () => {
  const cards: React.ReactElement[] = [];

  CLOTH_CLASSES.forEach((clothClass, index) => {
    cards.push(
      <div className={twMerge("h-100")}>
        <ClassCard key={index} clothClass={clothClass} />
      </div>
    )
  })

  return cards;
}

export default function ClassesSection() {
  const cards = getAllCard();
  return <TitledSection title={<ClassesTitle />}>
    <div className={twMerge("h-[350px]")}>
      <Carousel items={cards} itemPerSlide={7} />
    </div>
  </TitledSection>
}
