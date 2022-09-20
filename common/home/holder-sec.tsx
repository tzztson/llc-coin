import Image from "next/image";
import Button from "../../components/button"
const HolderSection = () => {
    return (
        <div className="my-24 flex justify-center items-center ">
            <div className="z-20  max-w-7xl flex flex-col bg-gradient-to-r from-[#310056]  to-[#5f5fa7] rounded-2xl   px-12 py-4 gap-y-2">
                <p className="text-[#ffec37] text-[16px]">What are you waiting for?</p>
                <p className="text-white text-[32px] max-w-[400px] leading-10">Become an LLC Token Holder!</p>
                <div className="flex">
                    <Button text="Join Now" />
                </div>
            </div>
            <div>
                <Image src={""} width="100px" height="100px" alt="" />
            </div>
        </div>
    )
}

export default HolderSection;