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
    <section className="flex justify-center">
      <Container>
        <motion.section id={index} className="grid grid-cols-1 max-w-screen " {...animationProps}>
          <section className=" flex flex-col gap-10 pt-20 pb-0 sm:pb-20">
            <Title
              text={"Quienes Somos"}
              textColor={"text-blackCeniza"}
              extra={"font-Baskerville "}
            />
            <Text content={about[0].text} textColor={"text-blackCeniza"} />
          </section>
          <section className="grid grid-cols-3 gap-5 divide-white divide-x-2">
            {about.slice(1, 4).map((slide, slideIndex) => (
              <motion.section key={slideIndex} className="flex flex-col p-5 gap-5">
                <SubTitle text={slide.title} extra={"font-Baskerville  text-center font-medium"} />
                <Text
                  content={slide.text}
                  textColor={"text-blackCeniza"}
                  w={"w-full"}
                  extra={"text-center"}
                />
              </motion.section>
            ))}
          </section>
        </motion.section>
      </Container>
    </section>
  );
});
export default About;
