import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const SECTIONS: { title: string; id: string }[] = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Model",
    id: "model",
  },
  {
    title: "Demo",
    id: "demo",
  },
];

export default function Navbar() {
  return (
    <nav
      className={twMerge("w-full", "flex flex-row justify-between", "py-20")}
    >
      <Image src={"/logo.svg"} alt="logo" height={75} width={150} />
      <div className={twMerge("flex flex-row gap-x-16")}>
        {SECTIONS.map((sec, idx) => (
          <Link
            key={idx}
            href={`#${sec.id}`}
            className={twMerge("text-secondary font-bold text-xl")}
          >
            {sec.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
