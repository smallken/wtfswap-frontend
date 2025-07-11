import React from "react";
import { Flex, Table, Space, Typography, Button, message } from "antd";
import type { TableProps } from "antd";
import WtfLayout from "@/components/WtfLayout";
import AddPositionModal from "@/components/AddPositionModal";
import styles from "./positions.module.css";

import {
  useWritePositionManagerMint,
  useWriteErc20Approve,
  useReadPositionManagerGetAllPositions,
  useWritePositionManagerBurn,
  useWritePositionManagerCollect,
  useWriteWeth9Deposit
} from "@/utils/contracts";
import { getContractAddress } from "@/utils/common";
import { useAccount } from "@ant-design/web3";

const PoolListTable: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [openAddPositionModal, setOpenAddPositionModal] = React.useState(false);
  const { account } = useAccount();
  const { data = [], refetch } = useReadPositionManagerGetAllPositions({
    address: getContractAddress("PositionManager"),
  });

  const { writeContractAsync } = useWritePositionManagerMint();
  const { writeContractAsync: writeErc20Approve } = useWriteErc20Approve();
  const { writeContractAsync: writePositionManagerBurn } =
    useWritePositionManagerBurn();
  const { writeContractAsync: writePositionManagerCollect } =
    useWritePositionManagerCollect();
// 添加 WETH deposit 方法
  const { writeContractAsync: writeWeth9Deposit } = useWriteWeth9Deposit();
  
  // 获取 WETH 合约地址
  const wethAddress = getContractAddress("WETH9");
 // 判断是否是 WETH
  const isWethToken = (tokenAddress: string) => {
    return tokenAddress.toLowerCase() === wethAddress.toLowerCase();
  };
  const columns: TableProps["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      fixed: "left",
      render: (value: bigint) => {
        return value.toString();
      },
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      fixed: "left",
      ellipsis: true,
    },
    {
      title: "Token 0",
      dataIndex: "token0",
      key: "token0",
      ellipsis: true,
    },
    {
      title: "Token 1",
      dataIndex: "token1",
      key: "token1",
      ellipsis: true,
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
      fixed: "right",
      render: (_, item) => {
        if (item.owner !== account?.address) {
          return "-";
        }
        return (
          <Space className={styles.actions}>
            {item.liquidity > 0 && (
              <a
                onClick={async () => {
                  try {
                    await writePositionManagerBurn({
                      address: getContractAddress("PositionManager"),
                      args: [item.id],
                    });
                    refetch();
                  } catch (error: any) {
                    message.error(error.message);
                  }
                }}
              >
                Remove
              </a>
            )}
            {(item.tokensOwed0 > 0 || item.tokensOwed1 > 0) && (
              <a
                onClick={async () => {
                  try {
                    await writePositionManagerCollect({
                      address: getContractAddress("PositionManager"),
                      args: [item.id, account?.address as `0x${string}`],
                    });
                    refetch();
                  } catch (error: any) {
                    message.error(error.message);
                  }
                }}
              >
                Collect
              </a>
            )}
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        scroll={{ x: "max-content" }}
        title={() => (
          <Flex justify="space-between">
            <div>Positions</div>
            <Space>
              <Button
                type="primary"
                loading={loading}
                onClick={() => {
                  setOpenAddPositionModal(true);
                }}
              >
                Add
              </Button>
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
        onCreatePosition={async (createParams) => {
          console.log("get createParams", createParams);
          if (account?.address === undefined) {
            message.error("Please connect wallet first");
            return;
          }
          setOpenAddPositionModal(false);
          setLoading(true);
          try {
             // 1. 处理 WETH 包装
            const wrapPromises = [];
            // 检查 token0 是否需要包装
            if (isWethToken(createParams.token0)) {
              wrapPromises.push(
                writeWeth9Deposit({
                  address: wethAddress,
                  value: createParams.amount0Desired // 传递 ETH 值
                })
              );
            }
            // 检查 token1 是否需要包装
            if (isWethToken(createParams.token1)) {
              wrapPromises.push(
                writeWeth9Deposit({
                  address: wethAddress,
                  value: createParams.amount1Desired // 传递 ETH 值
                })
              );
            }
            // 并行执行所有包装操作
            if (wrapPromises.length > 0) {
              await Promise.all(wrapPromises);
              message.success("ETH wrapped to WETH successfully");
            }
            // 2. 授权代币
            // const approvePromises = [];
            
            // 只授权非 WETH 代币（WETH 已通过 deposit 处理）
            if (!isWethToken(createParams.token0)) {
              // approvePromises.push(
               await writeErc20Approve({
                  address: createParams.token0,
                  args: [
                    getContractAddress("PositionManager"),
                    createParams.amount0Desired,
                  ],
                })
              // );
            }
            
            if (!isWethToken(createParams.token1)) {
              // approvePromises.push(
               await writeErc20Approve({
                  address: createParams.token1,
                  args: [
                    getContractAddress("PositionManager"),
                    createParams.amount1Desired,
                  ],
                })
              // );
            }
            
            // 并行执行所有授权操作
            // if (approvePromises.length > 0) {
            //   await Promise.all(approvePromises);
            //   message.success("Token approvals completed");
            // }
            await writeContractAsync({
              address: getContractAddress("PositionManager"),
              args: [
                {
                  token0: createParams.token0,
                  token1: createParams.token1,
                  index: createParams.index,
                  amount0Desired: createParams.amount0Desired,
                  amount1Desired: createParams.amount1Desired,
                  recipient: account?.address as `0x${string}`,
                  deadline: createParams.deadline,
                },
              ],
            });
            message.success("Add Position Success");
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
