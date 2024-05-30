import Container from "../../Container/Container";
import Title from "../Title";
import { motion } from "framer-motion";

const Section = ({ id, children, bg, title, index, currentStep }) => {
  return (
    <motion.section
      className={`w-full h-fit-content ${bg} py-20`}
      id={id}
      initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: 200 }}
      animate={index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Container>
        <Title text={title} />
        {children}
      </Container>
    </motion.section>
  );
};
export default Section;
