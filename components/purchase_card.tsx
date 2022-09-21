import Image from "next/image";

interface IProps {
    source: string;
    title: string;
    content: string;
    border: string;
}

const PurchaseCard = ({ source, title, content, border }: IProps) => {
    return (
        <div className={`rounded-md bg-gradient-to-r from-[#627eea]  to-[#88ecd4] p-[1px]`}>
            <div className="h-52 bg-[#0B091D] flex justify-center items-center max-w-[360px] p-2 rounded-xl">
                <div className="mx-4 rounded-full">
                    <Image src={source} width="150px" height="150px" />
                </div>
                <div className="flex flex-col justify-center items-left">
                    <p className="text-white">{title}</p>
                    <p className="text-white text-[12px]">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCard;