import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ClientsSection() {
  const items = [
    {
      name: "adidas",
      img: "https://www.carteleriamanna.com.ar/wp-content/uploads/2018/06/logo-manna-section.png",
    },
    {
      name: "adidas",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Farmatodo_logo.svg/2560px-Farmatodo_logo.svg.png",
    },
    {
      name: "adidas",
      img: "https://yesbeneficios.com/img/logoTop1551365271056.png",
    },
  ];

  return (
    <section className="px-5 sm:px-40">
      <h1>Nuestros clientes</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={false}
        speed={1000} // Adjust the speed here (1000 milliseconds = 1 second)
        breakpoints={{
          300: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7.5,
            spaceBetween: 8,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((e, index) => (
          <SwiperSlide key={index}>
            <article className="w-40 h-40 flex justify-center items-center">
              <img src={e.img} alt="" />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
