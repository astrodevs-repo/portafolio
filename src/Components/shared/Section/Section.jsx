import Container from "../../Container/Container";

const Section = ({ id, children, bg, title, textColor }) => {
  return (
    <section className={`w-full h-fit-content ${bg}`} id={id}>
      <Container>
        <h1 className={`${textColor}`}>{title}</h1>
        {children}
      </Container>
    </section>
  );
};
export default Section;
