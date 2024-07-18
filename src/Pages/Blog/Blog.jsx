import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import Title from "../../Components/shared/Title";
import { itemsBlog } from "../../data/Home";
import Text from "../../Components/shared/Text";
import Container from "../../Components/Container/Container";
import { SwiperSlide } from "swiper/react";
import SubTitle from "../../Components/shared/SubTitle";
import Carousel from "../../Components/shared/Carousel/Carousel";
import ScrollToTop from "../../Components/shared/ScrollTop/ScrollTop";
import Footer from "../../Components/Footer/Footer";
import NavbarGoBack from "../../../NavbarGoBack";

const Blog = () => {
  const { id } = useParams();
  const [body, setBody] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (id) {
      const aux = itemsBlog.find((e) => e.id === id);
      if (aux) {
        setBody(aux);
      }
    }
  }, [id]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollToTop>
      <NavbarGoBack />
      <section className=" relative">
        <Container>
          <section className="flex flex-col gap-2">
            <Title text={body?.title} extra={"text-start"} />
            <SubTitle text={body?.subtitle} extra={"text-start"} />

            <section className="flex justify-start items-center m-0 gap-5">
              <p className="bg-blackCeniza bg-opacity-50 text-white rounded-lg p-2 m-0">
                {body?.hora} <span>{body?.fecha}</span>
              </p>
              <p className={`${body?.color} bg-opacity-50 text-white rounded-lg p-2 m-0`}>
                {body?.category}
              </p>
            </section>
          </section>
          <img src={body?.img} alt="" className="rounded-lg" />
          <section className="w-full flex justify-between relative min-h-fit">
            <section className="w-[20%] hidden sm:hidden md:hidden lg:block">
              <nav className="sticky top-20">
                <ul>
                  {body?.content.sections.map((section, index) => (
                    <li key={index} className="">
                      {section?.subtitle && (
                        <button
                          onClick={() => scrollToSection(index)}
                          className="font-extrabold text-start py-2"
                        >
                          {section?.subtitle}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
            <section className="w-full sm:w-full md:w-full lg:w-[75%] relative px-2">
              {body?.content.sections.map((section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionsRef.current[index] = el)}
                >
                  {section?.subtitle && <SubTitle text={section?.subtitle} />}
                  <section className="py-10">{section?.content}</section>
                </section>
              ))}
            </section>
          </section>
          <Carousel show={3.5}>
            {itemsBlog.map(({ title, content, img, id }) => (
              <SwiperSlide key={img}>
                <Link to={`/blog/${id}`}>
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
        </Container>
      </section>
      <Footer />
    </ScrollToTop>
  );
};

export default Blog;
