import Container from "../../Container/Container";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";

import { motion } from "framer-motion";

function SkillsSection({ index, title, items }) {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false },
  };

  return (
    <motion.section id={index} {...animationProps} className="">
      <Container>
        <Title text={title} textColor={"text-blackCeniza font-Baskerville"} />
      </Container>

      <MovingText right={"0%"} left={"-100%"} items={items} extra={"gap-20 "} baseVelocity={-1} />
    </motion.section>
  );
}
export default SkillsSection;
