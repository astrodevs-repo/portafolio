import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import a from "../../../public/about/4.jpg";
import b from "../../../public/about/2.jpg";
import c from "../../../public/about/3.jpg";
import d from "../../../public/about/1.jpg";

import Text from "../shared/Text";
import Title from "../shared/Title";

const About = ({ index }) => {
  const slides = [
    {
      title: "Quienes Somos",
      text: "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la Blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea.",
      image: a,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 9% 100%)",
      clipPath2: "polygon(0 0, 100% 0%, 100% 95%, 0 86%)",

      subtitle: "",
      extraClass: "rounded-r-lg",
    },
    {
      title: "Visión",
      text: "En Neurons, visualizamos un presente donde la innovación digital es accesible y poderosa para todos. Nos esforzamos por ser líderes en la transformación digital, creando soluciones que no solo resuelven desafíos, sino que también inspiran y conectan.",
      image: b,
      clipPath: "polygon(12% 0, 100% 0%, 100% 100%, 0 100%)",
      clipPath2: "polygon(0 0, 100% 0%, 100% 95%, 0 86%)",

      subtitle: "Visión",
      extraClass: "rounded-r-lg",
    },
    {
      title: "Misión",
      text: "Nuestra misión es impulsar el éxito de nuestros clientes en el mundo digital mediante la creación de experiencias innovadoras y estratégicas. Desde el desarrollo web hasta la analítica de datos, nos esforzamos por comprender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas.",
      image: c,
      clipPath: "polygon(3% 0, 100% 0, 100% 100%, 6% 100%, 21% 49%)",
      clipPath2: "polygon(0 0, 100% 0%, 100% 95%, 0 86%)",

      subtitle: "Misión",
      extraClass: "rounded-r-lg ",
    },
    {
      title: "¿Por qué elegirnos?",
      text: "Elegir Neurons significa optar por un socio comprometido con la excelencia y la innovación continua. Estamos aquí para transformar su visión digital en realidad, asegurando que cada interacción con nosotros supere sus expectativas y contribuya al éxito sostenible de su negocio.",
      image: d,
      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 13% 100%, 0 49%)",
      clipPath2: "polygon(0 0, 100% 0%, 100% 95%, 0 86%)",

      subtitle: "¿Por qué elegirnos?",
      extraClass: "rounded-r-lg",
    },
  ];

  return (
    <section id={index} className="py-24">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }} // Add autoplay configuration
        modules={[Pagination, Autoplay]} // Include Autoplay module
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
        }} // Responsive breakpoints
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.section
              className="grid grid-cols-1 sm:grid-cols-4 h-full sm:h-[80vh] bg-white dark:bg-blackCeniza rounded-r-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.section
                className="h-full object-cover col-span-1 sm:col-span-2 flex sm:flex md:hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    clipPath: slide.clipPath2,
                    width: "100%",
                    height: "100%",
                  }}
                  className={`${slide.extraClass}`}
                />
              </motion.section>
              <motion.section
                className="col-span-2 z-10 h-full flex flex-col justify-center gap-10 sm:gap-20 items-center p-6 sm:p-12 py-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Title text={slide.title} extra={"font-Baskerville text-start"} />
                <Text
                  content={slide.text}
                  textColor={"text-blackCeniza"}
                  w={"w-full "}
                  extra={"text-start"}
                />
              </motion.section>
              <motion.section
                className="h-full object-cover col-span-1 sm:col-span-2 hidden sm:hidden md:flex"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    clipPath: slide.clipPath,
                    width: "100%",
                    height: "100%",
                  }}
                  className={`${slide.extraClass}`}
                />
              </motion.section>
            </motion.section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default About;
