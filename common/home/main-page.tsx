import Image from "next/image";
import AboutSection from "./about-sec";
import BuyToken from "./buytoken";
import Effects from "./effect-sec";
import IntroSection from "./intro-sec";
import TeamSection from "./team-sec";
import Whitepaper from "./whitepaper";

const MainPage = () => {
    return (
        <>
            <IntroSection />
            <AboutSection />
            <Effects />
            <Whitepaper />
            <BuyToken />
            <TeamSection />
        </>
    )
}
export default MainPage;