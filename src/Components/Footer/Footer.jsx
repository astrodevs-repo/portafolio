import Logo from "../shared/Logo";

import PropTypes from "prop-types";
import SubTitle from "../shared/SubTitle";
import Section from "../shared/Section/Section";
import Title from "../shared/Title";
import Modal from "../shared/Modal/Modal";
import ContactUs from "./form/Form";

const Footer = () => {
  return (
    <div className=" w-full">
      <Section bg={"bg-[#89b8ffcc]"} title={""} id={"aboutus"}>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Title
            textColor={"text-[#c5fcff]"}
            text={
              "Somos una creativa y talentoso equipo de desarrolladores radicados en Mendoza Argentina"
            }
          />
          <article className="flex flex-col justify-between">
            <SubTitle
              text={
                "lorem Las comillas invertidas «`» son interpretadas como sustitución de comandos , es decir, los comandos que estén dentro serán pasados al comando que lo precede."
              }
            />

            <section className="flex justify-end">
              <Modal title={"Contactanos"}>
                <ContactUs />
              </Modal>
            </section>
          </article>
        </section>
      </Section>
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
    </div>
  );
};
Footer.propTypes = {
  id: PropTypes.node,
};

export default Footer;
