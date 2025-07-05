// @ts-ignore
globalThis.import_meta = globalThis.import_meta || {};
// @ts-ignore
globalThis.import_meta.webpackHot = globalThis.import_meta.webpackHot || {
  accept: () => {}
};

import { Modal, Form, Input, InputNumber, Select, Typography } from "antd";
import { parsePriceToSqrtPriceX96 } from "@/utils/common";
import { useState } from "react";

const { Text } = Typography;

interface CreatePoolParams {
  token0: `0x${string}`;
  token1: `0x${string}`;
  fee: number;
  tickLower: number;
  tickUpper: number;
  sqrtPriceX96: bigint; // 保持为 bigint 类型
}

interface AddPoolModalProps {
  open: boolean;
  onCancel: () => void;
  onCreatePool: (params: CreatePoolParams) => void;
}

export default function AddPoolModal(props: AddPoolModalProps) {
  const { open, onCancel, onCreatePool } = props;
  const [form] = Form.useForm();
  const [priceInput, setPriceInput] = useState<string>(""); // 使用字符串存储输入值

  // 格式化大数字显示
  const formatLargeNumber = (value: string): string => {
    if (!value) return "0";
    
    // 对于非常大的数字，使用科学计数法显示
    if (value.length > 15) {
      const exponent = value.length - 1;
      const base = value.slice(0, 1);
      const fractional = value.slice(1, 5);
      return `${base}.${fractional}e${exponent}`;
    }
    
    // 添加千位分隔符
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 处理价格输入变化
  const handlePriceChange = (value: string) => {
    // 移除非数字字符
    const numericValue = value.replace(/[^\d]/g, '');
    setPriceInput(numericValue);
    form.setFieldsValue({ price: numericValue });
  };
  

  return (
    <Modal
      title="Add Pool"
      open={open}
      onCancel={onCancel}
      okText="Create"
      onOk={() => {
        form.validateFields().then((values) => {
          // 将输入的价格字符串转换为浮点数
          const priceValue = parseFloat(priceInput || "0");
          
          onCreatePool({
            ...values,
            sqrtPriceX96: parsePriceToSqrtPriceX96(priceValue),
          });
        });
      }}
    >
      <Form layout="vertical" form={form}>
        <Form.Item required label="Token 0" name="token0">
          <Input />
        </Form.Item>
        <Form.Item required label="Token 1" name="token1">
          <Input />
        </Form.Item>
        <Form.Item required label="Fee" name="fee">
          <Select>
            <Select.Option value={3000}>0.3%</Select.Option>
            <Select.Option value={500}>0.05%</Select.Option>
            <Select.Option value={10000}>1%</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item required label="Tick Lower" name="tickLower">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item required label="Tick Upper" name="tickUpper">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item 
          required 
          label="Init Price (token1/token0)" 
          name="price"
          rules={[
            { 
              required: true, 
              message: "Please input price!" 
            },
            {
              validator: (_, value) => {
                if (!value) return Promise.resolve();
                if (/^\d+$/.test(value)) return Promise.resolve();
                return Promise.reject("Please enter a valid number");
              },
            },
          ]}
        >
          <Input
            value={priceInput}
            onChange={(e) => handlePriceChange(e.target.value)}
            placeholder="Enter price as a number (e.g., 1000000000000000000)"
            suffix={
              <Text type="secondary">
                {priceInput ? `≈${formatLargeNumber(priceInput)}` : ""}
              </Text>
            }
          />
        </Form.Item>
        <Form.Item help="Enter the price as a large number (e.g., 1 token = 1000000000000000000)">
          {/* 帮助文本 */}
        </Form.Item>
      </Form>
    </Modal>
  );
}