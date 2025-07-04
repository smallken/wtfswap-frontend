module.exports = {
  solidity: {
    version: "0.8.24", // 确保 >=0.8.13
    settings: {
      viaIR: true, // 启用 IR 编译
      optimizer: {
        enabled: true,
        runs: 200, // 根据合约用途调整
      },
    },
  },
};