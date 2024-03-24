import "./SectionScroll.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Carousel from "../shared/ScrollText";
import Section from "../shared/Section/Section";
import Container from "../Container/Container";

const SectionScroll = ({ data }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = data.data.map((_, index) => {
        return document.getElementById(`section${index + 1}`).getBoundingClientRect();
      });

      const centerHeight = window.innerHeight / 2;

      const currentSectionIndex = sections.findIndex((section) => {
        return section.top <= centerHeight && section.bottom >= centerHeight;
      });

      setActiveSection(currentSectionIndex >= 0 ? currentSectionIndex + 1 : 0);
    };

    const handleInitialLoad = () => {
      setActiveSection(0); // Set activeSection to 0 when the component mounts
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleInitialLoad);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleInitialLoad);
      setActiveSection(0);
    };
  }, [data.data]);

  return (
    <Section id={data.href}>
      <div style={{ backgroundColor: data.Bg, textColor: data.textColor }} className="h-full">
        <Container>
          <div className="relative">
            <div className="sticky top-0 left-0 text-white">{data.header}</div>
            <div className=" w-full  h-full flex justify-end items-center">
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
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
        Bg: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SectionScroll;
