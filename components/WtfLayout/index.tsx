import React from "react";
import Header from "./Header";
import styles from "./styles.module.css";
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  Hardhat,
  Sepolia,
  Localhost,
} from "@ant-design/web3-wagmi";
import { useAccount, http } from "wagmi";

interface WtfLayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<WtfLayoutProps> = ({ children }) => {
  const { address } = useAccount();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || !address) {
    return <div className={styles.connectTip}>Please Connect First.</div>;
  }
  return children;
};

const WtfLayout: React.FC<WtfLayoutProps> = ({ children }) => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      chains={[Sepolia, Hardhat, Localhost]}
      transports={{
        [Hardhat.id]: http("http://127.0.0.1:8545"),
        [Sepolia.id]: http("https://api.zan.top/public/eth-sepolia"),
        [Localhost.id]: http("http://127.0.0.1:8546"),
      }}
      ens
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: "Popular",
        }),
        OkxWallet(),
      ]}
      walletConnect={{
        projectId: "c07c0051c2055890eade3556618e38a6",
      }}
    >
      <div className={styles.layout}>
        <Header />
        <LayoutContent>{children}</LayoutContent>
      </div>
    </WagmiWeb3ConfigProvider>
  );
};

export default WtfLayout;
