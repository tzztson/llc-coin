import Image from "next/image";
import Button from "../button";
const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 opacity-60">
        <video
          src="/assets/mp4/file.mp4"
          autoPlay
          muted
          loop
          className="w-[120vw]"
        ></video>
      </div>
      <div className="flex items-center justify-between py-4 relative lg:px-16 px-12">
        <div className="absolute bg-[#0A2340] w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full -left-28 lg:-left-40 -z-0"></div>
        <div className="absolute right-0 bottom-0 -z-0">
          <Image
            className=""
            src={"/assets/images/nav-coin.png"}
            width="200px"
            height="150px"
          />
        </div>
        {/* <div className="absolute right-12 top-6 -z-0">
          <Image
            className=""
            src={"/assets/images/nav-ele-coin.png"}
            width="50px"
            height="50px"
          />
        </div> */}
        <div className="lg:w-24 lg:h-24 w-16 h-16 z-50">
          <Image
            className=""
            src={"/assets/images/nav-token.png"}
            width="100%"
            height="100%"
          />
        </div>
        <Button text="Connect" />
      </div>
    </div>
  );
};

export default Navbar;
