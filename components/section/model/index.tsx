import TitledSection from "@/components/container/titled-section"
import ModelTitle from "./title"
import { IconType } from "react-icons"
import { IoLayers } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDataset } from "react-icons/md";
import ModelCard from "@/components/container/model-card";
import { twMerge } from "tailwind-merge";
import Reveal from "@/components/framer-motion/reveal-on-scroll";

const MODEL_CARDS: { title: string, description: string, Icon: IconType }[] = [
  {
    title: "A Faster R-CNN",
    description: "A deep convolutional network used to detect and classify specific clothing class",
    Icon: IoLayers
  },
  {
    title: "Resnet50 Backbone",
    description: "A strong feature extractor to capture complex visual patterns from clothing images",
    Icon: FaMagnifyingGlass
  }, {
    title: "DeepFashion2 Dataset",
    description: "A large-scale dataset with rich annotations for fashion understanding",
    Icon: MdDataset
  }
]

export default function ModelSection() {
  return <TitledSection title={<ModelTitle />}>
    <div className={twMerge("w-full", "flex flex-row gap-x-8")}>
      {MODEL_CARDS.map((card, index) => (<Reveal key={index} x={-(index + 1) * 400} y={0} delay={(index + 1) * 0.3} duration={(index + 1) * 0.5} className="flex-1"><ModelCard  {...card} /></Reveal>))}
    </div>
  </TitledSection>
}
