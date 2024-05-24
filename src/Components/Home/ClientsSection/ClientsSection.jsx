import Container from "../../Container/Container";
import Title from "../../shared/Title";
import MovingText from "../../shared/velocity/Velocity";

export default function SkillsSection() {
  return (
    <section className="">
      <Container>
        <Title text={"Nuestras Skills"} />
      </Container>
      <MovingText right={"0%"} left={"-100%"} />
    </section>
  );
}
