import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Text from "../shared/Text";
import Title from "../shared/Title";

const About = () => {
  const slides = [
    {
      title: "Quienes Somos",
      text: "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la Blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea.",
      image:
        "https://img.freepik.com/foto-gratis/personas-que-participan-eventos-negocios_23-2149346636.jpg?t=st=1725916978~exp=1725920578~hmac=64265637bb1dc1b5370ab38f9aed7e2127be607e15a96b8ac54525ff74521604&w=996",
      clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 35% 100%)",
      subtitle: "",
      extraClass: "rounded-r-lg",
    },
    {
      title: "Visión",
      text: "En Neurons, visualizamos un presente donde la innovación digital es accesible y poderosa para todos. Nos esforzamos por ser líderes en la transformación digital, creando soluciones que no solo resuelven desafíos, sino que también inspiran y conectan.",
      image:
        "https://img.freepik.com/foto-gratis/empresarios-planeando-pared-vidrio_53876-15194.jpg?t=st=1725917603~exp=1725921203~hmac=b39c5fadfe216db0f57a3a6d6d1be6cf4c1d06c4d9b2ca6d5f1d77086bf45d93&w=996",
      clipPath: "polygon(41% 0, 100% 0, 100% 100%, 15% 100%)",
      subtitle: "Visión",
      extraClass: "rounded-r-lg",
    },
    {
      title: "Misión",
      text: "Nuestra misión es impulsar el éxito de nuestros clientes en el mundo digital mediante la creación de experiencias innovadoras y estratégicas. Desde el desarrollo web hasta la analítica de datos, nos esforzamos por comprender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas.",
      image:
        "https://img.freepik.com/foto-gratis/objetivos-exito-estrategia-negocio_1421-33.jpg?t=st=1725917446~exp=1725921046~hmac=bffd365dcf37f87599ed929efc023ccbe8f9d9f350b58ae9a4adf37c54c000f4&w=996",
      clipPath: "circle(70.4% at 84% 49%)",
      subtitle: "Misión",
      extraClass: "rounded-r-lg",
    },
    {
      title: "¿Por qué elegirnos?",
      text: "Elegir Neurons significa optar por un socio comprometido con la excelencia y la innovación continua. Estamos aquí para transformar su visión digital en realidad, asegurando que cada interacción con nosotros supere sus expectativas y contribuya al éxito sostenible de su negocio.",
      image:
        "https://img.freepik.com/foto-gratis/renderizacion-3d-flecha-golpeando-objetivo_23-2151266539.jpg?t=st=1725918034~exp=1725921634~hmac=b06f28e2958b89950f378658a531f397c75c5ea90e42f72adf4d42a7473d530a&w=1060",
      clipPath: "polygon(52% 0, 100% 0%, 100% 100%, 53% 100%, 26% 51%)",
      subtitle: "¿Por qué elegirnos?",
      extraClass: "rounded-r-lg",
    },
  ];

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Add autoplay configuration
      modules={[Pagination, Autoplay]} // Include Autoplay module
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className="relative h-[80vh] bg-white rounded-r-lg">
            <section className="absolute top-0 left-0 w-3/6 z-10 h-full flex flex-col justify-center gap-20 items-center p-20">
              <Title text={slide.title} extra={"font-Baskerville text-start"} />
              <Text
                content={slide.text}
                textColor={"text-blackCeniza"}
                w={"w-3/4"}
                extra={"text-start"}
              />
            </section>
            <section className="w-2/3 absolute top-0 right-0 h-full object-cover">
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  clipPath: slide.clipPath,
                  width: "100%",
                  height: "100%",
                }}
                className={slide.extraClass}
              />
            </section>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default About;
