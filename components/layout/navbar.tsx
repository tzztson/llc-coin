import { useWallet } from "use-wallet2";

import Image from "next/image";
import { useEffect, useState } from "react";
import IntroSection from "../../common/home/intro-sec";
import Button from "../button";
const Navbar = () => {
  const wallet = useWallet();
  const [isConnect, setIsConnect] = useState(false);
  const connectWallet = () => {
    setIsConnect(!isConnect);
  };

  useEffect(() => {
    if (wallet.status == "connected") {
      setIsConnect(false);
    }
  }, [wallet.status]);

  const connect_btn_text =
    wallet.status == "connected"
      ? wallet.account?.toString().slice(0, 4) +
        "..." +
        wallet.account?.toString().slice(-4)
      : "Connect Wallet";

  return (
    <div className="relative">
      {isConnect ? (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="crypto-modal"
                onClick={() => setIsConnect(false)}
              >
                <Image
                  src={"/assets/images/cross.svg"}
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Connect wallet
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Connect with one of our available wallet providers or create a
                  new one.
                </p>
                <ul className="my-4 space-y-3">
                  <li>
                    <span
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={() => wallet.connect("injected")}
                    >
                      <Image
                        src={"/assets/images/metamask.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />

                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        MetaMask
                      </span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Popular
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => wallet.connect("walletlink")}
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <Image
                        src={"/assets/images/coinbase.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        Coinbase Wallet
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => wallet.connect("walletconnect")}
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <Image
                        src={"/assets/images/wallet-connect.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        WalletConnect
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => wallet.connect("portis")}
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <Image
                        src={"/assets/images/fortmatic.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        Fortmatic
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="sm:block hidden z-[1] opacity-25 absolute bg-[#0A2340] w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full -top-28 -left-28 lg:-top-40 lg:-left-40"></div>
      <div className="z-[3] absolute lg:w-24 lg:h-24 w-16 h-16 max-[360px]:w-12:h-12 lg:top-[30px] lg:left-[40px] top-[20px] left-[20px]">
        <Image
          className=""
          src={"/assets/images/nav-token.png"}
          width="100%"
          height="100%"
          alt=""
        />
      </div>
      <div className="z-[1] opacity-25 absolute right-0 image-control sm:block hidden">
        <Image src={"/assets/images/nav-coin.png"} layout="fill" alt="" />
      </div>
      <div className="z-[3] absolute top-[40px] right-[40px]">
        <Button text={connect_btn_text} control={connectWallet} />
      </div>
      <div className="z-[3] absolute 2xl:bottom-[1%] 2xl:left-[1%] 2xl:block hidden opacity-25">
        <Image
          src={"/assets/images/nav-coin.png"}
          width="270px"
          height="180px"
          alt=""
        />
      </div>
      <div className="relative">
        <span className="absolute w-[100%] h-[300px] bottom-0 bg-gradient-to-t from-[#060A21] to-transparent"></span>
      </div>
    </div>
  );
};

export default Navbar;
