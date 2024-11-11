import React from "react";

import Carousel from "../../shared/Carousel/Carousel";
import Section from "../../shared/Section/Section";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";

import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { itemsBlog } from "../../../data/Home";
import Container from "../../Container/Container";
import Title from "../../shared/Title";
import SubTitleItalic from "../../shared/SubTitleItalic";

const Blog = React.memo(function Blog({ index }) {
  return (
    <Container>
      <section className=" flex flex-col gap-10 pt-20 pb-0 sm:pb-20">
        <Title text={"Quienes Somos"} textColor={"text-blackCeniza"} extra={"font-Baskerville "} />
        <SubTitleItalic
          text={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
          textColor={"text-blackCeniza"}
        />
      </section>
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
            <section className="flex flex-col gap-5 pt-5">
              <SubTitle text={title} extra={"font-medium text-start "} />
              <Text
                content={content.sections[0].content.substring(0, 150) + "..."}
                extra={"text-start"}
              />
            </section>
          </SwiperSlide>
        ))}
      </Carousel>
    </Container>
  );
});

export default Blog;
