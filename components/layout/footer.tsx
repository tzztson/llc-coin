import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 bg-[#14173c] pt-[64px] pb-[38px] flex flex-col justify-center items-center gap-5">
      <p className="text-white text-[24px]">
        Exchange your Crypto for LongLifeCoin{" "}
      </p>
      <p className="text-white text-[14px]">
        Above Information is not guaranteed. And subject to change without
        notice.
      </p>
      <div className="flex justify-center items-center gap-8 my-4">
        <div className="border-[1px] border-[#fefefe] rounded-lg w-8  h-8 flex justify-center items-center">
          <Image
            src={"/assets/icons/b-facebook.png"}
            width={18}
            height={18}
            alt=""
          />
        </div>
        <div className="border-[1px] border-[#fefefe] rounded-lg w-8  h-8 flex justify-center items-center">
          <Image
            src={"/assets/icons/b-twitter.png"}
            width={18}
            height={18}
            alt=""
          />
        </div>
        <div className="border-[1px] border-[#fefefe] rounded-lg w-8  h-8 flex justify-center items-center">
          <Image
            src={"/assets/icons/b-indeed.png"}
            width={18}
            height={18}
            alt=""
          />
        </div>
      </div>
      <hr className="w-4/5" />
      <p className="text-white text-[16px]">
        ©2022 LongLife Coin - Cryptocurrency ICO System
      </p>
    </div>
  );
};

export default Footer;
