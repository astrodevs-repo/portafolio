import ContactUs from "./form/Form";
import Text from "../shared/Text";
import TextFooter from "../shared/TextFooter";
import SubTitleItalic from "../shared/SubTitleItalic";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import React from "react";
import Section from "../shared/Section/Section";

import { FaLinkedin } from "react-icons/fa";

const Footer = React.memo(function Footer() {
  return (
    <React.Fragment>
      <Section
        contentPosition={"grid grid-cols-1 sm:grid-cols-2 gap-20 items-center justify-center "}
        index={"contactanos"}
      >
        <section className="flex flex-col gap-10 sm:gap-5">
          <Title
            text={"Contactanos"}
            textColor={"text-blackCeniza font-medium dark:text-white font-Baskerville"}
          />

          <Text
            textColor={"text-blackCeniza dark:text-white"}
            content={
              "En  Neurons, nos comprometemos a ofrecer soluciones digitales de primera clase que ayudan a nuestros clientes a alcanzar sus objetivos comerciales en el mundo digital. Si está buscando una agencia que combine experiencia técnica, creatividad y visión estratégica, ¡estamos aquí para ayudarle a lograrlo!"
            }
          />
          <p
            className={`text-blackCeniza dark:text-white font-Poppins leading-[40px]   text-xl sm:text-lg: md:text-xl lg:text-2xl  py-10 w-3/4 `}
          >
            ¡Gracias por considerar Neurons como su socio digital!
          </p>
        </section>
        <ContactUs />
      </Section>

      <footer
        className="bg-gradient-to-tr  from-BlueNeurons/50 via-[#e9eeff] to-[#e9eeff] dark:bg-gradient-to-tr 
        dark:from-dark-BlueNeurons/10 dark:via-gray-800 dark:to-gray-800 h-full sm:h-[70vh] flex flex-col justify-end w-full px-5 sm:px-10 md:px-5 lg:px-20"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 w-full my-10 gap-10 sm:gap-0">
          <SubTitleItalic text={"Neurons"} textColor={"text-BlueNeurons"} extra={"textBas"} />
          <section className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 w-full">
            {footerContent.map((section, index) => (
              <section key={index}>
                <SubTitle text={section.title} extra={"font-medium mb-5"} />
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, j) => (
                    <TextFooter content={link.text} key={j} extra={"mb-2"} />
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </section>

        <section className="sm:flex sm:items-center sm:justify-between w-full py-5 border-t-2">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {footerInfo.copyright}
            <span className="">{footerInfo.poweredBy}</span>
          </p>

          <ul className="flex mt-4 sm:justify-center sm:mt-0">
            {footerInfo.socialLinks.map(({ url, icon, label }, index) => (
              <li
                key={index}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>

                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </React.Fragment>
  );
});
const footerContent = [
  {
    title: "Nuestros Servicios",
    links: [
      { text: "Desarrollo Web" },
      { text: "Diseño UX/UI" },
      { text: "Data Science y Data Analytics" },
      { text: "Creación de Bases de Datos" },
      { text: "Blockchain" },
      { text: "Desarrollo de Aplicaciones Móviles" },
      { text: "Google Ads y Posicionamiento SEO" },
      { text: "Mantenimiento y Soporte" },
    ],
  },
  {
    title: "Encuentranos",
    links: [
      {
        text: "Martín Zapata 488, Mendoza Capital",
        url: "",
      },
      {
        text: "Mendoza, Argentina",
        url: "",
      },
      {
        text: "Telefono +54 9 261 233-6104",
        url: "",
      },
      {
        text: "Email contacto@neurons.com",
        url: "",
      },
    ],
  },
];

const socialLinks = [
  // {
  //   icon: <FaFacebook />,
  //   url: "#",
  //   label: "Facebook page",
  // },
  // {
  //   icon: <FaDiscord />,
  //   url: "#",
  //   label: "Discord community",
  // },
  // {
  //   icon: <FaXTwitter />,
  //   url: "#",
  //   label: "Twitter page",
  // },
  // {
  //   icon: <FaGithub />,
  //   url: "#",
  //   label: "GitHub account",
  // },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/neurons-soluciones-digitales/about/",
    label: "Dribbble account",
  },
];

const footerInfo = {
  copyright: "© 2024 Neurons",

  socialLinks: socialLinks,
};

export default Footer;
