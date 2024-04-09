import "./SectionScroll.scss";
import PropTypes from "prop-types";
import Carousel from "../shared/ScrollText";
import Section from "../shared/Section/Section";
import Container from "../Container/Container";

const SectionScroll = ({ data }) => {
  return (
    <Section id={data.href}>
      <div style={{ backgroundColor: data.Bg, textColor: data.textColor }} className="h-full">
        <Container>
          <div className="relative h-screen">
            <div className="sticky top-40 left-0 text-white">{data.header}</div>
            <div className=" w-full  h-full flex justify-end items-start">
              <Carousel items={data} />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

SectionScroll.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    Bg: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SectionScroll;
