import Container from "../../Container/Container";
import Inspector from "../Inspector/Inspector";
import SubTitleItalic from "../SubTitleItalic";
import Title from "../Title";

const Section = ({ id, children, bg, title, index, extra, subtitle, onObserver }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section className={`w-full h-fit-content ${bg} py-5 sm:py-20 ${extra}`} id={id}>
        <Container>
          <Title text={title} textColor={"text-blackCeniza"} extra={"font-LusitanaBold"} />
          {subtitle ? <SubTitleItalic text={subtitle} textColor={"text-blackCeniza"} /> : ""}
          {children}
        </Container>
      </section>
    </Inspector>
  );
};

export default Section;
