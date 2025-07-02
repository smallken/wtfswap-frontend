// src/components/common/AddressWithCopy.tsx
import React, { useState } from "react";
import { Tooltip, Button, Tag, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface AddressWithCopyProps {
  address: string;
  maxLength?: number;
  showCopy?: boolean;
  tagColor?: string;
  className?: string;
}

const AddressWithCopy: React.FC<AddressWithCopyProps> = ({
  address,
  maxLength = 10,
  showCopy = true,
  tagColor = "processing",
  className = ""
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      message.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const formatAddress = () => {
    if (!address) return "";
    if (address.length <= maxLength) return address;
    
    const start = Math.floor(maxLength / 2);
    const end = address.length - (maxLength - start);
    
    return `${address.slice(0, start)}...${address.slice(end)}`;
  };
  
  const shortenedAddress = formatAddress();
  
  return (
    <div className={`address-with-copy ${className}`}>
      <Tooltip title={address}>
        <Tag color={tagColor} className="address-tag">
          {shortenedAddress}
        </Tag>
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

export default AddressWithCopy;