import React from "react";
import axios from "axios";

const CheckCheck = () => {
  const walletAddress = "6iPeFvRyjh1Qp5qYriQavPHJ6UGApxR2mfFfGEAGJcns";
  const tokenMintAddress = "So11111111111111111111111111111111111111112";

  const onclickCheckTokenBalance = async () => {
    console.log(walletAddress, tokenMintAddress);
    const response = await axios({
      url: `https://api.mainnet-beta.solana.com`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: [
        {
          jsonrpc: "2.0",
          id: 1,
          method: "getTokenAccountsByOwner",
          params: [
            walletAddress,
            {
              mint: tokenMintAddress,
            },
            {
              encoding: "jsonParsed",
            },
          ],
        },
      ],
    });
    console.log(response);
  };

  return (
    <div onClick={onclickCheckTokenBalance}>
      <button>Check Check</button>
    </div>
  );
};

export default CheckCheck;
