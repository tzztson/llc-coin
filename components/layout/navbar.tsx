import Image from "next/image";
import IntroSection from "../../common/home/intro-sec";
import Button from "../button";
const Navbar = () => {
  return (
    <div className="relative">
      <div className="z-[1] opacity-25 absolute bg-[#0A2340] w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full -top-28 -left-28 lg:-top-40 lg:-left-40 "></div>
      <div className="z-[3] absolute lg:w-24 lg:h-24 w-16 h-16 lg:top-[30px] lg:left-[40px] top-[20px] left-[20px]">
        <Image
          className=""
          src={"/assets/images/nav-token.png"}
          width="100%"
          height="100%"
        />
      </div>
      <div className="z-[1] opacity-25 absolute right-0 image-control">
        <Image src={"/assets/images/nav-coin.png"} layout="fill" />
      </div>
      <div className="z-[3] absolute top-[40px] right-[40px]">
        <Button text="Connect" />
      </div>
      <div className="z-[3] absolute 2xl:bottom-[1%] 2xl:left-[1%] 2xl:block hidden opacity-25">
        <Image
          src={"/assets/images/nav-coin.png"}
          width="270px"
          height="180px"
        />
      </div>
      <div className="relative">
        <span className="absolute w-[100%] h-[300px] bottom-0 bg-gradient-to-t from-[#060A21] to-transparent"></span>
        <video
          src="/assets/mp4/file.mp4"
          autoPlay
          muted
          loop
          className="w-[100%] h-[800px] object-cover"
        />
        <IntroSection />
      </div>
      {/* <div className="flex items-center justify-between py-4 absolute lg:px-16 px-12">
        <div className="absolute right-12 top-6 ">
          <Image
            className=""
            src={"/assets/images/nav-ele-coin.png"}
            width="50px"
            height="50px"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
