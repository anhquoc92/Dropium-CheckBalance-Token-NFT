
//   return (
//     <Container>
//       <div>
//         <Select style={{ width: 120 }}>
//           <Option value="ERC721">ERC721</Option>
//           <Option value="ERC1155">ERC1155</Option>
//         </Select>
//         <Button onClick={onclickCheckBalanceToken}>Check Balance Token</Button>
//         <span>ASSSS</span>
//       </div>
//     </Container>
//   );


import { Connection, PublicKey } from "@solana/web3.js";

// connection
const connection = new Connection("https://api.devnet.solana.com");

const tokenAccount1Pubkey = new PublicKey("37sAdhEFiYxKnQAm7CPd5GLK1ZxWovqn3p87kKjfD44c");

const tokenAccount2Pubkey = new PublicKey("CFEPU5Jd6DNj8gpjPLJ1d9i4xSJDGYNV7n6qw53zE3n1");

(async () => {
  let tokenAccountBalance = await connection.getTokenAccountBalance(tokenAccount1Pubkey);
  console.log(`decimals: ${tokenAccountBalance.value.decimals}, amount: ${tokenAccountBalance.value.amount}`);
})();