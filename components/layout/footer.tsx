import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#14173c] px-4">
      <div className="container mx-auto py-16 gap-3 flex flex-col justify-center items-center">
        <p className="font-bold text-2xl">
          Exchange your Crypto for LongLifeCoin{" "}
        </p>
        <p className="text-lg font-semibold">
          Above Information is not guaranteed. And subject to change without
          notice.
        </p>
        <div className="flex items-center justify-center gap-x-8 w-full">
          <div className="py-2 px-3  border-[1px] rounded-md">
            <Image
              src={"/assets/icons/b-facebook.png"}
              width={18}
              height={18}
              alt=""
              className=""
            />
          </div>
          <div className="py-2 px-3  border-[1px] rounded-md">
            <Image
              src={"/assets/icons/b-twitter.png"}
              width={18}
              height={18}
              alt=""
            />
          </div>
          <div className="py-2 px-3  border-[1px] rounded-md">
            <Image
              src={"/assets/icons/b-indeed.png"}
              width={18}
              height={18}
              alt=""
            />
          </div>
        </div>
        <hr className="w-full" />
        <p className="text-lg font-semibold">
          ©2022 LongLife Coin - Cryptocurrency ICO System
        </p>
      </div>
    </div>
  );
};

export default Footer;
