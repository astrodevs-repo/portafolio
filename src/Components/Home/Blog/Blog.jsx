import { SwiperSlide } from "swiper/react";
import Carousel from "../../shared/Carousel/Carousel";
import Section from "../../shared/Section/Section";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";
import { Link } from "react-router-dom";
import { itemsBlog } from "../../../data/Home";
import Inspector from "../../shared/Inspector/Inspector";

const Blog = ({ index, onObserver, currentStep }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <Section
        title={"Blog y Artículos"}
        subtitle={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
        id={"quienessomos"}
        index={index}
        currentStep={currentStep}
        extra={"  "}
      >
        <Carousel show={"3.5"}>
          {itemsBlog.map(({ title, img, id, content }) => (
            <SwiperSlide key={img}>
              <Link to={`blog/${id}`}>
                <section className="group [perspective:1000px] ">
                  <img src={img} alt={title} className="w-full h-full object-cover rounded-lg" />
                  <section className="flex flex-col gap-2 pt-5">
                    <SubTitle text={title} extra={"text-start"} />
                    <Text
                      content={content.sections[0].content.substring(0, 150) + "..."}
                      extra={"text-start"}
                    />
                  </section>
                </section>
              </Link>
            </SwiperSlide>
          ))}
        </Carousel>
      </Section>
    </Inspector>
  );
};

export default Blog;
