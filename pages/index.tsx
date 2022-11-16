import type { NextPage } from "next";
import MainPage from "../common/home/main-page";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
};

export default Home;
