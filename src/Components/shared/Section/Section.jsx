import Container from "../../Container/Container";
import SubTitleItalic from "../SubTitleItalic";
import Title from "../Title";

const Section = ({ children, bg, title, index, extra, subtitle, contentPosition, currentStep }) => {
  if (currentStep === index) {
    console.log("hola manda de delincuentes", currentStep, index);
  }
  return (
    <section className={`w-full h-fit-content ${bg} py-5 sm:py-20 ${extra}`} id={index}>
      <Container>
        <Title text={title} textColor={"text-blackCeniza"} extra={"font-Baskerville italic"} />

        {subtitle ? <SubTitleItalic text={subtitle} textColor={"text-blackCeniza"} /> : ""}
        <section className={contentPosition}>{children}</section>
      </Container>
    </section>
  );
};

export default Section;
