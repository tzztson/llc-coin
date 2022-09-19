import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-4 relative lg:px-16 px-12">
      <div className="absolute bg-[#0A2340] w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full -left-28 lg:-left-40 z-30">
      </div>
      <div className="absolute right-0 top-0 z-0">
        <Image className="" src={"/assets/images/nav-coin.png"} width="200px" height="150px" />
      </div>
      <div className="absolute right-12 top-6 z-10">
        <Image className="" src={"/assets/images/nav-ele-coin.png"} width="50px" height="50px" />
      </div>
      <div className="lg:w-24 lg:h-24 w-16 h-16 z-40">
        <Image className="" src={"/assets/images/nav-token.png"} width="100%" height="100%" />
      </div>
      <div className="bg-gradient-to-r from-[#1170fa] to-[#14f0ef] z-40 px-6 py-1 text-md rounded-md">
        <span className="text-white">Connect</span>
      </div>

    </div>
  );
};

export default Navbar;
