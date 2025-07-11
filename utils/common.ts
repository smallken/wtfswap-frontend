import { encodeSqrtRatioX96 } from "@uniswap/v3-sdk";
import type { Token } from "@ant-design/web3";
import { Hardhat, Sepolia,Localhost } from "@ant-design/web3-wagmi";
import { TickMath } from "@uniswap/v3-sdk";
import { maxBy, minBy } from "lodash-es";

export const parsePriceToSqrtPriceX96 = (price: number): BigInt => {
  return BigInt(encodeSqrtRatioX96(price * 1000000, 1000000).toString());
};

/**
 * 
 * @param contract Wtfswap#PoolManager - 0x5FbDB2315678afecb367f032d93F642f64180aa3
Wtfswap#PositionManager - 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
Wtfswap#SwapRouter - 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
TokenModule#MyToken - 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
TokenModule#MyTokenTwo - 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
TokenModule#USDT - 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
TokenModule#WETH9 - 0x0165878A594ca255338adfa4d48449f69242Eb8F
 * @returns 
 */
export const getContractAddress = (
  contract:
    | "PoolManager"
    | "PositionManager"
    | "SwapRouter"
    | "MyToken"
    | "MyTokenTwo"
    | "USDT"
    | "WETH9"
): `0x${string}` => {
  const isProd = process.env.NODE_ENV === "production";
  if (contract === "PoolManager") {
    return isProd
      ? "0xE0Cef47B0a9bbEfD7A4Fd16e437aFC638DA1Bbd4"
      : "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  }
  if (contract === "PositionManager") {
    return isProd
      ? "0xeB5F202067ee1E8699466C7cB0b233655220aAe5"
      : "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  }
  if (contract === "SwapRouter") {
    return isProd
      ? "0x5Cc568911d45af9D037727c1BeFb05fDC02dA8Df"
      : "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  }
  if (contract === "MyToken") {
    return isProd
      ? "0x7741b9AEe8A3354a998677dbe3f0B1AC6964eCA0"
      : "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
  }
  if (contract === "MyTokenTwo") {
    return isProd
      ? "0xD745BCAf32B3FE48ef68CaaEfd2d7d57F0dC72a7"
      : "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  }
  if (contract === "USDT") {
    return isProd
      ? "0x323e78f944A9a1FcF3a10efcC5319DBb0bB6e673"
      : "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
  }
  if (contract === "WETH9") {
    return isProd
    // avae部署的链：
      ? "0xd0df82de051244f04bff3a8bb1f62e1cd39eed92"
      : "0x0165878A594ca255338adfa4d48449f69242Eb8F";
  }
  throw new Error("Invalid contract");
};

const builtInTokens: Record<string, Token> = {
  "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9": {
    icon: null,
    symbol: "DRG",
    decimal: 18,
    name: "Dragon",
    availableChains: [
      {
        chain: Localhost,
        contract: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      }   
    ],
  },
  "0x7741b9AEe8A3354a998677dbe3f0B1AC6964eCA0": {
    icon: null,
    symbol: "DRG",
    decimal: 18,
    name: "Dragon",
    availableChains: [
      {
        chain: Sepolia,
        contract: "0x7741b9AEe8A3354a998677dbe3f0B1AC6964eCA0",
      },
    ],
  },
  "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9": {
    icon: null,
    symbol: "MTK",
    decimal: 18,
    name: "MyToken",
    availableChains: [
      {
        chain: Localhost,
        contract: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      }
    ],
  },
  "0xD745BCAf32B3FE48ef68CaaEfd2d7d57F0dC72a7": {
    icon: null,
    symbol: "MTK",
    decimal: 18,
    name: "MyToken",
    availableChains: [
      {
        chain: Sepolia,
        contract: "0xD745BCAf32B3FE48ef68CaaEfd2d7d57F0dC72a7",
      },
    ],
  },
  "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707": {
    icon: null,
    symbol: "USDT",
    decimal: 6,
    name: "Tether USD",
    availableChains: [
      {
        chain: Localhost,
        contract: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      }
    ],
  },
  "0x323e78f944A9a1FcF3a10efcC5319DBb0bB6e673": {
    icon: null,
    symbol: "USDT",
    decimal: 6,
    name: "Tether USD",
    availableChains: [
      {
        chain: Sepolia,
        contract: "0x323e78f944A9a1FcF3a10efcC5319DBb0bB6e673",
      }
    ],
  },
  "0x0165878A594ca255338adfa4d48449f69242Eb8F": {
    icon: null,
    symbol: "WETH9",
    decimal: 18,
    name: "Wrapped Ether",
    availableChains: [
      {
        chain: Localhost,
        contract: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      },
    ],
  },
  "0xd0df82de051244f04bff3a8bb1f62e1cd39eed92": {
    icon: null,
    symbol: "WETH9",
    decimal: 18,
    name: "Wrapped Ether",
    availableChains: [
      {
        chain: Sepolia,
        contract: "0xd0df82de051244f04bff3a8bb1f62e1cd39eed92",
      },
    ],
  },
};


export const getTokenInfo = (address: string): Token => {
  if (builtInTokens[address]) {
    return builtInTokens[address];
  }
  return {
    icon: null,
    symbol: address.slice(-3).toUpperCase(),
    decimal: 18,
    name: address,
    availableChains: [
      {
        chain: Hardhat,
        contract: address,
      },
      {
        chain: Sepolia,
        contract: address,
      },
      {
        chain: Localhost,
        contract: address,
      },
    ],
  };
};

// 把数字转化为大整数，支持 4 位小数
export const parseAmountToBigInt = (amount: number, token?: Token): bigint => {
  return (
    BigInt(Math.floor(amount * 10000)) *
    BigInt(10 ** ((token?.decimal || 18) - 4))
  );
};

// 把大整数转化为数字，支持 4 位小数
export const parseBigIntToAmount = (amount: bigint, token?: Token): number => {
  return (
    Number((amount / BigInt(10 ** ((token?.decimal || 18) - 4))).toString()) /
    10000
  );
};

export const computeSqrtPriceLimitX96 = (
  pools: {
    pool: `0x${string}`;
    token0: `0x${string}`;
    token1: `0x${string}`;
    index: number;
    fee: number;
    feeProtocol: number;
    tickLower: number;
    tickUpper: number;
    tick: number;
    sqrtPriceX96: bigint;
  }[],
  zeroForOne: boolean
): bigint => {
  if (zeroForOne) {
    // 如果是 token0 交换 token1，那么交易完成后价格 token0 变多，价格下降下限
    // 先找到交易池的最小 tick
    const minTick =
      minBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MIN_TICK;
    // 价格限制为最小 tick - 10000，避免价格过低，在实际项目中应该按照用户设置的滑点来调整
    const limitTick = Math.max(minTick - 10000, TickMath.MIN_TICK);
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString());
  } else {
    // 反之，设置一个最大的价格
    // 先找到交易池的最大 tick
    const maxTick =
      maxBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MAX_TICK;
    // 价格限制为最大 tick + 10000，避免价格过高，在实际项目中应该按照用户设置的滑点来调整
    const limitTick = Math.min(maxTick + 10000, TickMath.MAX_TICK);
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString());
  }
};
