import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UseWalletProvider } from "use-wallet2";
import { connectors } from "../components/connectors";

function App({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider autoConnect={true} connectors={connectors}>
      <Component {...pageProps} />
    </UseWalletProvider>
  );
}

export default App;
