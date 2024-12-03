import { twMerge } from "tailwind-merge";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function TitledSection({ title, children }: Props) {
  return (
    <section className={twMerge("w-full h-full", "flex flex-col gap-y-8", "text-2xl text-secondary font-bold")}>
      {title}
      {children}
    </section>
  );
}
