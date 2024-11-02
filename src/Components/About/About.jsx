import React from "react";
import { motion } from "framer-motion";
import Text from "../shared/Text";
import Container from "../Container/Container";
import SubTitle from "../shared/SubTitle";
import { about } from "../../data/Home";
import Title from "../shared/Title";
import SubTitleItalic from "../shared/SubTitleItalic";

const About = React.memo(function About({ index }) {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }, // Animación al salir de vista
    transition: { duration: 1 },
    viewport: { once: false },
  };

  return (
    <motion.section id={index} className="grid grid-cols-1 max-w-screen" {...animationProps}>
      <section className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32  3xl:px-80 flex flex-col gap-10 pt-20 pb-0 sm:pb-20">
        <Title text={"Quienes Somos"} textColor={"text-blackCeniza"} extra={"font-Baskerville "} />
        <SubTitleItalic text={about[0].text} textColor={"text-blackCeniza"} />
      </section>
      {about.slice(1, 4).map((slide, slideIndex) => (
        <motion.section key={slideIndex} className="grid grid-cols-1 sm:grid-cols-2">
          {slideIndex % 2 === 0 ? (
            <>
              <motion.article
                className="bg-transparent p-0 sm:p-5 flex flex-col justify-center items-center col-end w-full"
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 50, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }} // Animación de salida
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <Container>
                  <SubTitle
                    text={slide.title}
                    extra={"font-Baskerville italic sm:text-end  text-center"}
                  />
                  <Text
                    content={slide.text}
                    textColor={"text-blackCeniza"}
                    w={"w-full"}
                    extra={"sm:text-end  text-center"}
                  />
                </Container>
              </motion.article>
              <img src={slide.image} alt="" className="hidden sm:flex" />
            </>
          ) : (
            <>
              <img src={slide.image} alt="" className="hidden sm:flex" />
              <motion.article
                className="bg-transparent p-0 sm:p-5  flex flex-col justify-center items-center col-start w-full"
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 50, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <Container>
                  <SubTitle
                    text={slide.title}
                    extra={"font-Baskerville italic sm:text-start text-center"}
                  />
                  <Text
                    content={slide.text}
                    textColor={"text-blackCeniza"}
                    w={"w-full"}
                    extra={"sm:text-start  text-center"}
                  />
                </Container>
              </motion.article>
            </>
          )}
        </motion.section>
      ))}
    </motion.section>
  );
});

export default About;
