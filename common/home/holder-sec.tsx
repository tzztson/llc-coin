import Image from "next/image";
import Button from "../../components/button";
const HolderSection = () => {
  const joinGroup = () => {};
  return (
    <div className="bg-gradient-to-r from-[#310056]  to-[#5f5fa7]">
      <div className="flex  items-center justify-evenly container mx-auto">
        <div className="flex-[1_1_50%] flex flex-col justify-center px-12 md:py-0 py-8">
          <p className="text-[#ffec37] text-2xl font-bold">
            What are you waiting for?
          </p>
          <p className="18  md:text-[36px] font-bold">
            Become an LLC Token Holder!
          </p>
          <div className="flex my-4">
            <a
              href={"https://t.me/+67zToz57LhIyZjFk"}
              target="_blank"
              className="active:translate-y-1 border-[1px] border-[#13cdf2] bg-gradient-to-r from-[#1170fa] to-[#14f0ef] z-40 px-6 py-1 text-md rounded-md"
            >
              <span className="18">Join Now</span>
            </a>
          </div>
        </div>
        <div className="flex-[1_1_50%] hidden md:block">
          <Image
            src={"/assets/gifs/wave-bot-rb.gif"}
            width="300px"
            height="240px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HolderSection;
