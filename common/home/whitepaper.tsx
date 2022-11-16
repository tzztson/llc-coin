import Button from "../../components/button";
import axios from "axios";
import { useState, useEffect } from "react";

const Whitepaper = () => {
  const [BNBprice, setBNBPrice] = useState<number>(0);
  const [ETHprice, setETHPrice] = useState<number>(0);

  const getPrice = async () => {
    var promisePrice = [];
    promisePrice.push(
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`
      )
    );
    promisePrice.push(
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      )
    );
    const result: any = await Promise.all(promisePrice);
    setBNBPrice(result[0].data.binancecoin.usd);
    setETHPrice(result[1].data.ethereum.usd);
  };

  useEffect(() => {
    getPrice();
  }, []);
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
        <p className="text-[#ffec37]">
          {ETHprice} vs {BNBprice}
        </p>
        <Button text="DOWNLOAD WHITEPAPER" />
      </div>
    </div>
  );
};

export default Whitepaper;
