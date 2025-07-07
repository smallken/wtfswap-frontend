// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// pages/_app.tsx
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, sepolia, hardhat } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 创建查询客户端
const queryClient = new QueryClient();

// 创建 Wagmi 配置
const config = createConfig({
  chains: [mainnet, sepolia, hardhat],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http("http://localhost:8545"),
  },
  connectors: [injected()],
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  // 确保只在客户端渲染
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 或者返回加载指示器
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;