import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24", // 必须 >=0.8.13
    settings: {
      viaIR: true, // 启用 IR 编译
      optimizer: {
        enabled: true,
        runs: 200, // 根据合约用途调整
      },
      outputSelection: {
        "*": {
          "*": ["ir", "irOptimized", "evm.bytecode"] // 可选：生成中间文件
        }
      }
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true // 大型合约需要
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: "https://api.zan.top/public/eth-sepolia", // 实际项目中需要替换为你的 ZAN 的 RPC 地址，这里用的是测试用的公共地址，可能不稳定
      accounts: ["2aa87e12c923c121ab493fa29c4ac00361383f1cf29139a9a4eb81913be54886"], // 替换为你的钱包私钥
    },
  },
  mocha: {
    timeout: 100000 // 增加测试超时时间
  }
};

export default config;