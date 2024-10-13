import React, { lazy, Suspense } from "react";
import SkeletonText from "../../shared/Skeleton/Text";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import { scrollToSection } from "../../../utils/functions";
import SkeletonButton from "../../shared/Skeleton/Button";

const SubTitle = lazy(() => import("../../shared/SubTitle"));
import { motion } from "framer-motion";

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
        <motion.p className="flex flex-wrap sm:px-40 justify-center text-center items-center gap-2 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-Baskerville text-blackCeniza dark:text-white ">
          Transformando Ideas en Experiencias Digitales Extraordinarias
        </motion.p>
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

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
        <Suspense fallback={<SkeletonButton />}>
          <ButtonSimple
            textColor={"text-blackCeniza  "}
            text={"Nuestros Servicios"}
            func={() => scrollToSection("quienessomos")}
            bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent "}
            extra={" w-full min-w-60"}
          />
        </Suspense>
        <Suspense fallback={<SkeletonButton />}>
          <ButtonSimple
            textColor={"text-blackCeniza"}
            text={"Quienes somos"}
            bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent  "}
            func={() => scrollToSection("aboutus")}
            extra={" w-full min-w-60 flex justify-center gap-10"}
          />
        </Suspense>
      </section>
    </section>
  );
});

export default Header;
