import React, { lazy } from "react";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import { scrollToSection } from "../../../utils/functions";
import ContactUs from "../../Footer/form/Form";
import Text from "../../shared/Text";
import Title from "../../shared/Title";

const SubTitle = lazy(() => import("../../shared/SubTitle"));

const Header = React.memo(function Header({ index }) {
  return (
    <section
      id={index}
      className="min-h-screen bg-gradient-to-bl from-BlueNeurons/50 via-[#e9eeffe2]  to-[#e9eeff] dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 grid grid-cols-1 sm:grid-cols-2 pt-24  sm:gap-10 justify-center sm:justify-center items-center relative px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32  3xl:px-80 w-full gap-20"
    >
      <section className={`flex flex-col gap-10`}>
        <SubTitle text={"DESARROLLO DE SOFTWARE A MEDIDA"} extra={"text-start font-semibold"} />

        {/* <h1 className="flex font-display flex-wrap  justify-center text-start items-center gap-2 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-Baskerville text-blackCeniza dark:text-white ">
          Transformando Ideas en Experiencias Digitales Extraordinarias
        </h1> */}
        <Title
          text={"Nosotros somos neurons, una empresa de desarrollo de software"}
          extra={"text-start"}
        />
        <Text
          content={
            "Enfrentamos cada desafío con un toque fresco y creativo. Nuestra capacidad para adaptarnos y nuestra pasión por la innovación nos permiten ofrecerte soluciones digitales personalizadas que no solo cumplen, sino que superan tus expectativas."
          }
          extra={" text-start"}
        />

        <section className=" hidden grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
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
      <section className=" flex flex-col gap-5 py-5 sm:py-0">
        <SubTitle text={"Dejanos tu consulta"} />
        <section className=" bg-white dark:bg-blackCeniza p-5 rounded-md">
          <ContactUs />
        </section>
      </section>
    </section>
  );
});

export default Header;
