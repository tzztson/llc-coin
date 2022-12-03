import Image from "next/image";
import { useEffect, useState } from "react";
import { useWallet } from "use-wallet2";
import EthereumcontractABI from "../../components/abi/5.json";
import BSCcontractABI from "../../components/abi/97.json";
import { ethers } from "ethers";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const BuyToken = () => {
  const wallet = useWallet();
  const [isChanged, setIsChanged] = useState(true);
  const [chainId, setChainId] = useState(0);
  const [coinAmount, setCoinAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [chainSwitch, setChainSwitch] = useState<any>({
    whichChain: "",
    imageSource: "",
    rpc: "",
    address: "",
    abi: "",
    chainId: "",
  });

  const getPrice = async () => {
    try {
      if (wallet.ethereum) {
        const provider = new ethers.providers.JsonRpcBatchProvider(
          chainSwitch.rpc
        );
        const LLCcontract = new ethers.Contract(
          chainSwitch.address,
          chainSwitch.abi,
          provider
        );
        let price = (await LLCcontract.price()) / 1000000;
        setCoinPrice(price);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const switchNetwork = async () => {
    if (wallet.ethereum) {
      const provider = new ethers.providers.Web3Provider(wallet.ethereum);
      await provider.send("wallet_switchEthereumChain", [
        { chainId: chainSwitch.chainId },
      ]);
    }
    setCoinAmount(0);
    setTokenAmount(0);
  };

  const onCoinChange = (e: any) => {
    setCoinAmount(e.target.value);
    setTokenAmount((e.target.value * coinPrice) / 1.5);
  };

  const onTokenChange = (e: any) => {
    setTokenAmount(e.target.value);
    setCoinAmount((e.target.value / coinPrice) * 1.5);
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  useEffect(() => {
    if (wallet.status == "connected") {
      if (isChanged == true) {
        setChainSwitch({
          whichChain: "ETH",
          imageSource: "/assets/images/ethereum.png",
          // rpc: "https://goerli.infura.io/v3/ca11249dabe247c1a6e0877c24376dda",
          rpc: "https://mainnet.infura.io/v3/ca11249dabe247c1a6e0877c24376dda",
          address: EthereumcontractABI.presale.address,
          abi: EthereumcontractABI.presale.abi,
          chainId: "0x1",
        });
      } else {
        setChainSwitch({
          whichChain: "BNB",
          imageSource: "/assets/images/BNB.png",
          rpc: "https://bsc-dataseed1.binance.org",
          address: BSCcontractABI.presale.address,
          abi: BSCcontractABI.presale.abi,
          chainId: "0x38",
        });
      }
    }
  }, [isChanged, wallet.status]);

  useEffect(() => {
    if (wallet.status == "connected") {
      switchNetwork();
      getPrice();
    }
  }, [chainSwitch]);

  const importToken = async () => {
    const { ethereum } = window;
    const tokenAddress = chainSwitch.address;
    const tokenSymbol = "LLC";
    const tokenDecimals = 18;
    // const tokenImage =
    try {
      if (ethereum) {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20", // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              // image: tokenImage, // A string url of the token logo
            },
          },
        });
        if (wasAdded) {
          console.log("Thanks for your interest!");
        } else {
          console.log("Your loss!");
        }
      } else {
        alert("Please install metamask.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyLLC = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(wallet.ethereum);
      const signer = provider.getSigner();
      const LLCcontract = new ethers.Contract(
        chainSwitch.address,
        chainSwitch.abi,
        signer
      );
      let tx = await LLCcontract.buy(
        ethers.utils.parseUnits(tokenAmount.toString(), 18),
        {
          value: ethers.utils.parseUnits(coinAmount.toString(), 18),
        }
      );

      tx.wait();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mt-32"></div>
      <form className="max-w-[512px] grid gap-y-2 bg-transparent border-white border-[1px] rounded-2xl py-4 px-6 shadow-2xl mx-auto text-white">
        <h2 className="mb-1 text-center font-extrabold text-4xl">
          {" "}
          Buy LLC using Crypto
        </h2>
        <div className="text-center font-bold mb-1"> LLC Finance Stage </div>
        <div className="text-center font-bold mb-1"></div>
        <p className="mb-3 text-center font-xl text-2x1"></p>
        <div className="relative grid grid-cols-[minmax(max-content,100px),minmax(auto,1fr)] gap-4">
          <div className="flex flex-wrap items-center gap-x-2">
            <Image
              src={
                isChanged
                  ? "/assets/images/ethereum.png"
                  : "/assets/images/BNB.png"
              }
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
          onClick={buyLLC}
        >
          Buy Token
        </button>
      </form>
      <div className="grid gap-y-4 w-lg max-w-full py-10 px-6 mx-auto">
        <button
          className="text-white hover:underline font-bold"
          onClick={importToken}
        >
          Import LLC Token to Metamask
        </button>
      </div>
      <form action="/api/checkout_sessions" method="POST">
        <p className="text-center font-bold text-[32px] py-4">
          Buy LLC token using your card{" "}
        </p>
        <section className="flex justify-center items-center sm:flex-row sm:gap-4 flex-col gap-4">
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-24 text-right outline-none border-b-[1px] border-white bg-transparent text-2xl leading-1 py-4 px-4"
              name="amount"
              placeholder="0"
            />
            <p className="mx-3 pr-12 text-2xl">X 1.5$ (USD)</p>
          </div>
          <button
            type="submit"
            className="rounded-full text-black-800 dark:text-black-600 bg-blue-700 min-w-[200px] hover:bg-blue-400  p-4 font-bold rounded-4xl"
          >
            Buy Token
          </button>
        </section>
      </form>
    </div>
    // </div>
  );
};

export default BuyToken;
