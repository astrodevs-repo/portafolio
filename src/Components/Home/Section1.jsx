import "./SectionScroll.scss";
import Carousel from "../shared/ScrollText";
import Section from "../shared/Section/Section";
import Container from "../Container/Container";

const SectionScroll = ({ data }) => {
  return (
    <Section id={data.href}>
      <div style={{ backgroundColor: data.Bg, textColor: data.textColor }} className="h-full">
        <Container>
          <div className="relative h-full sm:h-screen">
            <div className="sm:sticky sm:top-20 sm:left-0 relative top-0 text-white ">
              {data.header}
            </div>
            <div className=" w-full  h-full flex justify-end items-start">
              <Carousel items={data} />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default SectionScroll;
