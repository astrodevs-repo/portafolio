import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Text from "../shared/Text";
import Title from "../shared/Title";
import Inspector from "../shared/Inspector/Inspector";
import { about } from "../../data/Home";

const About = ({ index, onObserver }) => {
  return (
    <section id={index} className="py-24">
      <Inspector index={index} onObserver={onObserver}>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={30}
          autoplay={{ delay: 10000 }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
          }}
        >
          {about.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className="grid grid-cols-1 sm:grid-cols-4 h-full sm:h-[80vh] bg-white dark:bg-blackCeniza rounded-r-lg">
                <section className="h-full object-cover col-span-1 sm:col-span-2 flex sm:flex md:hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      clipPath: slide.clipPath2,
                    }}
                    className={`${slide.extraClass}`}
                    width={100}
                    height={100}
                  />
                </section>
                <section className="col-span-2 z-10 h-full flex flex-col justify-center gap-10 sm:gap-20 items-center p-6 sm:p-12 py-10">
                  <Title text={slide.title} extra={"font-Baskerville italic text-start"} />
                  <Text
                    content={slide.text}
                    textColor={"text-blackCeniza"}
                    w={"w-full "}
                    extra={"text-start"}
                  />
                </section>
                <section className="h-full object-cover col-span-1 sm:col-span-2 hidden sm:hidden md:flex">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      clipPath: slide.clipPath,
                    }}
                    width={100}
                    height={100}
                    className={`${slide.extraClass} `}
                  />
                </section>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </Inspector>
    </section>
  );
};

export default About;
