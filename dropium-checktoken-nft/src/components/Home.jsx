import React from "react";
import styled from "styled-components";
import CheckBalancePhantom from "./check_balance/CheckBalancePhantom";
// import GetPortfolio from "./check/GetPortfolio";
import ConnectPhantom from "./connect_wallet/ConnectPhantom";

export default function Home() {
  return (
    <Container>
      <ConnectPhantom />
      
      <CheckBalancePhantom />
      {/* <GetPortfolio/> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
