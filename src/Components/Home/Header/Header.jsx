import React, { lazy } from "react";
import ContactUs from "../../Footer/form/Form";
import Text from "../../shared/Text";
import Title from "../../shared/Title";

const SubTitle = lazy(() => import("../../shared/SubTitle"));

const Header = React.memo(function Header({ index }) {
  return (
    <section
      id={index}
      className="min-h-screen bg-gradient-to-bl from-BlueNeurons/50 via-[#e9eeffe2]  to-[#e9eeff] dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 sm:gap-10 flex justify-center sm:justify-center items-center relative px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32  3xl:px-[200px] pt-28 sm:pt-0  "
    >
      <section className="grid grid-cols-1 sm:grid-cols-3 w-full gap-0 sm:gap-10 max-w-[1900px]">
        <section className={`flex flex-col justify-center items-start gap-5 col-span-2`}>
          <SubTitle
            text={"Desarrollo de software a medida para sitios web y apps móviles"}
            extra={"text-start w-[70%]"}
          />
          <Title
            text={"Somos Neurons, tu socio en soluciones digitales"}
            extra={"text-start font-normal font-Baskerville"}
          />
          <Text
            content={
              "En **Neurons**, somos expertos en **desarrollo de software a medida**, especializados en **páginas web modernas** y **aplicaciones móviles personalizadas**. Creamos soluciones digitales innovadoras que mejoran la experiencia de usuario y optimizan los procesos de negocio."
            }
            extra={"text-start"}
          />
          <Text
            content={
              "Desde un **sitio web corporativo** hasta una **tienda online** o una **app móvil personalizada** para **Android** o **iOS**, nuestro equipo de profesionales está comprometido con el éxito de tu proyecto. Combinamos **creatividad**, **tecnología avanzada** y un enfoque centrado en el **usuario** para superar tus expectativas."
            }
            extra={"text-start"}
          />
        </section>

        <section className="flex flex-col gap-5 py-5 sm:py-0">
          <SubTitle text={"Dejanos tu consulta"} />
          <section className=" bg-white dark:bg-blackCeniza p-5 rounded-md">
            <ContactUs />
          </section>
        </section>
      </section>
    </section>
  );
});

export default Header;
