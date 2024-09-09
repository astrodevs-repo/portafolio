import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ children, show }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      pagination={true}
      autoplay={{ delay: 3000 }} // Add autoplay configuration
      breakpoints={{
        300: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: show,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: show,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Autoplay]} // Include Autoplay module
      className=""
    >
      {children}
    </Swiper>
  );
}
