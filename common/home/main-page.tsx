import Image from "next/image";
import AboutSection from "./about-sec";
import BuyToken from "./buytoken";
import Effects from "./effect-sec";
import FAQSection from "./faq-sec";
import HolderSection from "./holder-sec";
import IntroSection from "./intro-sec";
import TeamSection from "./team-sec";
import Whitepaper from "./whitepaper";

const MainPage = () => {
  return (
    <>
      <AboutSection />
      <Effects />
      <Whitepaper />
      <BuyToken />
      <TeamSection />
      <FAQSection />
      <HolderSection />
    </>
  );
};
export default MainPage;
