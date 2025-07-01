// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// 添加以下导入
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createConfig, http } from 'wagmi';
import { Web3ConfigProvider } from '@ant-design/web3';

// 创建 QueryClient 实例
const queryClient = new QueryClient();

// 配置 Wagmi
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 包裹所有内容在 WagmiProvider 和 QueryClientProvider 中
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Web3ConfigProvider>
          <Component {...pageProps} />
        </Web3ConfigProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}