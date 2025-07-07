import React, { useState } from "react";
import { Flex, Table, Space, Typography, Button, Tooltip, message, Tag, Popover } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import WtfLayout from "../../components/WtfLayout";
import Link from "next/link";
import styles from "../css/pool.module.css";
import type { TableProps } from "antd";
import AddPoolModal from "../../components/AddPoolModal";
import { AddressWithCopy, BigNumberWithCopy } from "../../components/common";
import { useReadPoolManagerGetAllPools, useWritePoolManagerCreateAndInitializePoolIfNecessary } from "@/utils/contracts";
import { getContractAddress } from "@/utils/common";

// 优化组件：地址显示复制按钮
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

// 优化组件：大数字格式化复制按钮
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
  const [loading, setLoading] = React.useState(false);
  // const { data = [], refetch } = useReadPoolManagerGetAllPools({
  //   address: getContractAddress("PoolManager"),
  // });
  const { data = [], refetch } = useReadPoolManagerGetAllPools({
    address: getContractAddress("PoolManager"),

  });


  // 在 PoolListTable 组件中添加调试信息
  console.log("Contract address:", getContractAddress("PoolManager"));
  const { writeContractAsync } =
    useWritePoolManagerCreateAndInitializePoolIfNecessary();
  return (
    <><Table
      title={() => (
        <Flex justify="space-between">
          <Typography.Title level={5} className={styles.tableTitle}>
            Pool List
          </Typography.Title>
          <Space>
            <Link href="/wtfswap/debug">
              <Button>Get Test Coins</Button>
            </Link>
            <Link href="/wtfswap/positions">
              <Button>My Positions</Button>
            </Link>
            <Button
              type="primary"
              loading={loading}
              onClick={() => {
                setOpenAddPoolModal(true);
              }}
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
        }}
        onCreatePool={async (createParams) => {
          console.log("get createPram", createParams);
          //在提交前排序代币地址
          // const sortedTokens = [createParams.token0, createParams.token1]
          //   .map(addr => addr.toLowerCase())
          //   .sort();

          // const sortedParams = {
          //   ...createParams,
          //   token0: sortedTokens[0] as `0x${string}`,
          //   token1: sortedTokens[1] as `0x${string}`
          // };
          setLoading(true);
          setOpenAddPoolModal(false);
          console.log("in writeContractAsync");
          try {
            const result = await writeContractAsync({
              address: getContractAddress("PoolManager"),
              args: [
                {
                  token0: createParams.token0,
                  token1: createParams.token1,
                  fee: createParams.fee,
                  tickLower: createParams.tickLower,
                  tickUpper: createParams.tickUpper,
                  sqrtPriceX96: createParams.sqrtPriceX96,
                },
              ],
            });
            console.log("Transaction result:", result);
            message.success("Create Pool Success If Necessary");
            refetch();
          } catch (error: any) {
            console.error("Error creating pool:", error);

            // 提取更详细的错误信息
            let errorMessage = error.message;

            if (error.cause) {
              if (error.cause.shortMessage) {
                errorMessage = error.cause.shortMessage;
              } else if (error.cause.message) {
                errorMessage = error.cause.message;
              }
            }

            if (errorMessage.includes("revert")) {
              // 尝试解析 revert 原因
              const revertMatch = errorMessage.match(/reverted with reason string '(.*?)'/);
              if (revertMatch && revertMatch[1]) {
                errorMessage = `Transaction reverted: ${revertMatch[1]}`;
              } else {
                errorMessage = "Transaction reverted without reason";
              }
            }
            message.error(`Failed to create pool: ${errorMessage}`);
          } finally {
            setLoading(false);
          }
        }} /></>

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