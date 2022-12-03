import Image from "next/image";
import AboutSection from "./about-sec";
import BuyToken from "./buytoken";
import Effects from "./effect-sec";
import FAQSection from "./faq-sec";
import FruitSwiper from "./fruit-swiper";
import HolderSection from "./holder-sec";
import IntroSection from "./intro-sec";
import MemberSwiper from "./member-swiper";
import TeamSection from "./team-sec";
import Whitepaper from "./whitepaper";

const MainPage = () => {
  return (
    <>
      {/* <AboutSection /> */}
      {/* <Whitepaper /> */}
      {/* <IntroSection /> */}
      <BuyToken />
      {/* <Effects /> */}
      <FruitSwiper />
      <MemberSwiper />
      <FAQSection />
      <HolderSection />
    </>
  );
};
export default MainPage;
