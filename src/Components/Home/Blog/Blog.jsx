import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import Title from "../../shared/Title";
import { motion } from "framer-motion";
import Carousel from "../../shared/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";

function Blog({ index, itemsBlog }) {
  return (
    <Container>
      <section id={index} className="flex flex-col gap-10 pt-20 pb-0 sm:pb-20 ">
        <Title
          text={"Blog y Artículos"}
          textColor={"text-blackCeniza"}
          extra={"font-Baskerville "}
        />
        <SubTitle
          text={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
          textColor={"text-blackCeniza"}
          extra={"w-3/4"}
        />
      </section>
      {itemsBlog && (
        <Carousel show={3.5}>
          {itemsBlog?.map(({ title, img, id, subtitle }, index) => (
            <SwiperSlide key={img}>
              <Link to={`/blog/${id}`}>
                <section className="group [perspective:1000px] pt-20">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                    width={100}
                    height={100}
                  />
                  <section className="flex flex-col gap-2 pt-5">
                    <SubTitle text={title} extra="text-start" />
                    <Text content={subtitle?.substring(0, 150) + "..."} extra="text-start" />
                  </section>
                </section>
              </Link>
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </Container>
  );
}

export default Blog;
