import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  imageUrl: string;
}

export default function ImageViewer({ imageUrl }: Props) {
  return <div className={twMerge("relative", "w-full h-full", "border-2 border-secondary", "rounded-xl")} >
    <Image src={imageUrl} layout="fill" objectFit="contain" alt={imageUrl} />
  </div>
}

