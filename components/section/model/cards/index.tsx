import ModelCard from "@/components/section/model/cards/card"
import RevealOnScroll from "@/components/framer-motion/reveal-on-scroll"
import { IconType } from "react-icons"

interface Props {
  cards: { title: string, description: string, Icon: IconType }[]
}

export default function ModelCards({ cards }: Props) {
  return <div className="w-full flex flex-row gap-x-8">
    {cards.map((card, index) => (<RevealOnScroll key={index} x={-(index + 1) * 400} y={0} delay={(index + 1) * 0.3} duration={(index + 1) * 0.5} className="flex-1"><ModelCard  {...card} /></RevealOnScroll>))}
  </div>
}
