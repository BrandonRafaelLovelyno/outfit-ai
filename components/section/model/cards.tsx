import ModelCard from "@/components/container/model-card"
import Reveal from "@/components/framer-motion/reveal-on-scroll"
import { IconType } from "react-icons"

interface Props {
  cards: { title: string, description: string, Icon: IconType }[]
}

export default function ModelCards({ cards }: Props) {
  return <div className="w-full flex flex-row gap-x-8">
    {cards.map((card, index) => (<Reveal key={index} x={-(index + 1) * 400} y={0} delay={(index + 1) * 0.3} duration={(index + 1) * 0.5} className="flex-1"><ModelCard  {...card} /></Reveal>))}
  </div>
}
