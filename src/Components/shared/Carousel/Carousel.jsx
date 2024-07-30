import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={true}
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
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=""
      >
        {children}
      </Swiper>
    </>
  );
}
