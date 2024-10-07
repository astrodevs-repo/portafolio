import Container from "../../Container/Container";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";
import { itemsClient } from "../../../data/Home";
import React from "react";

const SkillsSection = React.memo(function SkillsSection({ index }) {
  return (
    <section className="" id={index}>
      <Container>
        <Title
          text={"Nuestras Herramientas"}
          textColor={"text-blackCeniza italic font-Baskerville"}
        />
      </Container>
      <MovingText right={"0%"} left={"-100%"} items={itemsClient} extra={"gap-20 "} />
    </section>
  );
});
export default SkillsSection;
