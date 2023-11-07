import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      className="max-w-6xl text mx-auto my-0 border"
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="../../../src/assets/img/s01.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../src/assets/img/s02.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../src/assets/img/s03.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../src/assets/img/s04.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
