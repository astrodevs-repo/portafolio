import React, { lazy, Suspense } from "react";
import ButtonsSection from "./ButtonsSection";
import SkeletonText from "../../shared/Skeleton/Text";
const SubTitle = lazy(() => import("../../shared/SubTitle"));
const TextPrincipal = lazy(() => import("./TextPrincipal"));

const Header = React.memo(function Header({ index }) {
  return (
    <section
      id={index}
      className={`min-h-screen bg-gradient-to-bl from-BlueNeurons/50 via-[#e9eeffe2]  to-[#e9eeff] dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 flex flex-col gap-5 sm:gap-10 justify-center sm:justify-center items-center relative`}
    >
      <Suspense fallback={<SkeletonText width={"w-[50vw]"} height={"h-5"} />}>
        <SubTitle
          text={"Agencia de Tecnología e Innovación"}
          extra={"px-10 text-center font-semibold"}
        />
      </Suspense>
      <Suspense
        fallback={
          <section className="w-full justify-center items-center flex flex-col gap-2">
            <SkeletonText width={"w-[80vw]"} height={"h-5"} />
            <SkeletonText width={"w-[70vw]"} height={"h-5"} />
          </section>
        }
      >
        <TextPrincipal />
      </Suspense>
      <Suspense
        fallback={
          <section className="w-full flex flex-col gap-2 justify-center items-center">
            <SkeletonText width={"w-[90vw]"} height={"h-5"} />
            <SkeletonText width={"w-[90vw]"} height={"h-5"} />
            <SkeletonText width={"w-[50vw]"} height={"h-5"} />
          </section>
        }
      >
        <SubTitle
          text={
            "Enfrentamos cada desafío con un toque fresco y creativo. Nuestra capacidad para adaptarnos y nuestra pasión por la innovación nos permiten ofrecerte soluciones digitales personalizadas que no solo cumplen, sino que superan tus expectativas."
          }
          extra={"w-[90%] sm:w-3/4 text-center hidden sm:flex"}
        />
      </Suspense>

      <ButtonsSection />
    </section>
  );
});

export default Header;
