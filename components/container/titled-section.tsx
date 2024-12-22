import { twMerge } from "tailwind-merge";

interface Props {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function TitledSection({ id, title, children }: Props) {
  return (
    <section id={id} className={twMerge("w-full h-full", "flex flex-col gap-y-8", "text-2xl text-secondary font-bold")}>
      {title}
      {children}
    </section>
  );
}
