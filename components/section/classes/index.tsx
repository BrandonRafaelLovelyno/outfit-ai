import TitledSection from "@/components/container/titled-section";
import ClassesTitle from "./title";
import ClassCard from "@/components/container/class-card";

export default function ClassesSection() {
  return <TitledSection title={<ClassesTitle />}>
    <ClassCard clothClass="Short Sleeve Outwear" percentage={10} />
  </TitledSection>
}
