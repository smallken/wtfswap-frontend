import React, { useState, useEffect } from 'react';
import WtfLayout from "../../components/WtfLayout";
import { Card, Input, Button, Space, Typography } from 'antd';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT, USDC } from '@ant-design/web3-assets/tokens';
import { SwapOutlined } from '@ant-design/icons';
import styles from '../css/styles.module.css';
import {
  useReadPoolManagerGetPairs,
  useReadIPoolManagerGetAllPools,
  useWriteSwapRouterExactInput,
  useWriteSwapRouterExactOutput,
  useWriteErc20Approve,
} from "@/utils/contracts";
import {
  getContractAddress,
  getTokenInfo
} from "@/utils/common";
import { uniq } from "lodash-es";
import { useConfig } from 'wagmi';

const { Text } = Typography;

export default function Wtfswap() {
//   const [tokenA, setTokenA] = useState<Token>(ETH);
//  const [tokenB, setTokenB] = useState<Token>(USDT);
//  const [amountA, setAmountA] = useState(0);
//  const [amountB, setAmountB] = useState(0);
// const config = useConfig();
  // const [wagmiReady, setWagmiReady] = React.useState(false);
  // React.useEffect(() => {
  //   // 确保 Wagmi 配置已加载
  //   if (config) {
  //     setWagmiReady(true);
  //   }
  // }, [config]);
  
  // if (!wagmiReady) {
  //   return <div>Loading Wagmi configuration...</div>;
  // }
 // 用户可以选择的代币
const [tokens, setTokens] = useState<Token[]>([]);
// 用户选择的两个代币
const [tokenA, setTokenA] = useState<Token>();
const [tokenB, setTokenB] = useState<Token>();
// 两个代币的数量
  const [amountA, setAmountA] = useState(0);
  const [amountB, setAmountB] = useState(0);
 // 使用 useReadPoolManagerGetPairs 钩子
  const { data: pairs = [], error, isLoading } = useReadPoolManagerGetPairs({
    address: getContractAddress("PoolManager"),
    // onError: (err: any) => console.error("获取交易对失败:", err),
  });

 const [optionsA, setOptionsA] = useState<Token[]>([ETH, USDT, USDC]);
 const [optionsB, setOptionsB] = useState<Token[]>([USDT, ETH, USDC]);

 const handleAmountAChange = (e: any) => {
   setAmountA(parseFloat(e.target.value));
   // 后续章节实现
 };

useEffect(() => {
    console.log("pairs:", pairs);
    if (!pairs || pairs.length === 0) return;
    try {
      const tokenAddresses = uniq(
        pairs.map((pair) => [pair.token0, pair.token1]).flat()
      );
      const tokenOptions = tokenAddresses
        .map(getTokenInfo)
        .filter(Boolean) as Token[];
      setTokens(tokenOptions);
      if (tokenOptions.length > 0) {
        setTokenA(tokenOptions[0]);
        setTokenB(tokenOptions[1] || tokenOptions[0]);
      }
    } catch (e) {
      console.error("处理交易对时出错:", e);
    }
  }, [pairs]);

 const handleSwitch = () => {
   setTokenA(tokenB);
   setTokenB(tokenA);
   setAmountA(amountB);
   setAmountB(amountA);
 };

 const handleMax = () => {
 };

  return (
    <WtfLayout>
      <Card title="Swap" className={styles.swapCard}>
        <Card>
          <Input
           variant="borderless"
           value={amountA}
           type="number"
           onChange={(e) => handleAmountAChange(e)}
           addonAfter={
             <TokenSelect value={tokenA} onChange={setTokenA} options={tokens} />
           }
         />
          <Space className={styles.swapSpace}>
           <Text type="secondary">
             $ 0.0
           </Text>
           <Space>
             <Text type="secondary">
               Balance: 0
             </Text>
              <Button size="small" onClick={handleMax} type="link">
               Max
             </Button>
           </Space>
         </Space>
        </Card>
        <Space className={styles.switchBtn}>
         <Button
           shape="circle"
           icon={<SwapOutlined />}
           onClick={handleSwitch}
         />
       </Space>
        <Card>
          <Input
           variant="borderless"
           value={amountB}
           type="number"
           addonAfter={
             <TokenSelect value={tokenB} onChange={setTokenB} options={tokens} />
           }
         />
          <Space className={styles.swapSpace}>
           <Text type="secondary">
             $ 0.0
           </Text>
           <Text type="secondary">
             Balance: 0
           </Text>
         </Space>
        </Card>
        <Button type="primary" size="large" block className={styles.swapBtn}>
         Swap
       </Button>
      </Card>
    </WtfLayout>
  );
}