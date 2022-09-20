import Image from "next/image";
import Button from "../../components/button";

const BuyToken = () => {
    return (
        <div className="my-24 flex justify-center">
            <div className="z-20  flex justify-center items-center first-letter:border-[#627eea] rounded-2xl bg-gradient-to-r from-[#310056]  to-[#5f5fa7] gap-7 px-12 py-">
                <div className="self-end z-30 justify-self-end">
                    <Image src={"/assets/images/buy-below-icon.png"} width="80px" height="80px" />
                </div>
                <div className="flex flex-col justify-center items-center p-12">
                    <p className="text-white text-[32px]">Calculate your LLC earnings</p>
                    <p className="text-white text-[12px]">Input the amount of LLC you would like to purchase.</p>
                    <p className="text-[#ffec37] text-[20px]">1 LLC = $1.5 USD</p>
                    <div className="flex justify-center items-center gap-x-4">
                        <span className="text-white">I have</span>
                        <div className="text-white border-[1px] flex justify-center items-center pl-1 pr-3 gap-x-2">
                            <input type='number' className="text-right bg-transparent  outline-none text-white " />
                            <span className="text-[12px]">LLC</span>
                        </div>
                        <select className="bg-transparent text-white outline-none">

                        </select>
                        <Button text="Buy" />
                    </div>
                </div>
                <div className=" self-start z-30">
                    <Image src={"/assets/images/buy-above-icon.png"} width="80px" height="80px" />
                </div>
            </div>
        </div>
    )
}

export default BuyToken;