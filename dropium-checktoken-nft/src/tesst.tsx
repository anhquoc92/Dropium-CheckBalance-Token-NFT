import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const rpcEndpoint = 'https://example.solana-mainnet.quiknode.pro/000000/';
const solanaConnection = new Connection(rpcEndpoint);

const walletToQuery = 'Y5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'; //example: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg

async function getTokenAccounts(wallet: string, solanaConnection: Connection) {
    const filters:GetProgramAccountsFilter[] = [
        {
          dataSize: 165,    //size of account (bytes)
        },
        {
          memcmp: {
            offset: 32,     //location of our query in the account (bytes)
            bytes: wallet,  //our search criteria, a base58 encoded string
          },            
        }];
    const accounts = await solanaConnection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        {filters: filters}
    );
    console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);
    accounts.forEach((account, i) => {
        //Parse the account data
        const parsedAccountInfo:any = account.account.data;
        const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
        const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
        //Log results
        console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
        console.log(`--Token Mint: ${mintAddress}`);
        console.log(`--Token Balance: ${tokenBalance}`);
    });
}
getTokenAccounts(walletToQuery,solanaConnection);

//41kR1YuoVvTZzQuhczkg7NV9uWZMVU4KP1q9eW8DcUs5wtd3UE6NnnTGUH8nv8j6Us6gcuMP1heNFsDgrgbhU1U7