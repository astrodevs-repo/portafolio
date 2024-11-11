import React from "react";
import Container from "../../Container/Container";
import SubTitleItalic from "../SubTitleItalic";
import Title from "../Title";
import { motion } from "framer-motion";
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
      id={index}
      {...animationProps}
    >
      <Container>
        <Title text={title} textColor={"text-blackCeniza"} extra={"font-Baskerville "} />
        {subtitle ? <SubTitleItalic text={subtitle} textColor={"text-blackCeniza"} /> : ""}
        <section className={contentPosition}>{children}</section>
      </Container>
    </motion.section>
  );
});

export default Section;
