import LifeFoodCard from "../../components/life_food_card";
import { LifeFoodData } from "../../types/consts";
import Image from "next/image";

const Effects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col items-center px-4">
      <p className="mt-12"></p>
      <p className="uppercase  bg-clip-text bg-gradient-to-r from-[#1170fa] to-[#14f0ef] text-transparent text-sm p-2">
        Effects
      </p>
      <p className="text-white text-[30px] text-center">
        Effect of Fruits and Vegetables
      </p>
      <p className="text-white text-[12px] text-center">
        Five kinds of green vegetables, such as bitter gourd, cucumber, green
        pepper, celery and apple, have their own effects.
      </p>

      <div className="mt-12 flex items-center justify-evenly lg:gap-20 gap-12">
        {/* <div className="">
          <Image
            src={"/assets/icons/left-arrow.png"}
            width="48px"
            height="48px"
          />
        </div> */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {LifeFoodData.map((ele, index) => {
            const bgColor =
              index % 2
                ? "bg-[url('/assets/images/card-ground-1.png')] rounded-2xl"
                : "bg-[url('/assets/images/card-ground-2.png')] rounded-2xl";
            return (
              <div className={`${bgColor} bg-cover`} key={`${ele}1`}>
                <LifeFoodCard
                  title={ele.title}
                  content={ele.content}
                  image={ele.source}
                  key={index}
                />
              </div>
            );
          })}
        </div>
        {/* <div className="">
          <Image
            src={"/assets/icons/right-arrow.png"}
            width="48px"
            height="48px"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Effects;
