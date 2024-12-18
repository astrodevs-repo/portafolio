import React from "react";
import Container from "../../Container/Container";
import Title from "../Title";
import { motion } from "framer-motion";
import SubTitle from "../SubTitle";
const Section = React.memo(function Section({
  children,
  bg,
  title,
  index,
  extra,
  subtitle,
  contentPosition,
}) {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }, // Animación de salida
    transition: { duration: 1 },
    viewport: { once: false },
  };

  return (
    <motion.section
      className={`w-fit-content h-fit-content ${bg} py-5 sm:py-5 ${extra} flex justify-center`}
      {...animationProps}
    >
      <Container>
        <section id={index} className="flex flex-col gap-5 pt-10 sm:pt-40">
          <Title text={title} textColor={"text-blackCeniza"} extra={"font-Baskerville "} />
          {subtitle ? <SubTitle text={subtitle} textColor={"text-blackCeniza"} extra={""} /> : ""}
        </section>
        <section className={`${contentPosition} `}>{children}</section>
      </Container>
    </motion.section>
  );
});

export default Section;
