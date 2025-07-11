import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Connector, ConnectButton } from "@ant-design/web3";
import styles from "./styles.module.css";
import headerStyles from '@/styles/Header.module.css';

export default function WtfHeader() {
  const pathname = usePathname();
  const isSwapPage = pathname === "/swap";
  const isPoolPage = pathname === "/swap/pool";
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.title}>GoodSwap</div>
      <div className={headerStyles.nav}>
        <Link
          href="/swap"
          className={isSwapPage ? headerStyles.active : undefined}
        >
          Swap
        </Link>
        <Link
          href="/swap/pool"
          className={isPoolPage ? headerStyles.active : undefined}
        >
          Pool
        </Link>
      </div>
      <div>
        {loading ? null : (
          <Connector
            modalProps={{
              mode: "simple",
            }}
          >
            <ConnectButton type="text" 
            className={headerStyles.connectButton}
            />
          </Connector>
        )}
      </div>
    </div>
  );
}
