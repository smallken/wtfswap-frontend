import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WTF Academy DApp 极简入门教程</title>
        <meta
          name="description"
          content="WTF Academy DApp 极简入门教程，帮助开发者入门去中心应用开发。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* 修改1: 添加居中容器和样式 */}
        <div className={styles.description} style={{ textAlign: "center" }}>
          <p style={{ margin: "8px 0" }}>Only DRG and MTK exchange is supported.</p>
          <p style={{ margin: "8px 0" }}>You can claim test coins for testing.</p>
          <p style={{ margin: "8px 0" }}>You can also add pools by yourself and increase liquidity.</p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/swap.png"
            alt="swap"
            width={689}
            height={412}
            priority
          />
        </div>

        {/* 修改2: 添加卡片居中容器 */}
        <div 
          className={styles.grid} 
          style={{ 
            display: "flex", 
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          <a
            href="https://github.com/smallken/wtfswap-frontend"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              Github <span>-&gt;</span>
            </h2>
            <p>Github</p>
          </a>

          <Link
            href="/swap"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <a style={{ textAlign: "center" }}>
              <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                Go to swap! <span>-&gt;</span>
              </h2>
              <p>Have fun!</p>
            </a>
          </Link>

          <a
            href="https://web3.ant.design/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              Ant Design Web3 <span>-&gt;</span>
            </h2>
            <p>Know about Ant Design Web3</p>
          </a>
        </div>
      </main>
    </>
  );
}