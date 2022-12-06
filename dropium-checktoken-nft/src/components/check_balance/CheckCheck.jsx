import React from "react";

const CheckCheck = async () => {
  const walletAddress = "6iPeFvRyjh1Qp5qYriQavPHJ6UGApxR2mfFfGEAGJcns";
  const tokenMintAddress = "So11111111111111111111111111111111111111112";

  // const response = await axios({
  //   url: `https://api.mainnet-beta.solana.com`,
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   data: [
  //     {
  //       jsonrpc: "2.0",
  //       id: 1,
  //       method: "getTokenAccountsByOwner",
  //       params: [
  //         walletAddress,
  //         {
  //           mint: tokenMintAddress,
  //         },
  //         {
  //           encoding: "jsonParsed",
  //         },
  //       ],
  //     },
  //   ],
  // });
  // console.log(response)
  console.log(walletAddress, tokenMintAddress)

  return <div>CheckCheck</div>;
};

export default CheckCheck;
