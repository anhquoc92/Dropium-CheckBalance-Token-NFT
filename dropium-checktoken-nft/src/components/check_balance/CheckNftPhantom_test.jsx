// import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// import axios from "axios";
// import { isValidSolanaAddress } from "@nfteyez/sol-rayz";
// import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz/dist/getParsedNftAccountsByOwner";

// const CheckNftPhantom = (props) => {
//   const [nftData, setNftData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const createConnection = () => {
//     return new Connection(clusterApiUrl("mainnet-beta"));
//   };

//   const getProvider = () => {
//     if (window.solana.isConnected === true) {
//       const provider = window.solana;
//       if (provider.isPhantom) {
//         return provider;
//       }
//     }
//   };

//   const getAllNftData = async () => {
//     try {
//       if (window.solana.isConnected === true) {
//         const connect = createConnection(clusterApiUrl("mainnet-beta"));
//         const provider = getProvider();
//         let ownerToken = "6iPeFvRyjh1Qp5qYriQavPHJ6UGApxR2mfFfGEAGJcns"
//         const result = isValidSolanaAddress(ownerToken);
//         console.log(ownerToken)
//         console.log("result", result);
//         const nfts = await getParsedNftAccountsByOwner({
//           publicAddress: ownerToken,
//           connection: connect,
//           serialization: true,
//         });
//         return nfts;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   const getNftTokenData = async () => {
//   //     try {
//   //       let nftData = await getAllNftData();
//   //       var data = Object.keys(nftData).map((key) => nftData[key]);
//   //       let n = data.length;
//   //       for (let i = 0; i < n; i++) {
//   //         let arr = [];
//   //         console.log(data[i].data.uri);
//   //         let val = await axios.get(data[i].data.uri);
//   //         arr.push(val);
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   useEffect(() => {
//     async function data() {
//       let res = await getAllNftData();
//       setNftData(res);
//       setLoading(true);
//     }
//     data();
//   }, []);

//   return (
//     <Container>
//       <section className="nft mt-2 my-5">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-12">
//               <h4 className="title">NFT</h4>
//             </div>
//           </div>
//           <div className="row d-flex justify-content-center">
//             {loading ? (
//               <>
//                 {nftData &&
//                   nftData.length > 0 &&
//                   nftData.map((val, ind) => {
//                     return (
//                       <div className="col-4 mt-3" key={ind}>
//                         <div className="cart text-center">
//                           <div className="img mt-4 pt-3">
//                             <img src={val.data.image} alt="loading..." />
//                             <p className="mt-1">{val.data.name}</p>
//                             <h6 className="mt-2">{val.data.description}</h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//               </>
//             ) : (
//               <>
//                 <p className="text-center">loading...</p>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </Container>
//   );
// };

// const Container = styled.div``;

// export default CheckNftPhantom;
