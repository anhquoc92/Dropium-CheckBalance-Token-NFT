import React, { useState } from "react";
import styled from "styled-components";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { Button, Radio } from "antd";

export default function CheckBalancePhantom() {
  const [tokenBalance, setTokenBalance] = useState("__");
  const [walletAddress, setWalletAddress] = useState("");
  const [network1, setNetwork1] = useState("mainnet-beta");
  // Rate Limits#
  // Maximum number of requests per 10 seconds per IP: 100
  // Maximum number of requests per 10 seconds per IP for a single RPC: 40
  // Maximum concurrent connections per IP: 40
  // Maximum connection rate per 10 seconds per IP: 40
  // Maximum amount of data per 30 second: 100 MB

  const networkChanged = async (value) => {
    setNetwork1(value.target.value);
  };
  const connection = new Connection(clusterApiUrl(network1));

  const onclickBalancePhantom = async () => {
    if (window.solana.isConnected === true) {
      setWalletAddress(window.solana.publicKey.toString());
      const tokenPublicKey = new PublicKey(
        `${window.solana.publicKey.toString()}`
      );
      const checkBalance = connection
        .getBalance(tokenPublicKey)
        .then((response) => setTokenBalance(response));
      // const checkAllToken = await connection.getTokenAccountBalance(tokenPublicKey,"confirmed")
      // console.log(checkAllToken)
    } else {
      console.log("pls connect wallet A");
    }
  };

  const onclickQuocCheck = async () => {
    const tokenAccount1Pubkey = new PublicKey(
      "4edoqmgNDKmZDNgg1yYTRGUCx6Htuatm7SHGYQfJgopP"
    );
    let tokenAccountBalance = await connection.getTokenAccountBalance(
      tokenAccount1Pubkey
    );
    console.log(tokenAccountBalance);
    console.log(
      `decimals: ${tokenAccountBalance.value.decimals}, amount: ${tokenAccountBalance.value.amount}`
    );
  };

  return (
    <Container>
      <Button type="primary" onClick={onclickBalancePhantom}>
        Check Phantom Balance
      </Button>
      <br />
      <Radio.Group
        name="radiogroup"
        defaultValue={network1}
        onChange={networkChanged}
      >
        <Radio value="devnet">devnet</Radio>
        <Radio value="testnet">testnet</Radio>
        <Radio value="mainnet-beta">mainnet-beta</Radio>
      </Radio.Group>
      <br />
      <span>
        {" :"} {`${(tokenBalance / LAMPORTS_PER_SOL).toFixed(4)} SOL`}
      </span>
      <div>
        <span>{walletAddress}</span>
      </div>
      <Button type="primary" onClick={onclickQuocCheck}>
        Quoc Check
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
