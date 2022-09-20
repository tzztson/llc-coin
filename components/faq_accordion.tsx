import { useState } from "react";
interface IProps {
    title: "string";
    content: "string";
}

const FAQAccordion = ({ title, content }: IProps) => {
    const [isopen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isopen);
    }
    return (
        <div className="flex flex-col py-2  items-center justify-center mx-4" >
            < div className="p-4 bg-[#14173c] w-[400px]  rounded flex justify-between items-center" onClick={handleClick}>
                <h4 className="font-medium text-sm text-white">{title}</h4>
                <div className={isopen ? "rotate-180" : ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-white" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div >
            <div className={!isopen ? "hidden" : "max-w-[400px]  bg-[#a3a7da] p-4"}>
                <h4 className=" text-sm text-white">{content}</h4>
            </div>
        </div >
    )
}

export default FAQAccordion;