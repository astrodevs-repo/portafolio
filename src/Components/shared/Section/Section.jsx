import Container from "../../Container/Container";
import Inspector from "../Inspector/Inspector";
import SubTitleItalic from "../SubTitleItalic";
import Title from "../Title";
import { motion } from "framer-motion";

const Section = ({ id, children, bg, title, index, currentStep, extra, subtitle, onObserver }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        className={`w-full h-fit-content ${bg} py-5 sm:py-20 ${extra}`}
        id={id}
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={index === currentStep ? { opacity: 1 } : { opacity: 0 }} // Animate opacity based on currentStep
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust the transition properties as needed
      >
        <Container>
          <Title text={title} textColor={"text-blackCeniza"} extra={"font-LusitanaBold"} />
          {subtitle ? <SubTitleItalic text={subtitle} /> : ""}
          {children}
        </Container>
      </motion.section>
    </Inspector>
  );
};

export default Section;
