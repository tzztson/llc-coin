import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { LifeFoodData } from "../../types/consts";

const FruitSwiper = () => {
  return (
    <div className="">
      <p className="text-4xl font-bold text-center pt-48 pb-12">
        Effect of Fruits
      </p>
      <Swiper
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        freeMode={true}
        Navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },

          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {LifeFoodData.map((ele, ind) => {
          return (
            <SwiperSlide
              key={ind}
              className="rounded-lg bg-red-300 flex gap-4 select-none flex-col items-center justify-start py-12"
            >
              <div className="border-2 rounded-full bg-[#0d2942] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <Image src={ele.source} width="48px" height="48px" alt="" />
              </div>
              <div className="text-green-800 font-bold text-[20px] md:text-[30px] text-center">
                {ele.title}
              </div>
              <div className="text-gray-700 font-bold px-4">{ele.content}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FruitSwiper;
