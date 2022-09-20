import Image from "next/image";
import Button from "./button";
interface IProps {
    image: string;
    title: string;
    content: string;
}

const LifeFoodCard = ({ image, title, content }: IProps) => {
    return (
        <div className="bg-[url('/assets/images/card-combine.png')] flex flex-col items-center justify-center  m-0 rounded-2xl py-6">
            <div className="border-2 rounded-full bg-[#0d2942] w-16 h-16 flex items-center justify-center my-4">
                <Image src={image} width="48px" height="48px" />
            </div>
            <div className="text-white font-bold text-[20px] text-center my-2">{title}</div>
            <div className="text-white text-[12px] max-w-[240px] m-2">{content}</div>
            <div className="my-6">
                <Button text="Learn More" />
            </div>
        </div>
    )
}

export default LifeFoodCard;