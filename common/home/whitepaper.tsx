import Button from "../../components/button";
import { useState, useEffect } from "react";

const Whitepaper = () => {
  return (
    <div className="mt-24">
      <div className="bg-[#1d1e42] p-[32px] flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-white text-[24px] md:text-[32px] tracking-wide font-extrabold">
          Why People Wanna Purchase This LLC
        </h1>
        <p className="text-white">
          You can get one of the world ‘ s most valuable health knowledge for
          Free. For the benefit of mankind!
        </p>
        <p className="text-[#ffec37]">{/* {ETHprice} vs {BNBprice} */}</p>
        <Button text="DOWNLOAD WHITEPAPER" />
      </div>
    </div>
  );
};

export default Whitepaper;
