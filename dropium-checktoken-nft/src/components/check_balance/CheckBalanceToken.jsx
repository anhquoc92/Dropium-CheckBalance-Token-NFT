import React, { useState } from "react";
import styled from "styled-components";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { Button, Alert, Space } from "antd";

export default function CheckBalanceToken() {
  const [allTokenBalance, setAllTokenBalance] = useState("__");
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const [walletAddress, setWalletAddress] = useState("");

  // Rate Limits#
  // Maximum number of requests per 10 seconds per IP: 100
  // Maximum number of requests per 10 seconds per IP for a single RPC: 40
  // Maximum concurrent connections per IP: 40
  // Maximum connection rate per 10 seconds per IP: 40
  // Maximum amount of data per 30 second: 100 MB

  const onclickBalanceTokenPhantom = async () => {
    if (window.solana.isConnected === true) {
      setWalletAddress("6iPeFvRyjh1Qp5qYriQavPHJ6UGApxR2mfFfGEAGJcns");
      const tokenPublicKey = new PublicKey("GugU1tP7doLeTw9hQP51xRJyS8Da1fWxuiy2rVrnMD2m");
      console.log(walletAddress);
      console.log(tokenPublicKey);
      const checkBalanceToken = await connection.getTokenAccountBalance(tokenPublicKey,"4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
      setAllTokenBalance(checkBalanceToken);
      console.log(checkBalanceToken);
      console.log(`decimals: ${checkBalanceToken.value.decimals}, amount: ${checkBalanceToken.value.amount}`);
    } else {
      console.log("pls connect wallet A");
    }
  };
  return (
    <Container>
      <Button type="primary" onClick={onclickBalanceTokenPhantom}>
        Check Phantom Balance Token
      </Button>
      <span>
        {" :"} {`${allTokenBalance / LAMPORTS_PER_SOL} SOL`}
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
