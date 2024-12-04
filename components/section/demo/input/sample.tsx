import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function InputSample() {
  return <>
    <Image src={"/sample/brandon.png"} className={twMerge("absolute", "top-10 -right-36")} width={100} height={100} alt="first-sample" />
    <Image src={"/sample/brandon.png"} className={twMerge("absolute", "bottom-10 -left-36")} width={100} height={100} alt="first-sample" />
  </>
}
