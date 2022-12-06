import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "antd";

export default function ConnectPhantom() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [connButtonConnect, setConnButtonConnect] = useState(
    "Connect to Phantom Wallet"
  );
  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log("Phantom wallet found!");
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log(window.solana);
      console.log("Connected with Public Key:", response.publicKey.toString());
      console.log(response);
      setWalletAddress(response.public.toString());
    } else {
      alert("Solana object not found! Get a Phantom Wallet 👻");
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
      console.log(response);
      setConnButtonConnect("Phantom Wallet Connected");
    }
  };


  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Container>
      <div>
        <Button type="primary" onClick={connectWallet}>
          {connButtonConnect}
        </Button>
      </div>
      <div>
        <span className="header-wallet">{walletAddress}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
