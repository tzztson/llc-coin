import FAQAccordion from "../../components/faq_accordion";
import { FAQData } from "../../types/consts";

const FAQSection = () => {
  return (
    <div className="my-32 ">
      <p className="text-white text-center text-[32px]">
        Frequently Asked Questions
      </p>
      <div className="flex justify-center items-center container mx-auto px-2">
        {/* <div className="self-end">
                    <Image src={"/assets/images/buy-above-icon.png"} width="150%" height="150%" />
                </div> */}
        <div className="grid xl:grid-cols-3 gap-4 lg:grid-cols-2">
          {FAQData.map((ele, ind) => {
            return (
              <FAQAccordion title={ele.title} content={ele.content} key={ind} />
            );
          })}
        </div>
        {/* <div className="self-start">
                    <Image src={"/assets/images/buy-above-icon.png"} width="150%" height="150%" />
                </div> */}
      </div>
    </div>
  );
};

export default FAQSection;
