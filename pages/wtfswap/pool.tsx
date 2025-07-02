import React, { useState } from "react";
import { Flex, Table, Space, Typography, Button, Tooltip, message, Tag, Popover } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import WtfLayout from "../../components/WtfLayout";
import Link from "next/link";
import styles from "../css/pool.module.css";
import type { TableProps } from "antd";
import AddPoolModal from "../../components/AddPoolModal";
import { AddressWithCopy, BigNumberWithCopy } from "../../components/common";

// 优化组件：地址显示+复制按钮
// const AddressWithCopy = ({ address }: { address: string }) => {
//   const [copied, setCopied] = useState(false);
  
//   const handleCopy = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     navigator.clipboard.writeText(address).then(() => {
//       setCopied(true);
//       message.success("Copied to clipboard!");
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };
  
//   const shortenedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  
//   return (
//     <Flex align="center" gap={8}>
//       <Tooltip title={address}>
//         <div className={styles.addressBox}>
//           <Tag color="processing" className={styles.addressTag}>
//             {shortenedAddress}
//           </Tag>
//         </div>
//       </Tooltip>
//       <Button
//         icon={<CopyOutlined />}
//         size="small"
//         type="text"
//         className={styles.copyButton}
//         onClick={handleCopy}
//       />
//     </Flex>
//   );
// };

// 优化组件：大数字格式化+复制按钮
// const BigNumberWithCopy = ({ value }: { value: bigint }) => {
//   const [copied, setCopied] = useState(false);
  
//   const handleCopy = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     navigator.clipboard.writeText(value.toString()).then(() => {
//       setCopied(true);
//       message.success("Copied to clipboard!");
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };
  
//   // 科学记数法格式化
//   // const formattedValue = (() => {
//   //   const str = value.toString();
//   //   if (str.length <= 10) return str;
    
//   //   return (
//   //     <span className={styles.numberNotation}>
//   //       {str.slice(0, 3)}
//   //       <span className={styles.numberSeparator}>.</span>
//   //       {str.slice(3, 7)}
//   //       <span className={styles.numberSeparator}>e</span>
//   //       <span className={styles.numberExponent}>{str.length - 7}</span>
//   //     </span>
//   //   );
//   // })();
  
//   return (
//     <Flex align="center" gap={8}>
//       <Tooltip title={value.toString()}>
//         <div className={styles.numberBox}>{formattedValue}</div>
//       </Tooltip>
//       <Button
//         icon={<CopyOutlined />}
//         size="small"
//         type="text"
//         className={styles.copyButton}
//         onClick={handleCopy}
//       />
//     </Flex>
//   );
// };

const columns: TableProps["columns"] = [
  {
    title: "Token 0",
    dataIndex: "token0",
    key: "token0",
    render: (value: string) => <AddressWithCopy address={value} />,
  },
  {
    title: "Token 1",
    dataIndex: "token1",
    key: "token1",
    render: (value: string) => <AddressWithCopy address={value} />,
  },
  {
    title: "Index",
    dataIndex: "index",
    key: "index",
    width: 80,
  },
  {
    title: "Fee",
    dataIndex: "fee",
    key: "fee",
    width: 80,
    render: (value: number) => `${value / 100}%`,
  },
  {
    title: "Fee Protocol",
    dataIndex: "feeProtocol",
    key: "feeProtocol",
    width: 120,
  },
  {
    title: "Tick Lower",
    dataIndex: "tickLower",
    key: "tickLower",
    width: 100,
  },
  {
    title: "Tick Upper",
    dataIndex: "tickUpper",
    key: "tickUpper",
    width: 100,
  },
  {
    title: "Tick",
    dataIndex: "tick",
    key: "tick",
    width: 80,
  },
  {
    title: "Price",
    dataIndex: "sqrtPriceX96",
    key: "sqrtPriceX96",
    width: 180,
    render: (value: bigint) => <BigNumberWithCopy value={value} />,
  },
];

const PoolListTable: React.FC = () => {
  const [openAddPoolModal, setOpenAddPoolModal] = React.useState(false);
  const data = [
    {
      token0: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      token1: "0xEcd0D12E21805803f70de03B72B1C162dB0898d9",
      index: 0,
      fee: 3000,
      feeProtocol: 0,
      tickLower: -100000,
      tickUpper: 100000,
      tick: 1000,
      sqrtPriceX96: BigInt("7922737261735934252089901697281"),
    },
    {
      token0: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      token1: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      index: 1,
      fee: 500,
      feeProtocol: 1,
      tickLower: -50000,
      tickUpper: 50000,
      tick: 500,
      sqrtPriceX96: BigInt("18446744073709551615"),
    },
    {
      token0: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      token1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      index: 2,
      fee: 10000,
      feeProtocol: 2,
      tickLower: -200000,
      tickUpper: 200000,
      tick: 1500,
      sqrtPriceX96: BigInt("79228162514264337593543950336"),
    },
  ];
  
  return (
    <><Table
      title={() => (
        <Flex justify="space-between">
          <Typography.Title level={5} className={styles.tableTitle}>
            Pool List
          </Typography.Title>
          <Space>
            <Link href="/wtfswap/positions">
              <Button>My Positions</Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setOpenAddPoolModal(true);
              } }
            >Add Pool</Button>
          </Space>
        </Flex>
      )}
      columns={columns}
      dataSource={data}
      pagination={false}
      size="middle"
      className={styles.table} />
      
      <AddPoolModal
        open={openAddPoolModal}
        onCancel={() => {
          setOpenAddPoolModal(false);
        } }
        onCreatePool={(createPram) => {
          console.log("get createPram", createPram);
          setOpenAddPoolModal(false);
        } } /></>

  );
};

export default function WtfswapPool() {
  return (
    <WtfLayout>
      <div className={styles.container}>
        <Typography.Title level={2} className={styles.pageTitle}>
          Pool
        </Typography.Title>
        <PoolListTable />
      </div>
    </WtfLayout>
  );
}