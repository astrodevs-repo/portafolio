import Container from "../../Container/Container";
import Inspector from "../../shared/Inspector/Inspector";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";

import { motion } from "framer-motion";

export default function SkillsSection({ index, onObserver, currentStep }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        className="min-h-[650px]"
        id="skills"
        initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: 200 }}
        animate={
          index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 } : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Container>
          <Title text={"Nuestras Skills"} />
        </Container>
        <MovingText right={"0%"} left={"-100%"} />
      </motion.section>
    </Inspector>
  );
}
