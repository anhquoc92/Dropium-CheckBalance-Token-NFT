import React, { useState } from "react";
import styled from "styled-components";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { Button } from "antd";

export default function CheckBalancePhantom() {
  const [tokenBalance, setTokenBalance] = useState("__");
  const connection = new Connection(clusterApiUrl("devnet"));

  // Rate Limits#
  // Maximum number of requests per 10 seconds per IP: 100
  // Maximum number of requests per 10 seconds per IP for a single RPC: 40
  // Maximum concurrent connections per IP: 40
  // Maximum connection rate per 10 seconds per IP: 40
  // Maximum amount of data per 30 second: 100 MB

  const tokenPublicKey = new PublicKey(
    "4edoqmgNDKmZDNgg1yYTRGUCx6Htuatm7SHGYQfJgopP"
  );

  const onclickBalancePhantom = async () => {
    const checkBalance = await connection.getBalance(tokenPublicKey);
    setTokenBalance(checkBalance);
    console.log(tokenBalance);
    console.log(`${tokenBalance / LAMPORTS_PER_SOL} SOL`);
    const checkTokenBalance = await connection.getTokenAccountBalance(
      tokenPublicKey
    );
    console.log(checkTokenBalance);
  };
  return (
    <Container>
      <div>Check Balance Phantom</div>
      <Button type="primary" onClick={onclickBalancePhantom}>
        Check Phantom Balance
      </Button>
      <span>
        {" :"} {`${tokenBalance / LAMPORTS_PER_SOL} SOL`}
      </span>
    </Container>
  );
}

const Container = styled.div``;
