import ParagprahCardTitle from "@/components/container/paragraph-card/title";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  Icon: IconType;
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}

export default function ParagraphCard({ title, Icon, children, backgroundColor, textColor }: Props) {
  return (
    <div className={twMerge("w-full", "flex flex-col gap-y-6", "p-8", "rounded-xl", "tracking-wider")} style={{ backgroundColor: backgroundColor, color: textColor }}>
      <ParagprahCardTitle title={title} Icon={Icon} textColor={textColor} />
      {children}
    </div>
  )
}
