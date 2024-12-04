import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function DemoTitle() {
  return (
    <div className={twMerge("flex flex-row items-center gap-x-3")}>
      <h2>Let</h2>
      <Image src={"/logo.svg"} width={120} height={120} alt="logo" />
      <h2>analyze your image</h2>
    </div>
  )
}
