import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function ClassesTitle() {
  return (
    <div className={twMerge("flex flex-row items-center gap-x-3")}>
      <h2>The 13 classes</h2>
      <Image src={"/logo.svg"} width={120} height={120} alt="logo" />
      <h2>classifies</h2>
    </div>
  )
}
