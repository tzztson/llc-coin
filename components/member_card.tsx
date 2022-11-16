import { useEffect, useState } from "react";
import Image from "next/image";

interface IProps {
  image: string;
  name: string;
  title: string;
}
const MemberCard = ({ image, name, title }: IProps) => {
  // const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   const resize = () => {
  //     if (window.innerWidth < 1024) {
  //       setFlag(true);
  //     } else {
  //       setFlag(false);
  //     }
  //   };

  //   resize();
  //   window.addEventListener("resize", resize);
  // }, []);

  return (
    <>
      <div
        className={`max-w-[300px] rounded-3xl border-[1px] border-[#fefefe] px-12 py-12 flex flex-col justify-center items-center`}
      >
        <div className="mb-8 border-2 rounded-full flex justify-center items-center w-[100px] h-[100px] border-[#656fb5]">
          <Image src={image} width="80px" height="80px" alt="" />
        </div>
        <p className="text-white mb-2">{name}</p>
        <p className="text-white mb-8">{title}</p>
        <div className="flex justify-center items-center gap-5">
          <div className="border-[1px] rounded-lg w-10 h-10 flex items-center justify-center border-[#fefefe]">
            <Image
              src={"/assets/icons/facebook.png"}
              width="24px"
              height="24px"
              alt=""
            />
          </div>
          <div className="border-[1px] rounded-lg w-10 h-10 flex items-center justify-center border-[#fefefe]">
            <Image
              src={"/assets/icons/twitter.png"}
              width="24px"
              height="24px"
              alt=""
            />
          </div>
          <div className="border-[1px] rounded-lg w-10 h-10 flex items-center justify-center border-[#fefefe]">
            <Image
              src={"/assets/icons/indeed.png"}
              width="24px"
              height="24px"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
