import Container from "../../Container/Container";

const Section = ({ id, children, bg, title }) => {
  return (
    <section className={`w-full h-fit-content ${bg}`} id={id}>
      <Container>
        <h1 className="">{title}</h1>
        {children}
      </Container>
    </section>
  );
};
export default Section;
