import React from "react";
import { Flex, Table, Space, Typography, Button, message } from "antd";
import type { TableProps } from "antd";
import WtfLayout from "../../components/WtfLayout";
import AddPositionModal from "../../components/AddPositionModal";
import styles from "../css/positions.module.css";
// import { AddressWithCopy, BigNumberWithCopy } from "../components/common";
import { useReadPositionManagerGetAllPositions,useWriteErc20Approve,
 useWritePositionManagerMint } from "@/utils/contracts";
import { getContractAddress } from "@/utils/common";
import { useAccount } from "@ant-design/web3";


const columns: TableProps["columns"] = [
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    ellipsis: true,
    // render: (value: string) => <AddressWithCopy address={value} />,
  },
  {
    title: "Token 0",
    dataIndex: "token0",
    key: "token0",
    ellipsis: true,
    // render: (value: string) => <AddressWithCopy address={value} />,
  },
  {
    title: "Token 1",
    dataIndex: "token1",
    key: "token1",
    ellipsis: true,
    // render: (value: string) => <AddressWithCopy address={value} />,
  },
  {
    title: "Index",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Fee",
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: "Liquidity",
    dataIndex: "liquidity",
    key: "liquidity",
    render: (value: bigint) => {
      return value.toString();
    },
  },
  {
    title: "Tick Lower",
    dataIndex: "tickLower",
    key: "tickLower",
  },
  {
    title: "Tick Upper",
    dataIndex: "tickUpper",
    key: "tickUpper",
  },
  {
    title: "Tokens Owed 0",
    dataIndex: "tokensOwed0",
    key: "tokensOwed0",
    render: (value: bigint) => {
      return value.toString();
    },
  },
  {
    title: "Tokens Owed 1",
    dataIndex: "tokensOwed1",
    key: "tokensOwed1",
    render: (value: bigint) => {
      return value.toString();
    },
  },
  {
    title: "Fee Growth Inside 0",
    dataIndex: "feeGrowthInside0LastX128",
    key: "feeGrowthInside0LastX128",
    render: (value: bigint) => {
      return value.toString();
    },
  },
  {
    title: "Fee Growth Inside 1",
    dataIndex: "feeGrowthInside1LastX128",
    key: "feeGrowthInside1LastX128",
    render: (value: bigint) => {
      return value.toString();
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Space className={styles.actions}>
        <a>Remove</a>
        <a>Collect</a>
      </Space>
    ),
  },
];


// 处理金额转换的辅助函数
const toBigInt = (value: any): bigint => {
  if (typeof value === 'bigint') {
    return value; // 如果已经是 bigint，直接返回
  }
  
  if (typeof value === 'string') {
    // 处理十六进制字符串
    if (value.startsWith('0x')) {
      return BigInt(value);
    }
    // 处理普通数字字符串
    return BigInt(Number(value));
  }
  
  if (typeof value === 'number') {
    return BigInt(value);
  }
  
  // 如果是 BigInt 对象，转换为原始 bigint
  if (value instanceof BigInt) {
    return value.valueOf();
  }
  
  // 其他情况尝试转换
  return BigInt(value.toString());
};


const PoolListTable: React.FC = () => {
  // const data: readonly any[] | undefined = [];
  const [openAddPositionModal, setOpenAddPositionModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { account } = useAccount();
   const { data = [], refetch } = useReadPositionManagerGetAllPositions({
   address: getContractAddress("PositionManager"),
 });
const { writeContractAsync } = useWritePositionManagerMint();
  const { writeContractAsync: writeErc20Approve } = useWriteErc20Approve();
  return (
    <>
    <Table
      title={() => (
        <Flex justify="space-between">
          <div>My Positions</div>
          <Space>
            <Button type="primary"
            loading={loading}
             onClick={() => {
                  setOpenAddPositionModal(true);
                }}
            >
              Add</Button>
          </Space>
        </Flex>
      )}
      columns={columns}
      dataSource={data}
    />
    <AddPositionModal
        open={openAddPositionModal}
        onCancel={() => {
          setOpenAddPositionModal(false);
        }}
        onCreatePosition={ async (createParams) => {
          console.log("get createPrams", createParams);
          if (account?.address === undefined) {
            message.error("Please connect wallet first");
            return;
          }
          setOpenAddPositionModal(false);
          setLoading(true);
          try {
            await writeErc20Approve({
              address: createParams.token0 as `0x${string}`, // 修复类型
              args: [
                getContractAddress("PositionManager"),
                toBigInt(createParams.amount0Desired),
              ],
            });
            await writeErc20Approve({
              address: createParams.token1 as `0x${string}`,
              args: [
                getContractAddress("PositionManager"),
                toBigInt(createParams.amount1Desired),
              ],
            });
            await writeContractAsync({
              address: getContractAddress("PositionManager"),
              args: [
                {
                  token0: createParams.token0 as `0x${string}`,
                  token1: createParams.token1 as `0x${string}`,
                  index: createParams.index,
                  amount0Desired: toBigInt(createParams.amount0Desired),
                  amount1Desired: toBigInt(createParams.amount1Desired),
                  recipient: account?.address as `0x${string}`,
                  deadline: toBigInt(createParams.deadline),
                },
              ],
            });
            refetch();
          } catch (error: any) {
            message.error(error.message);
          } finally {
            setLoading(false);
          }
        }}
      />
    </>
  );
};

export default function WtfswapPool() {
  return (
    <WtfLayout>
      <div className={styles.container}>
        <Typography.Title level={2}>Postions</Typography.Title>
        <PoolListTable />
      </div>
    </WtfLayout>
  );
}