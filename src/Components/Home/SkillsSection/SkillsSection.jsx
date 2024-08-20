import Container from "../../Container/Container";
import Inspector from "../../shared/Inspector/Inspector";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";
import { itemsClient } from "../../../data/Home";

import { motion } from "framer-motion";

export default function SkillsSection({ index, onObserver }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section className="" id="skills">
        <Container>
          <Title
            text={"Nuestras Herramientas"}
            textColor={"text-blackCeniza"}
            extra={"font-LusitanaBold"}
          />
        </Container>
        <MovingText right={"0%"} left={"-100%"} items={itemsClient} extra={"gap-20 "} />
      </motion.section>
    </Inspector>
  );
}
