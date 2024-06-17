import ContactUs from "./form/Form";
import SubTitle from "../shared/SubTitle";

import { motion } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";

import { FaFacebook, FaDiscord, FaGithub, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Text from "../shared/Text";
import TextFooter from "../shared/TextFooter";
import Container from "../Container/Container";

const Footer = ({ index, onObserver }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section className="bg-gradient-to-t from-[#4f75ff] via-[#4f75ff] to-[#e9eeff] pt-80 pb-20 ">
        <Container>
          <section
            className="grid grid-cols-1 sm:grid-cols-2 gap-20 items-center "
            id="contactanos"
          >
            <motion.section>
              <Text
                textColor={"text-white"}
                content={
                  "En  Neurons, nos comprometemos a ofrecer soluciones digitales de primera clase que ayudan a nuestros clientes a alcanzar sus objetivos comerciales en el mundo digital. Si está buscando una agencia que combine experiencia técnica, creatividad y visión estratégica, ¡estamos aquí para ayudarle a lograrlo!"
                }
              />
              <p
                className={`text-black font-Poppins leading-[40px]   text-xl sm:text-lg: md:text-xl lg:text-2xl font-bold py-10 w-3/4 `}
              >
                ¡Gracias por considerar Neurons como su socio digital!
              </p>
            </motion.section>

            <ContactUs />
          </section>
        </Container>
      </section>

      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-col justify-start">
              <a href="/" className="flex items-center">
                <p className="font-bold text-xl text-[#31add5]">Neurons</p>
              </a>
              <Text content={"SOLUCIONES DIGITALES"} />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
              {footerContent.map((section, index) => (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {section.title}
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {section.links.map((link, j) => (
                      <li key={j} className="mb-4">
                        <a href={link.url} className="hover:underline">
                          <TextFooter content={link.text} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {footerInfo.copyright}
              <a href="https://flowbite.com/" className="hover:underline">
                {footerInfo.poweredBy}
              </a>
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {footerInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Inspector>
  );
};
const footerContent = [
  {
    title: "Encuentranos",
    links: [
      {
        text: "Martín Zapata 488, Mendoza Capital",
        url: "https://github.com/themesberg/flowbite",
      },
      {
        text: "Mendoza, Argentina",
        url: "https://github.com/themesberg/flowbite",
      },
      {
        text: "Telefono +542619621721",
        url: "https://github.com/themesberg/flowbite",
      },
      {
        text: "Email contacto@neurons.com",
        url: "https://github.com/themesberg/flowbite",
      },
    ],
  },

  // {
  //   title: "Seguinos",
  //   links: [
  //     {
  //       text: "Linkedin",
  //       url: "https://github.com/themesberg/flowbite",
  //     },
  //     {
  //       text: "Github",
  //       url: "https://github.com/themesberg/flowbite",
  //     },
  //     {
  //       text: "Discord",
  //       url: "https://github.com/themesberg/flowbite",
  //     },
  //   ],
  // },

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
];

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "#",
    label: "Facebook page",
  },
  {
    icon: <FaDiscord />,
    url: "#",
    label: "Discord community",
  },
  {
    icon: <FaXTwitter />,
    url: "#",
    label: "Twitter page",
  },
  {
    icon: <FaGithub />,
    url: "#",
    label: "GitHub account",
  },
  {
    icon: <FaDribbble />,
    url: "#",
    label: "Dribbble account",
  },
];

const footerInfo = {
  copyright: "© 2024 Neurons",

  socialLinks: socialLinks,
};

export default Footer;
