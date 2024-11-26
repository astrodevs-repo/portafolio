import ContactUs from "./form/Form";
import Text from "../shared/Text";
import TextFooter from "../shared/TextFooter";
import SubTitleItalic from "../shared/SubTitleItalic";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import Container from "../Container/Container";

const Footer = React.memo(function Footer({ footerContent, footerInfo, socialLinks, form }) {
  const iconMapping = {
    FaLinkedin: <FaLinkedin />,
    // Puedes agregar más íconos aquí según sea necesario
  };

  return (
    <section
      className="flex flex-col justify-center items-center bg-gradient-to-tr  from-BlueNeurons/50 via-[#e9eeff] to-[#e9eeff] dark:bg-gradient-to-tr 
        dark:from-dark-BlueNeurons/10 dark:via-gray-800 dark:to-gray-800"
    >
      <section className="bg-white w-full dark:bg-blackCeniza">
        <Container>
          <section
            className="grid grid-cols-1 sm:grid-cols-2 gap-20 items-center justify-center  "
            id="contactanos"
          >
            <section className="flex flex-col gap-10 sm:gap-5">
              <Title
                text={form?.title}
                textColor={"text-blackCeniza font-medium dark:text-white font-Baskerville"}
              />

              <Text textColor={"text-blackCeniza dark:text-white"} content={form?.content} />
              <p
                className={`text-blackCeniza dark:text-white font-Poppins leading-[40px]   text-xl sm:text-lg: md:text-xl lg:text-2xl  py-10 w-3/4 `}
              >
                {form?.finally}
              </p>
            </section>
            <ContactUs {...form} />
          </section>
        </Container>
      </section>

      <footer className="max-w-[1600px] h-full sm:h-[70vh] flex flex-col justify-end w-full px-5 sm:px-10 md:px-5 lg:px-20">
        <section className="grid grid-cols-1 sm:grid-cols-2 w-full my-10 gap-10 sm:gap-0">
          <SubTitleItalic text={"Neurons"} textColor={"text-[#6352ff]"} extra={"font-extrabold"} />
          <section className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 w-full">
            {footerContent?.map((section, index) => (
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
            {footerInfo?.copyright}
          </p>

          <ul className="flex mt-4 sm:justify-center sm:mt-0">
            {socialLinks?.map(({ url, icon, label }, index) => (
              <li
                key={index}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {/* Renderizamos el ícono dinámicamente usando el objeto `iconMapping` */}
                  {iconMapping[icon]}
                </a>
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </section>
  );
});

export default Footer;
