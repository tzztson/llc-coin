import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TeamData } from "../../types/consts";

const MemberSwiper = () => {
  return (
    <div className="">
      <p className="text-4xl font-bold text-center pt-48 pb-12">
        Let's Meet Team Members
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
        {TeamData.map((ele, ind) => {
          return (
            <SwiperSlide
              key={ind}
              className="rounded-lg bg-purple-900 flex gap-4 select-none flex-col items-center justify-start py-12"
            >
              <div className="mb-8 border-2 rounded-full flex justify-center items-center w-[100px] h-[100px] border-purple-400">
                <Image src={ele.image} width="80px" height="80px" alt="" />
              </div>
              <p className="text-3xl font-black  mb-2">{ele.name}</p>
              <p className="text-2xl font-bold mb-8">{ele.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MemberSwiper;
