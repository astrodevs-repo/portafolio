import Container from "../../Container/Container";
import Inspector from "../../shared/Inspector/Inspector";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";

import { motion } from "framer-motion";

export default function SkillsSection({ index, onObserver }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section className="" id="skills">
        <Container>
          <Title text={"Nuestras Skills"} />
        </Container>
        <MovingText right={"0%"} left={"-100%"} />
      </motion.section>
    </Inspector>
  );
}
