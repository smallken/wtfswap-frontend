// src/components/common/BigNumberWithCopy.tsx
import React, { useState } from "react";
import { Tooltip, Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface BigNumberWithCopyProps {
  value: bigint | string;
  maxLength?: number;
  showCopy?: boolean;
  className?: string;
  scientificNotation?: boolean;
}

const BigNumberWithCopy: React.FC<BigNumberWithCopyProps> = ({
  value,
  maxLength = 10,
  showCopy = true,
  className = "",
  scientificNotation = true
}) => {
  const [copied, setCopied] = useState(false);
  
  // 确保值为字符串
  const valueStr = typeof value === 'bigint' ? value.toString() : value;
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(valueStr).then(() => {
      setCopied(true);
      message.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  // 格式化大数字
  const formatBigNumber = () => {
    if (!valueStr) return "0";
    if (valueStr.length <= maxLength) return valueStr;
    
    if (scientificNotation) {
      const exponent = valueStr.length - 6;
      const mantissa = valueStr.slice(0, 6);
      
      return (
        <span className="big-number-notation">
          {mantissa.slice(0, 3)}
          <span className="number-separator">.</span>
          {mantissa.slice(3, 6)}
          <span className="number-separator">e</span>
          <span className="number-exponent">{exponent}</span>
        </span>
      );
    }
    
    // 简单截断显示
    return `${valueStr.slice(0, maxLength - 3)}...`;
  };
  
  const formattedValue = formatBigNumber();
  
  return (
    <div className={`big-number-with-copy ${className}`}>
      <Tooltip title={valueStr}>
        <div className="big-number-display">
          {formattedValue}
        </div>
      </Tooltip>
      
      {showCopy && (
        <Button
          icon={<CopyOutlined />}
          size="small"
          type="text"
          className="copy-button"
          onClick={handleCopy}
        />
      )}
    </div>
  );
};

export default BigNumberWithCopy;