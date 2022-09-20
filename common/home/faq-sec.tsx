import FAQAccordion from "../../components/faq_accordion";
import { FAQData } from "../../types/consts";

const FAQSection = () => {
    return (
        <div className="my-24">
            <p className="text-white text-center text-[32px]">Frequently Asked Questions</p>
            <div className="flex">
                {/* <div className="self-end">
                    <Image src={"/assets/images/buy-above-icon.png"} width="150%" height="150%" />
                </div> */}
                <div className="my-12 flex flex-wrap  justify-center items-start">
                    {FAQData.map((ele) => {
                        return (
                            <FAQAccordion
                                title={ele.title}
                                content={ele.content}
                            />
                        )
                    })}
                </div>
                {/* <div className="self-start">
                    <Image src={"/assets/images/buy-above-icon.png"} width="150%" height="150%" />
                </div> */}
            </div>
        </div>
    )
}

export default FAQSection;