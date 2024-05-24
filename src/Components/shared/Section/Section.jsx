import Container from "../../Container/Container";
import Title from "../Title";

const Section = ({ id, children, bg, title, textColor }) => {
  return (
    <section className={`w-full h-fit-content ${bg}`} id={id}>
      <Container>
        <Title text={title} />
        {children}
      </Container>
    </section>
  );
};
export default Section;
