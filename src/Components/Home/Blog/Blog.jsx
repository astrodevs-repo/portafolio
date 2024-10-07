import { SwiperSlide } from "swiper/react";
import Carousel from "../../shared/Carousel/Carousel";
import Section from "../../shared/Section/Section";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";
import { Link } from "react-router-dom";
import { itemsBlog } from "../../../data/Home";
import React from "react";

const Blog = React.memo(function Blog({ index, onObserver }) {
  return (
    <Section
      title={"Blog y Artículos"}
      subtitle={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
      id={"quienessomos"}
      index={index}
      currentStep={index}
      onObserver={onObserver}
      extra={"  "}
    >
      <Carousel show={"3.5"}>
        {itemsBlog.map(({ title, img, id, content }) => (
          <SwiperSlide key={img}>
            <Link to={`blog/${id}`}>
              <img
                src={img}
                alt={title}
                width={100}
                height={100}
                className=" object-cover rounded-lg"
              />
            </Link>
            <SubTitle text={title} extra={"font-medium text-start mt-5 "} />
            <Text
              content={content.sections[0].content.substring(0, 150) + "..."}
              extra={"text-start"}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </Section>
  );
});

export default Blog;
