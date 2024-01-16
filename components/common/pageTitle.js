import SectionLayout from "@/components/layouts/sectionLayout";
import ContainerLayout from "@/components/layouts/containerLayout";
import Image from "next/image";

export default function PageTitle({ title, subTitle }) {
  return (
    <SectionLayout extraClass="bg-gradient1 text-neutral-content">
      <ContainerLayout extraClass="w-full h-[450px] mt-14 flex flex-col justify-center items-center text-center">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </ContainerLayout>
    </SectionLayout>
  );
}
