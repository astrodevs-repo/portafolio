import React from "react";
import TextPrincipal from "./TextPrincipal";
import ButtonsSection from "./ButtonsSection";
import SubTitle from "../../shared/SubTitle";

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
      <TextPrincipal />
      <SubTitle
        text={
          "Enfrentamos cada desafío con un toque fresco y creativo. Nuestra capacidad para adaptarnos y nuestra pasión por la innovación nos permiten ofrecerte soluciones digitales personalizadas que no solo cumplen, sino que superan tus expectativas."
        }
        extra={"w-[90%] sm:w-3/4 text-center hidden sm:flex"}
      />
      <ButtonsSection />
    </section>
  );
});

export default Header;
