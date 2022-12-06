import React, { useState } from "react";
import styled from "styled-components";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { Button, Alert, Space } from "antd";

export default function CheckBalancePhantom() {
  const [tokenBalance, setTokenBalance] = useState("__");
  const connection = new Connection(clusterApiUrl("devnet"));
  const [walletAddress, setWalletAddress] = useState("");

  // Rate Limits#
  // Maximum number of requests per 10 seconds per IP: 100
  // Maximum number of requests per 10 seconds per IP for a single RPC: 40
  // Maximum concurrent connections per IP: 40
  // Maximum connection rate per 10 seconds per IP: 40
  // Maximum amount of data per 30 second: 100 MB

  const onclickBalancePhantom = async () => {
    if (window.solana.isConnected === true) {
      setWalletAddress(window.solana.publicKey.toString());
      const tokenPublicKey = new PublicKey(`${walletAddress}`);
      console.log(walletAddress);
      console.log(tokenPublicKey);
      const checkBalance = await connection.getBalance(tokenPublicKey);
      setTokenBalance(checkBalance);
      console.log(tokenBalance);
      console.log(`${tokenBalance / LAMPORTS_PER_SOL} SOL`);
    } else {
      console.log("pls connect wallet A");
    }
  };
  return (
    <Container>
      <Button type="primary" onClick={onclickBalancePhantom}>
        Check Phantom Balance
      </Button>
      <span>
        {" :"} {`${tokenBalance / LAMPORTS_PER_SOL} SOL`}
      </span>
      <div>
        <span>{walletAddress}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
