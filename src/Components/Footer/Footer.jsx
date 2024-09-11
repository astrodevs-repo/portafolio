import ContactUs from "./form/Form";
import { motion } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";
import { FaLinkedin } from "react-icons/fa";
import Text from "../shared/Text";

import TextFooter from "../shared/TextFooter";
import Container from "../Container/Container";
import SubTitleItalic from "../shared/SubTitleItalic";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const Footer = ({ index, onObserver }) => {
  return (
    <>
      <section className="bg-transparent pb-20 pt-0 sm:pt-20 " id="contactanos">
        <Inspector index={index} onObserver={onObserver}>
          <Container>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-20 items-center justify-center pt-20 ">
              <motion.section className="flex flex-col gap-10 sm:gap-5">
                <Title
                  text={"Contactanos"}
                  textColor={"text-blackCeniza  dark:text-white font-Baskerville"}
                />

                <Text
                  textColor={"text-blackCeniza dark:text-white"}
                  content={
                    "En  Neurons, nos comprometemos a ofrecer soluciones digitales de primera clase que ayudan a nuestros clientes a alcanzar sus objetivos comerciales en el mundo digital. Si está buscando una agencia que combine experiencia técnica, creatividad y visión estratégica, ¡estamos aquí para ayudarle a lograrlo!"
                  }
                />
                <p
                  className={`text-blackCeniza dark:text-white font-Poppins leading-[40px]   text-xl sm:text-lg: md:text-xl lg:text-2xl font-bold py-10 w-3/4 `}
                >
                  ¡Gracias por considerar Neurons como su socio digital!
                </p>
              </motion.section>

              <ContactUs />
            </section>
          </Container>
        </Inspector>
      </section>
      <footer
        className="bg-gradient-to-tr  from-BlueNeurons/50 via-[#e9eeff] to-[#e9eeff] dark:bg-gradient-to-tr 
        dark:from-dark-BlueNeurons/10 dark:via-gray-800 dark:to-gray-800 h-full sm:h-[70vh] flex flex-col justify-end w-full px-5 sm:px-10 md:px-5 lg:px-20"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 w-full my-10 gap-10 sm:gap-0">
          <SubTitleItalic text={"Neurons"} textColor={"text-BlueNeurons"} extra={"textBas"} />

          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 ">
            {footerContent.map((section, index) => (
              <div key={index}>
                <SubTitle text={section.title} extra={"font-extrabold mb-5"} />
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, j) => (
                    <TextFooter content={link.text} key={j} extra={"mb-2"} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="sm:flex sm:items-center sm:justify-between w-full py-5 border-t-2">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {footerInfo.copyright}
            <p className="">{footerInfo.poweredBy}</p>
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {footerInfo.socialLinks.map(({ url, icon, label }, index) => (
              <a
                href={url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                {icon}
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
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
