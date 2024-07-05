import Container from "../../Container/Container";
import SubTitle from "../SubTitle";
import SubTitleItalic from "../SubTitleItalic";
import Title from "../Title";
import { motion } from "framer-motion";

const Section = ({ id, children, bg, title, index, currentStep, extra, subtitle }) => {
  return (
    <motion.section
      className={`w-full h-fit-content ${bg} py-10 sm:py-20 ${extra}`}
      id={id}
      initial={{ opacity: 1, color: "rgba(255, 255, 255, 0)", y: 100 }}
      animate={index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Container>
        <Title text={title} textColor={"text-blackCeniza"} extra={"font-LusitanaBold"} />
        <SubTitleItalic text={subtitle} />
        {children}
      </Container>
    </motion.section>
  );
};
export default Section;
