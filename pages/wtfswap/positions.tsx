import React from "react";
import { Flex, Table, Space, Typography, Button } from "antd";
import type { TableProps } from "antd";
import WtfLayout from "../../components/WtfLayout";
import AddPositionModal from "../../components/AddPositionModal";
import styles from "../css/positions.module.css";
// import { AddressWithCopy, BigNumberWithCopy } from "../components/common";

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





const PoolListTable: React.FC = () => {
  // const data: readonly any[] | undefined = [];
  const [openAddPositionModal, setOpenAddPositionModal] = React.useState(false);
  const data = [
  {
    owner: "0x1234567890abcdef1234567890abcdef12345678",
    token0: "0x1234567890abcdef1234567890abcdef12345678",
    token1: "0x1234567890abcdef1234567890abcdef12345678",
    index: 0,
    fee: 3000,
    liquidity: BigInt(1234560000000),
    tickLower: -123456,
    tickUpper: 123456,
    tokensOwed0: BigInt(123456),
    tokensOwed1: BigInt(654321),
    feeGrowthInside0LastX128: BigInt(123456),
    feeGrowthInside1LastX128: BigInt(654321),
  },
];

  return (
    <>
    <Table
      title={() => (
        <Flex justify="space-between">
          <div>My Positions</div>
          <Space>
            <Button type="primary"
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
        onCreatePosition={(createPram) => {
          console.log("get createPram", createPram);
          setOpenAddPositionModal(false);
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