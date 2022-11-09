import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex justify-center md:justify-around items-center flex-wrap p-4">
      <div className=" flex lg:flex-row flex-col">
        <div className="md:mx-6 md:w-[80px] md:h-[80px] w-[120px] h-[120px]">
          <Image
            src={"/assets/images/about-token.png"}
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex flex-col  max-w-[600px]">
          <p className="mt-6"></p>
          <p className="uppercase bg-clip-text bg-gradient-to-r from-[#1170fa] to-[#14f0ef] text-transparent text-sm p-2">
            About Us
          </p>
          <div className="flex flex-col gap-y-4 ">
            <p className="text-white text-[32px] leading-10">
              A compelling value proposition
            </p>
            <p className="text-white text-[12px]">
              LongLifeCoin (LLC) is an open source, Bitcoin-like digital
              currency which uses a proof of work script algorithm. The genesis
              block was mined on March 1st, 2014.
            </p>
            <p className="text-white text-[12px]">
              The total number of mineable LLC is 1,000,000,000. The mining of
              LLC is divided into Epochs: each Epoch mines 36000 blocks of coins
              and is targeted to last approximately 25 days.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={"/assets/gifs/rolling-machine.gif"}
          width="480px"
          height="360px"
        />
      </div>
    </div>
  );
};

export default AboutSection;
