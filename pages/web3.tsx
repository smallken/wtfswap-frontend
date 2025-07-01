// pages/web3.tsx
import { Address } from '@ant-design/web3';

export default function Web3() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Web3 地址演示</h1>
      <div style={{ marginTop: '20px' }}>
        <Address 
          format 
          address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" 
          tooltip 
          copyable
        />
      </div>
    </div>
  );
}