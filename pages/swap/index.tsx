import React, { useState, useEffect, useCallback, useMemo } from "react";
import { TokenSelect, useAccount, type Token } from "@ant-design/web3";
import { Card, Input, Button, Space, Typography, message } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { uniq } from "lodash-es";
import { parseUnits, formatUnits } from "viem";

import WtfLayout from "@/components/WtfLayout";
import Balance from "@/components/Balance";
import Faucet from "@/components/Faucet";
import styles from "./swap.module.css";

import { usePublicClient } from "wagmi";
import { swapRouterAbi } from "@/utils/contracts";
import Link from "next/link";
import {
  useReadPoolManagerGetPairs,
  useReadIPoolManagerGetAllPools,
  useWriteSwapRouterExactInput,
  useWriteSwapRouterExactOutput,
  useWriteErc20Approve,
} from "@/utils/contracts";
import useTokenAddress from "@/hooks/useTokenAddress";
import {
  getContractAddress,
  getTokenInfo,
  computeSqrtPriceLimitX96,
  parseAmountToBigInt,
  parseBigIntToAmount,
} from "@/utils/common";


// 创建 FaucetIcon 组件
const FaucetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V12M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const { Text } = Typography;

function Swap() {
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [tokenA, setTokenA] = useState<Token>();
  const [tokenB, setTokenB] = useState<Token>();
  const tokenAddressA = useTokenAddress(tokenA);
  const tokenAddressB = useTokenAddress(tokenB);
  const [isExactInput, setIsExactInput] = useState(true);
  const [amountA, setAmountA] = useState<string>("");
  const [amountB, setAmountB] = useState<string>("");
  // 两个代币的数量
  // const [amountA, setAmountA] = useState(0);
  // const [amountB, setAmountB] = useState(0);
  const { account } = useAccount();

  // 获取所有的交易对
  const { data: pairs = [] } = useReadPoolManagerGetPairs({
    address: getContractAddress("PoolManager"),
  });

  useEffect(() => {
    const options: Token[] = uniq(
      pairs.map((pair) => [pair.token0, pair.token1]).flat()
    ).map(getTokenInfo);
    setTokens(options);
    setTokenA(options[0]);
    setTokenB(options[1]);
  }, [pairs]);

  // 获取所有的交易池
  const { data: pools = [] } = useReadIPoolManagerGetAllPools({
    address: getContractAddress("PoolManager"),
  });

  // 计算交易参数
  const { swapIndexPath, sqrtPriceLimitX96, zeroForOne } = useMemo(() => {
    if (!tokenAddressA || !tokenAddressB) {
      return {
        swapIndexPath: [],
        sqrtPriceLimitX96: BigInt(0),
        zeroForOne: true
      };
    }

    const [token0, token1] = tokenAddressA < tokenAddressB
      ? [tokenAddressA, tokenAddressB]
      : [tokenAddressB, tokenAddressA];

    const zeroForOne = token0 === tokenAddressA;

    const swapPools = pools.filter(pool =>
      pool.token0 === token0 &&
      pool.token1 === token1 &&
      pool.liquidity > 0
    );

    const sortedPools = [...swapPools].sort((a, b) => {
      if (a.tick !== b.tick) {
        return zeroForOne ? b.tick - a.tick : a.tick - b.tick;
      }
      return a.fee - b.fee;
    });

    const sqrtPriceLimit = computeSqrtPriceLimitX96(sortedPools, zeroForOne);

    return {
      swapIndexPath: sortedPools.map(pool => pool.index),
      sqrtPriceLimitX96: sqrtPriceLimit,
      zeroForOne
    };
  }, [pools, tokenAddressA, tokenAddressB]);

  const publicClient = usePublicClient();

  // 计算输出金额
  const calculateOutput = useCallback(async (inputValue: string, isInputMode: boolean) => {
    if (
      !publicClient ||
      !tokenAddressA ||
      !tokenAddressB ||
      !tokenA?.decimal ||
      !tokenB?.decimal ||
      !inputValue ||
      isNaN(parseFloat(inputValue))) {
      return;
    }
    if (tokenAddressA === tokenAddressB) {
      message.error("Please select different tokens");
      return;
    }

    console.log("--- 开始计算 ---");
    console.log("输入模式:", isInputMode ? "输入" : "输出");
    console.log("代币A:", tokenA?.symbol, "小数位:", tokenA?.decimal);
    console.log("代币B:", tokenB?.symbol, "小数位:", tokenB?.decimal);
    console.log("输入值:", inputValue);
    setCalculating(true);

    try {
      if (isInputMode) {
        console.log("==============calculate------Output=========");
        const amountIn = parseUnits(inputValue, tokenA.decimal);
        console.log("输入最小单位:", amountIn.toString());
        const result = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactInput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountIn,
              sqrtPriceLimitX96,
            },
          ],
        });
        console.log("合约返回:", result.result.toString());
        console.log("tokenB.decimal:", tokenB.decimal);
        if (tokenA.decimal === 6) {
          const formattedAmount = formatUnits(result.result, 6);
          setAmountB(formattedAmount);
          console.log("格式化结果:", formattedAmount);
        } else {
          const formattedAmount = formatUnits(result.result, tokenB.decimal);
          // const formatRe = parseBigIntToAmount(result.result, tokenB);
          // const str =formatRe.toString();
          setAmountB(formattedAmount);
          console.log("格式化结果:", formattedAmount);
        }

      } else {
        console.log("==============calculate------Iutput=========");
        const amountOut = parseUnits(inputValue, tokenB.decimal);
        console.log("amountOut:", amountOut);
        const result = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactOutput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountOut,
              sqrtPriceLimitX96,
            },
          ],
        });
        console.log("result:", result.result);
        const formattedAmount = formatUnits(result.result, tokenA.decimal);
        //  setAmountA(parseBigIntToAmount(result.result, tokenA));
        console.log("formattedAmount:", formattedAmount);
        setAmountA(formattedAmount);
      }
    } catch (e: any) {
      console.error("Calculation error:", e);
      message.error(e.shortMessage || e.message || "Calculation failed");

    } finally {
      setCalculating(false);
    }
  }, [
    publicClient,
    tokenAddressA,
    tokenAddressB,
    tokenA,
    tokenB,
    swapIndexPath,
    sqrtPriceLimitX96
  ]);

  const handleAmountAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountA(value);
    setIsExactInput(true);

    // 清除B的值并触发计算
    setAmountB("计算中...");
    if (value) {
      calculateOutput(value, true);
    } else {
      setAmountB("");
    }
  };

  const handleAmountBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountB(value);
    setIsExactInput(false);

    // 清除A的值并触发计算
    setAmountA("计算中...");
    if (value) {
      calculateOutput(value, false);
    } else {
      setAmountA("");
    }
  };

  const handleSwitch = () => {
    const tempToken = tokenA;
    setTokenA(tokenB);
    setTokenB(tempToken);

    const tempAmount = amountA;
    setAmountA(amountB);
    setAmountB(tempAmount);

    setIsExactInput(!isExactInput);
  };

  const { writeContractAsync: writeExactInput } = useWriteSwapRouterExactInput();
  const { writeContractAsync: writeExactOutput } = useWriteSwapRouterExactOutput();
  const { writeContractAsync: writeApprove } = useWriteErc20Approve();

  return (
    <Card title="Swap" className={styles.swapCard}>
      <Card>
        <Input
          variant="borderless"
          value={amountA}
          type="number"
          onChange={handleAmountAChange}
          disabled={calculating}
          addonAfter={
            <TokenSelect
              value={tokenA}
              onChange={setTokenA}
              options={tokens}
              disabled={calculating}
            />
          }
        />
        <Space className={styles.swapSpace}>
          <Text type="secondary"></Text>
          <Text type="secondary">
            Balance: <Balance token={tokenA} />
          </Text>
        </Space>
      </Card>
      <Space className={styles.switchBtn}>
        <Button
          shape="circle"
          icon={<SwapOutlined />}
          onClick={handleSwitch}
          disabled={calculating}
        />
      </Space>
      <Card>
        <Input
          value={amountB}
          variant="borderless"
          type="number"
          onChange={handleAmountBChange}
          disabled={calculating}
          addonAfter={
            <TokenSelect
              value={tokenB}
              onChange={setTokenB}
              options={tokens}
              disabled={calculating}
            />
          }
        />
        <Space className={styles.swapSpace}>
          <Text type="secondary"></Text>
          <Text type="secondary">
            Balance: <Balance token={tokenB} />
          </Text>
        </Space>
      </Card>
      <Button
        type="primary"
        size="large"
        block
        className={styles.swapBtn}
        disabled={
          !tokenAddressA ||
          !tokenAddressB ||
          !amountA ||
          !amountB ||
          calculating ||
          isNaN(parseFloat(amountA)) ||
          isNaN(parseFloat(amountB)) ||
          parseFloat(amountA) <= 0 ||
          parseFloat(amountB) <= 0
        }
        loading={loading || calculating}
        onClick={async () => {
          if (!tokenA?.decimal || !tokenB?.decimal || !account?.address) return;

          setLoading(true);
          try {
            if (isExactInput) {
              const swapParams = {
                tokenIn: tokenAddressA as `0x${string}`,
                tokenOut: tokenAddressB as `0x${string}`,
                indexPath: swapIndexPath,
                amountIn: parseUnits(amountA, tokenA.decimal),
                amountOutMinimum: parseUnits(
                  (parseFloat(amountB) * 0.995).toFixed(tokenB.decimal),
                  tokenB.decimal
                ),
                recipient: account.address as `0x${string}`,
                deadline: BigInt(Math.floor(Date.now() / 1000) + 1000),
                sqrtPriceLimitX96,
              };

              await writeApprove({
                address: tokenAddressA as `0x${string}`,
                args: [getContractAddress("SwapRouter"), swapParams.amountIn],
              });

              await writeExactInput({
                address: getContractAddress("SwapRouter") as `0x${string}`,
                args: [swapParams],
              });
            } else {
              const swapParams = {
                tokenIn: tokenAddressA as `0x${string}`,
                tokenOut: tokenAddressB as `0x${string}`,
                indexPath: swapIndexPath,
                amountOut: parseUnits(amountB, tokenB.decimal),
                amountInMaximum: parseUnits(
                  (parseFloat(amountA) * 1.005).toFixed(tokenA.decimal),
                  tokenA.decimal
                ),
                recipient: account.address as `0x${string}`,
                deadline: BigInt(Math.floor(Date.now() / 1000) + 1000),
                sqrtPriceLimitX96,
              };

              await writeApprove({
                address: tokenAddressA as `0x${string}`,
                args: [
                  getContractAddress("SwapRouter"),
                  swapParams.amountInMaximum,
                ],
              });

              await writeExactOutput({
                address: getContractAddress("SwapRouter") as `0x${string}`,
                args: [swapParams],
              });
            }

            message.success("Swap success");
            setAmountA("");
            setAmountB("");
          } catch (e: any) {
            console.error("Swap error:", e);
            message.error(e.shortMessage || e.message || "Swap failed");
          } finally {
            setLoading(false);
          }
        }}
      >
        {calculating ? "Calculating..." : "Swap"}
      </Button>
      <div className={styles.faucetContainer}>
  <Link href="/swap/debug">
    <Button 
      type="dashed" 
      className={styles.faucetButton}
      icon={<FaucetIcon />} // 添加一个图标使按钮更直观
    >
      Get Test Coins
    </Button>
  </Link>
</div>
    </Card>
  );
}

export default function Wtfswap() {
  return (
    <WtfLayout>
      <Swap />
    </WtfLayout>
  );
}