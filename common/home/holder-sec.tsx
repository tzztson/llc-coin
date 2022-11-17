import Image from "next/image";
import Button from "../../components/button";
const HolderSection = () => {
  const joinGroup = () => {};
  return (
    <div className="mb-48 flex justify-center items-center bg-gradient-to-r from-[#310056]  to-[#5f5fa7] rounded-2xl">
      <div className="z-20  max-w-7xl flex flex-col   px-12 py-4 gap-y-2">
        <p className="text-[#ffec37] text-[16px]">What are you waiting for?</p>
        <p className="text-white  md:text-[32px] max-w-[400px] leading-10 ">
          Become an LLC Token Holder!
        </p>
        <div className="flex my-4">
          <a
            href={"https://t.me/+67zToz57LhIyZjFk"}
            target="_blank"
            className="active:translate-y-1 border-[1px] border-[#13cdf2] bg-gradient-to-r from-[#1170fa] to-[#14f0ef] z-40 px-6 py-1 text-md rounded-md"
          >
            <span className="text-white">Join Now</span>
          </a>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          src={"/assets/gifs/wave-bot-rb.gif"}
          width="300px"
          height="240px"
          alt=""
        />
      </div>
    </div>
  );
};

export default HolderSection;
