import Image from "next/image";

interface IProps {
    source: string;
    title: string;
    content: string;
}

const PurchaseCard = ({ source, title, content }: IProps) => {
    return (
        <div className="bg-[#0B091D] flex justify-center items-center max-w-[400px] mx-4 py-2 rounded-2xl border-2 border-red-600">
            <div className="mx-4 rounded-full">
                <Image src={source} width="200px" height="200px" />
            </div>
            <div className="flex flex-col justify-center items-left">
                <p className="text-white">{title}</p>
                <p className="text-white text-[10px]">{content}</p>
            </div>
        </div>
    );
}

export default PurchaseCard;