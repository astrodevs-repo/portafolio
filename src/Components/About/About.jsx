import React from "react";
import { motion } from "framer-motion";
import Text from "../shared/Text";
import Container from "../Container/Container";
import SubTitle from "../shared/SubTitle";
import { about } from "../../data/Home";
import Title from "../shared/Title";

const About = React.memo(function About({ index }) {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 1 },
    viewport: { once: false },
  };

  return (
    <section className="flex flex-col justify-center items-center-">
      <Container>
        <motion.section id={index} className="grid grid-cols-1 " {...animationProps}>
          <section className=" flex flex-col gap-10 pt-20 pb-0 sm:pb-20">
            <Title
              text={"Quienes Somos"}
              textColor={"text-blackCeniza"}
              extra={"font-Baskerville text-center pb-0 sm:pb-20 "}
            />
            <SubTitle text={about[0].text} textColor={"text-blackCeniza"} extra={""} />
          </section>
        </motion.section>
      </Container>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        {about.slice(1, 3).map((slide, slideIndex) => (
          <motion.section
            key={slideIndex}
            className="flex flex-col gap-5 min-h-96 justify-center items-center"
            style={{
              backgroundImage: `url(${slide.image})`, // Aquí asumes que `slide.bgImage` es la URL de la imagen
              backgroundSize: "cover", // Para que la imagen cubra todo el contenedor
              backgroundPosition: "center", // Para centrar la imagen
              backgroundRepeat: "no-repeat", // Para evitar la repetición de la imagen
            }}
          >
            <section className="bg-black/50 h-full flex flex-col justify-center items-center px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32  3xl:px-[200px] ">
              <SubTitle text={slide.title} extra={"text-white text-center font-medium"} />
              <Text
                content={slide.text}
                textColor={"text-white"}
                w={"w-full"}
                extra={"text-center"}
              />
            </section>
          </motion.section>
        ))}
      </section>
    </section>
  );
});
export default About;
