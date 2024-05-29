import Logo from "../shared/Logo";
import ContactUs from "./form/Form";
import SubTitle from "../shared/SubTitle";

import { motion } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";
const Footer = ({ currentStep, index, onObserver }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section id="footer" className=" w-full">
        <section
          className="bg-gradient-to-t from-[#4f75ff] via-[#4f75ff] to-[#e9eeff] pt-80 pb-20 px-5 lg:px-40"
          title={""}
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-40">
            <motion.section
              initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", x: -200 }}
              animate={
                index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", x: 0 } : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <SubTitle
                textColor={"text-white"}
                text={
                  "En  Neurons, nos comprometemos a ofrecer soluciones digitales de primera clase que ayudan a nuestros clientes a alcanzar sus objetivos comerciales en el mundo digital. Si está buscando una agencia que combine experiencia técnica, creatividad y visión estratégica, ¡estamos aquí para ayudarle a lograrlo!"
                }
              />
              <p
                className={`text-black font-Poppins leading-[40px]   text-xl sm:text-lg: md:text-xl lg:text-2xl font-bold py-10 w-3/4 `}
              >
                ¡Gracias por considerar Neurons como su socio digital!
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", x: 200 }}
              animate={
                index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", x: 0 } : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex justify-end w-full"
            >
              <ContactUs />
            </motion.section>
          </section>
        </section>
        <footer className="bg-white  dark:bg-gray-900 ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Logo />
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 w-full flex justify-start">
              © 2023{" "}
              <a href="" className="hover:underline">
                Neurons
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </section>
    </Inspector>
  );
};

export default Footer;
