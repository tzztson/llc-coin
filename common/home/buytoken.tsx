import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../components/button";

const BuyToken = () => {
  const [imageSource, setImageSource] = useState<string>(
    "/assets/images/Ethereum.png"
  );

  const handleChange = (e: any) => {
    setImageSource(
      e.target.value == "ETH"
        ? "/assets/images/Ethereum.png"
        : "/assets/images/BNB.png"
    );
  };
  return (
    // <div className="sm:rounded-2xl rounded-none my-24 py-4 z-20  flex justify-evenly items-center first-letter:border-[#627eea] bg-gradient-to-r from-[#310056]  to-[#5f5fa7] gap-7 px-12 py-">
    <div className="container mx-auto py-6 px-4">
      <form className="max-w-[512px] grid gap-y-2 bg-transparent border-white border-[1px] rounded-2xl py-4 px-6 shadow-2xl mx-auto text-white">
        <h2 className="mb-1 text-center font-extrabold text-4xl">
          {" "}
          Join LLC Presale{" "}
        </h2>
        <div className="text-center font-bold mb-1">
          {" "}
          LLC Finance Presale Stage{" "}
        </div>
        <div className="text-center font-bold mb-1"></div>
        <p className="mb-3 text-center font-xl text-2x1"></p>
        <div className="relative grid grid-cols-[minmax(max-content,100px),minmax(auto,1fr)] gap-4">
          <div className="flex flex-wrap items-center gap-x-2">
            <Image
              src={imageSource}
              alt="TFT logo"
              width="40"
              height="40"
              className="bg-white rounded-full w-7 h-7"
            />
            <select
              className="bg-transparent border-none outline-none font-bold"
              onChange={(e) => handleChange(e)}
            >
              <option
                key={"key1"}
                className="bg-[#14173c] text-white font-bold"
              >
                ETH
              </option>
              <option
                key={"key2"}
                className="bg-[#14173c] text-white font-bold"
              >
                BNB
              </option>
            </select>
          </div>
          <input
            type="text"
            placeholder="0.0"
            className="outline-none bg-transparent text-2xl leading-1 py-4 w-full"
          />
        </div>
        <div className="flex w-full items-center">
          <span className="flex-auto bg-white h-px"></span>
        </div>
        <div className="relative grid grid-cols-[minmax(max-content,100px),minmax(auto,1fr)] gap-4">
          <div className="flex flex-wrap items-center gap-x-2">
            <Image
              src={"/assets/images/LLCcoin.png"}
              alt="TFT logo"
              width="40"
              height="40"
              className="bg-white rounded-full w-7 h-7"
            />
            <p className="pl-2 font-bold">LLC</p>
          </div>
          <input
            type="text"
            placeholder="0.0"
            className="outline-none bg-transparent text-2xl leading-1 py-4 w-full"
          />
        </div>
        <button
          type="button"
          className="rounded-full text-black-800 dark:text-black-600 bg-blue-700 hover:bg-blue-400 w-full p-4 font-bold rounded-4xl"
          // className="text-[white] font-bold text-black-800 dark:text-black-600 bg-blue-700 hover:bg-blue-400 p-2  mx-2 rounded-xl"
        >
          Buy Token
        </button>
      </form>
      <div className="grid gap-y-4 w-lg max-w-full py-10 px-6 mx-auto">
        <button className="text-white hover:underline font-bold">
          Import TFT Token to Metamask
        </button>
      </div>
    </div>
    // </div>
  );
};

export default BuyToken;
