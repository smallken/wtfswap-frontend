import React from "react";
import { Button, message, Select, Card, Input, Space } from "antd";
import WtfLayout from "@/components/WtfLayout";
import { getContractAddress } from "@/utils/common";
import { useWriteMyTokenMint, useWriteUsdtMint, useWriteMyTokenTwoMint } from "@/utils/contracts";

import { useAccount } from "@ant-design/web3";

const GetDebugToken: React.FC = () => {
  const { account } = useAccount();
  const [tokenAddress, setTokenAddress] = React.useState<`0x${string}`>(
    getContractAddress("MyToken")
  );
  const [amount, setAmount] = React.useState<string>("1000000000000000000");
  const { writeContractAsync } = useWriteMyTokenMint();
  const [loading, setLoading] = React.useState(false);
  return (
    <Card title="Get DRG Token">
      <Space direction="vertical">
        <Select value={tokenAddress} onChange={setTokenAddress}>
          <Select.Option value={getContractAddress("MyToken")}>
            dragon({getContractAddress("MyToken")})
          </Select.Option>
          {/* <Select.Option value={getContractAddress("DebugTokenB")}>
            DebugTokenB({getContractAddress("DebugTokenB")})
          </Select.Option>
          <Select.Option value={getContractAddress("DebugTokenC")}>
            DebugTokenC({getContractAddress("DebugTokenC")})
          </Select.Option> */}
        </Select>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <p>
          tokenAddress: {tokenAddress}
          <br />
          amount: {amount.slice(0, -18) || "<1"} Token
        </p>
        <Button
          loading={loading}
          type="primary"
          onClick={async () => {
            if (!account?.address) {
              message.warning("Please connect wallet");
              return;
            }
            console.log("mint", tokenAddress, account?.address, amount);
            setLoading(true);
            try {
              await writeContractAsync({
                address: tokenAddress,
                args: [account?.address as `0x${string}`, BigInt(amount)],
              });
              message.success("Mint success");
            } catch (error: any) {
              message.error(error.message);
            }
            setLoading(false);
          }}
        >
          Mint
        </Button>
      </Space>
    </Card>
  );
};

const GetUSDTToken: React.FC = () => {
  const { account } = useAccount();
  const [tokenAddress, setTokenAddress] = React.useState<`0x${string}`>(
    getContractAddress("USDT")
  );
  const [amount, setAmount] = React.useState<string>("1000000");
  const { writeContractAsync } = useWriteUsdtMint();
  const [loading, setLoading] = React.useState(false);
  return (
    <Card title="Get Usdt Token">
      <Space direction="vertical">
        <Select value={tokenAddress} onChange={setTokenAddress}>
          <Select.Option value={getContractAddress("USDT")}>
            USDT({getContractAddress("USDT")})
          </Select.Option>
          {/* <Select.Option value={getContractAddress("DebugTokenB")}>
            DebugTokenB({getContractAddress("DebugTokenB")})
          </Select.Option>
          <Select.Option value={getContractAddress("DebugTokenC")}>
            DebugTokenC({getContractAddress("DebugTokenC")})
          </Select.Option> */}
        </Select>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <p>
          tokenAddress: {tokenAddress}
          <br />
          amount: {amount.slice(0, -6) || "<1"} Token
        </p>
        <Button
          loading={loading}
          type="primary"
          onClick={async () => {
            if (!account?.address) {
              message.warning("Please connect wallet");
              return;
            }
            console.log("mint", tokenAddress, account?.address, amount);
            setLoading(true);
            try {
              await writeContractAsync({
                address: tokenAddress,
                args: [account?.address as `0x${string}`, BigInt(amount)],
              });
              message.success("Mint success");
            } catch (error: any) {
              message.error(error.message);
            }
            setLoading(false);
          }}
        >
          Mint
        </Button>
      </Space>
    </Card>
  );
};

const GetKTYToken: React.FC = () => {
  const { account } = useAccount();
  const [tokenAddress, setTokenAddress] = React.useState<`0x${string}`>(
    getContractAddress("MyTokenTwo")
  );
  const [amount, setAmount] = React.useState<string>("1000000000000000000");
  const { writeContractAsync } = useWriteMyTokenTwoMint();
  const [loading, setLoading] = React.useState(false);
  return (
    <Card title="Get KTY Token">
      <Space direction="vertical">
        <Select value={tokenAddress} onChange={setTokenAddress}>
          <Select.Option value={getContractAddress("MyTokenTwo")}>
            KTY({getContractAddress("MyTokenTwo")})
          </Select.Option>
          {/* <Select.Option value={getContractAddress("DebugTokenB")}>
            DebugTokenB({getContractAddress("DebugTokenB")})
          </Select.Option>
          <Select.Option value={getContractAddress("DebugTokenC")}>
            DebugTokenC({getContractAddress("DebugTokenC")})
          </Select.Option> */}
        </Select>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <p>
          tokenAddress: {tokenAddress}
          <br />
          amount: {amount.slice(0, -18) || "<1"} Token
        </p>
        <Button
          loading={loading}
          type="primary"
          onClick={async () => {
            if (!account?.address) {
              message.warning("Please connect wallet");
              return;
            }
            console.log("mint", tokenAddress, account?.address, amount);
            setLoading(true);
            try {
              await writeContractAsync({
                address: tokenAddress,
                args: [account?.address as `0x${string}`, BigInt(amount)],
              });
              message.success("Mint success");
            } catch (error: any) {
              message.error(error.message);
            }
            setLoading(false);
          }}
        >
          Mint
        </Button>
      </Space>
    </Card>
  );
};


export default function WtfswapPool() {
  return (
    <WtfLayout>
      <div
        style={{
          padding: 24,
        }}
      >
        <GetDebugToken />
        <GetUSDTToken />
        <GetKTYToken />
      </div>
    </WtfLayout>
  );
}
