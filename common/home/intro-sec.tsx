import Image from "next/image";
import PurchaseCard from "../../components/purchase_card";
import { purchaseData } from "../../types/consts";

const borderColors = [
    "#f6851b", "#627eea", "#5fdacb"
]

const IntroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <p className="text-white uppercase text-[18px]  pb-[20px] z-50">Welcome to the LongLife Coin</p>
            <p className="max-w-[900px] p-2 leading-[60px] text-center  font-[kb3spiderpatch] text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#1170fa] to-[#14f0ef]">
                Reflecting the wishes of people who wish for longevity
            </p>
            <p className="text-white max-w-[900px] text-center my-4 text-[14px]">
                Our coin was created by reflecting the wishes of people who wish for longevity.
                Buy our tokens and get the secret to longevity.
                Five kinds of green vegetables, such as bitter gourd, cucumber, green pepper, celery and apple, have their own effects.
                Generally speaking, drinking five green vegetable juice has the functions of clearing dryness and heat, clearing toxins, clearing stool, clearing storage, clearing blood lipids
            </p>
            <div className="rounded-md text-white text-lg bg-gradient-to-r from-[#124064] px-10 my-8 py-3 border-[#1c537b] border-2">
                <span >Get Started</span>
            </div>
            <div className="absolute bottom-[0px] left-[-80px] z-0">
                <Image src={"/assets/images/nav-coin.png"} width="280px" height="210px" />
            </div>
            <div className="absolute bottom-[120px] left-[68px]">
                <Image src={"/assets/images/nav-ele-coin.png"} width="50px" height="50px" />
            </div>
            <div className="flex items-center justify-center lg:flex-row flex-col z-10 gap-4">
                {purchaseData.map((ele, index) => {
                    return (
                        <div className={`rounded-xl bg-gradient-to-r from-[${borderColors[index]}]  to-[#88ecd4] p-[1px]`}>
                            <PurchaseCard
                                source={ele.image}
                                title={ele.title}
                                content={ele.content}
                            />
                        </div>
                    )
                }

                )}
            </div>
        </div >
    )
}

export default IntroSection;