import ImageComponent from "./ui/image";
import slide1 from "../assets/slide_01.jpg";
import slide2 from "../assets/slide_02.jpg";
import slide3 from "../assets/slide_03.jpg";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swipper = () => {
  return (
    <section className="swiper contenedor">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <ul className="swiper-wrapper">
          <li className="swiper-slide">
            <SwiperSlide>
              <ImageComponent
                imageUrl={slide1}
                className="slider__imagen"
                alt="imagen 01 slide"
              />
            </SwiperSlide>
          </li>
          <li className="swiper-slide">
            <SwiperSlide>
              <ImageComponent
                imageUrl={slide2}
                className="slider__imagen"
                alt="imagen 02 slide"
              />
            </SwiperSlide>
          </li>
          <li className="swiper-slide">
            <SwiperSlide>
              <ImageComponent
                imageUrl={slide3}
                className="slider__imagen"
                alt="imagen 03 slide"
              />
            </SwiperSlide>
          </li>
        </ul>
      </Swiper>
    </section>
  );
};

export default Swipper;
