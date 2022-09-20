import Image from "next/image";

interface IProps {
    image: string;
    name: string;
    title: string;
}
const MemberCard = ({ image, name, title }: IProps) => {
    return (
        <div className={` max-w-[300px] rounded-3xl border-[1px] border-[#fefefe] px-16 py-16 flex flex-col justify-center items-center`}>
            <div className="mb-8 border-2 rounded-full flex justify-center items-center w-[100px] h-[100px] border-[#656fb5]">
                <Image src={image} width="80px" height="80px" />
            </div>
            <p className="text-white mb-2">{name}</p>
            <p className="text-white mb-8">{title}</p>
            <div className="flex justify-center items-center gap-10">
                <div className="border-[1px] w-10 h-10 flex items-center justify-center border-[#fefefe]"><Image src={"/assets/icons/facebook.png"} width="24px" height="24px" /></div>
                <div className="border-[1px] w-10 h-10 flex items-center justify-center border-[#fefefe]"><Image src={"/assets/icons/twitter.png"} width="24px" height="24px" /></div>
                <div className="border-[1px] w-10 h-10 flex items-center justify-center border-[#fefefe]"><Image src={"/assets/icons/indeed.png"} width="24px" height="24px" /></div>
            </div>
        </div>
    )
}

export default MemberCard;