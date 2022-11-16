import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { useWallet } from "use-wallet2";
import contractABI from "../../components/abi/5.json";
import { ethers } from "ethers";

const BuyToken = () => {
  const wallet = useWallet();
  const [isChanged, setIsChanged] = useState(true);
  const [coinAmount, setCoinAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);

  const [chainSwitch, setChainSwitch] = useState<any>({
    whichChain: "",
    imageSource: "",
    rpc: "",
    address: "",
    abi: "",
    chainId: "",
    price: 1500,
  });
  const switchNetwork = async () => {
    if (wallet.ethereum) {
      const provider = new ethers.providers.Web3Provider(wallet.ethereum);
      await provider.send("wallet_switchEthereumChain", [
        { chainId: chainSwitch.chainId },
      ]);
    }
  };

  const onCoinChange = (e: any) => {
    setCoinAmount(e.target.value);
    setTokenAmount(e.target.value * chainSwitch.price);
  };

  const onTokenChange = (e: any) => {
    setTokenAmount(e.target.value);
    setCoinAmount(e.target.value * chainSwitch.price);
  };

  useEffect(() => {
    if (isChanged == true) {
      setChainSwitch({
        whichChain: "ETH",
        imageSource: "/assets/images/ethereum.png",
        rpc: "https://goerli.infura.io/v3/ca11249dabe247c1a6e0877c24376dda",
        address: contractABI.presale.address,
        abi: contractABI.presale.abi,
        chainId: "0x5",
        price: 1500,
      });
    } else {
      setChainSwitch({
        whichChain: "BNB",
        imageSource: "/assets/images/BNB.png",
        rpc: "https://bsc-dataseed.binance.org/",
        address: contractABI.presale.address,
        abi: contractABI.presale.abi,
        chainId: "0x61",
        price: 300,
      });
    }
  }, [isChanged]);
  useEffect(() => {
    switchNetwork();
  }, [chainSwitch]);

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
              src={chainSwitch.imageSource}
              alt="TFT logo"
              width="40"
              height="40"
              className="bg-white rounded-full w-7 h-7"
            />
            <select
              className="bg-transparent border-none outline-none font-bold"
              onChange={(e) => setIsChanged(!isChanged)}
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
            value={coinAmount}
            onChange={onCoinChange}
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
            value={tokenAmount}
            onChange={onTokenChange}
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
