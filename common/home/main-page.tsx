import Image from "next/image";
import AboutSection from "./about-sec";
import Effects from "./effect-sec";
import IntroSection from "./intro-sec";
import Whitepaper from "./whitepaper";

const MainPage = () => {
    return (
        <>
            <IntroSection />
            <AboutSection />
            <Effects />
            <Whitepaper />
        </>
    )
}
export default MainPage;