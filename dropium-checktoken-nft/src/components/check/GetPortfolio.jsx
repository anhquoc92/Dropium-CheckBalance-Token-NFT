// import React, { useState } from "react";
// import styled from "styled-components";
// import Moralis from "moralis";
// import { SolNetwork } from "@moralisweb3/common-sol-utils";

// export default function GetPortfolio() {
//   const [walletAddress, setWalletAddress] = useState(null);

//   const onclickGetPortfolio = async () => {
//     if (window.solana.isConntected === true) {
//       const resultAddress = window.solana.connect().publicKey.toString();
//       console.log(resultAddress);
//       setWalletAddress(resultAddress);
//       const network = SolNetwork.MAINNET;

//       try {
//         await Moralis.start({
//           apiKey:
//             "ukWCih0B4dNlxr14ISd6wIX8Vi0dnvuhVDigh9mrrRQbSlLiF4QhFu0VQ3V2T0ND",
//         });
//         const response = await Moralis.SolApi.account.getPortfolio({
//           network,
//           walletAddress,
//         });
//         console.log(response?.toJSON());
//       } catch (e) {
//         console.log.error(e);
//       }
//     }
//   };

//   return (
//     <Container>
//       <div>GetPortfolio</div>
//     </Container>
//   );
// }

// const Container = styled.div``;
