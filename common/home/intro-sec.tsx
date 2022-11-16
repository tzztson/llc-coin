import Image from "next/image";
import PurchaseCard from "../../components/purchase_card";
import { purchaseData } from "../../types/consts";

const IntroSection = () => {
  return (
    <div className="w-[100%] top-1/2 left-1/2 m-0 transform -translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center justify-center">
      <div className=""></div>
      <p className="text-white uppercase text-[12px] lg:text-[18px]  pb-[20px]">
        Welcome to the LongLife Coin
      </p>
      <p className="max-w-[900px] p-2 leading-[30px] lg:leading-[60px] text-center  font-[kb3spiderpatch] text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#1170fa] to-[#14f0ef]">
        Reflecting the wishes of people who wish for longevity
      </p>
      <p className="text-white max-w-[900px] text-center my-4 text-[14px] hidden sm:block">
        Our coin was created by reflecting the wishes of people who wish for
        longevity. Buy our tokens and get the secret to longevity. Five kinds of
        green vegetables, such as bitter gourd, cucumber, green pepper, celery
        and apple, have their own effects. Generally speaking, drinking five
        green vegetable juice has the functions of clearing dryness and heat,
        clearing toxins, clearing stool, clearing storage, clearing blood lipids
      </p>
      <div className="z-100 rounded-md text-white text-lg bg-gradient-to-r from-[#124064] to-[#031a2b] px-10 my-4 lg:my-8 py-3 border-[#1c537b] border-2">
        <span>Get Started</span>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {purchaseData.map((ele, ind) => {
          return (
            <PurchaseCard
              source={ele.image}
              title={ele.title}
              content={ele.content}
              border={ele.border}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IntroSection;
