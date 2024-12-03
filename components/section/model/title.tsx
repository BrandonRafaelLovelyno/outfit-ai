import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function ModelTitle() {
  return (
    <div className={twMerge("flex flex-row items-center gap-x-3")}>
      <Image src={"/logo.svg"} width={120} height={120} alt="logo" />
      <h2>is built with</h2>
    </div>
  )
}
