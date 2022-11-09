import Image from "next/image";
import Button from "../../components/button";
const HolderSection = () => {
  return (
    <div className="mb-12 flex justify-center items-center bg-gradient-to-r from-[#310056]  to-[#5f5fa7] rounded-2xl">
      <div className="z-20  max-w-7xl flex flex-col   px-12 py-4 gap-y-2">
        <p className="text-[#ffec37] text-[16px]">What are you waiting for?</p>
        <p className="text-white  md:text-[32px] max-w-[400px] leading-10 ">
          Become an LLC Token Holder!
        </p>
        <div className="flex my-4">
          <Button text="Join Now" />
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
