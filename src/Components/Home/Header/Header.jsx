import React, { lazy } from "react";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import { scrollToSection } from "../../../utils/functions";

const SubTitle = lazy(() => import("../../shared/SubTitle"));

const Header = React.memo(function Header({ index }) {
  return (
    <section
      id={index}
      className={`min-h-screen bg-gradient-to-bl from-BlueNeurons/50 via-[#e9eeffe2]  to-[#e9eeff] dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 flex flex-col gap-5 sm:gap-10 justify-center sm:justify-center items-center relative`}
    >
      <SubTitle
        text={"Agencia de Tecnología e Innovación"}
        extra={"px-10 text-center font-semibold"}
      />

      <h1 className="flex font-display flex-wrap sm:px-20 justify-center text-center items-center gap-2 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-Baskerville text-blackCeniza dark:text-white ">
        Transformando Ideas en Experiencias Digitales Extraordinarias
      </h1>
      <SubTitle
        text={
          "Enfrentamos cada desafío con un toque fresco y creativo. Nuestra capacidad para adaptarnos y nuestra pasión por la innovación nos permiten ofrecerte soluciones digitales personalizadas que no solo cumplen, sino que superan tus expectativas."
        }
        extra={"w-[90%] sm:w-3/4 text-center hidden sm:flex"}
      />

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
        <ButtonSimple
          textColor={"text-blackCeniza  "}
          text={"Nuestros Servicios"}
          func={() => scrollToSection("quienessomos")}
          bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent "}
          extra={" w-full min-w-60"}
        />
        <ButtonSimple
          textColor={"text-blackCeniza"}
          text={"Quienes somos"}
          bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent  "}
          func={() => scrollToSection("aboutus")}
          extra={" w-full min-w-60 flex justify-center gap-10"}
        />
      </section>
    </section>
  );
});

export default Header;
