import Image from "next/image";
import Button from "./button";
interface IProps {
  image: string;
  title: string;
  content: string;
}

const LifeFoodCard = ({ image, title, content }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-center  m-0 rounded-2xl py-0 md:h-[600px] lg:h-[640px]">
      <div className="border-2 rounded-full bg-[#0d2942] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center my-4">
        <Image src={image} width="48px" height="48px" />
      </div>
      <div className="text-white font-bold text-[20px] md:text-[30px] text-center my-2 md:my-3">
        {title}
      </div>
      <div className="text-white text-[12px] md:text-[20px] max-w-[240px] md:max-w-[360px] m-2 md:m-3">
        {content}
      </div>
      <div className="my-6 md:my-9">
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default LifeFoodCard;
