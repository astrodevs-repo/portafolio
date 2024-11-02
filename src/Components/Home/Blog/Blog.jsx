import React from "react";

import Carousel from "../../shared/Carousel/Carousel";
import Section from "../../shared/Section/Section";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";

import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { itemsBlog } from "../../../data/Home";

const Blog = React.memo(function Blog({ index }) {
  return (
    <Section
      title={"Blog y Artículos"}
      subtitle={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
      index={index}
    >
      <Carousel show={"3.5"}>
        {itemsBlog.map(({ title, img, id, content }, idx) => (
          <SwiperSlide key={idx}>
            <Link to={`blog/${id}`}>
              <img
                src={img}
                alt={title}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            </Link>
            <SubTitle text={title} extra={"font-medium text-start "} />
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
