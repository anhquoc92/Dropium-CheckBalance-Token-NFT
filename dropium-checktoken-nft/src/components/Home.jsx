import React from "react";
import styled from "styled-components";
import CheckBalancePhantom from "./check_balance/CheckBalancePhantom";
import ConnectPhantom from "./connect_wallet/ConnectPhantom";

export default function Home() {
  return (
    <Container>
      <ConnectPhantom />
      <CheckBalancePhantom />
    </Container>
  );
}

const Container = styled.div``;
