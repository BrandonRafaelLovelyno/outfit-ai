import TitledSection from "@/components/container/titled-section"
import ModelTitle from "./title"
import { IconType } from "react-icons"
import { IoLayers } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDataset } from "react-icons/md";
import ModelCard from "@/components/container/model-card";
import { twMerge } from "tailwind-merge";
import Reveal from "@/components/framer-motion/reveal-on-scroll";
import ModelCards from "./cards";

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
      <ModelCards cards={MODEL_CARDS} />
    </div>
  </TitledSection>
}
