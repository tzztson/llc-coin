import Image from "next/image";
import AboutSection from "./about-sec";
import Effects from "./effect-sec";
import IntroSection from "./intro-sec";

const MainPage = () => {
    return (
        <>
            <IntroSection />
            <AboutSection />
            <Effects />
        </>
    )
}
export default MainPage;