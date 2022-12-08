
import Moralis from 'moralis';
import { SolNetwork, SolAddress } from "@moralisweb3/sol-utils";

try {
  await Moralis.start({
    apiKey: 'YOUR_API_KEY',
  });

  const address = SolAddress.create(
    "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2"
  );

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getPortfolio({
    network,
    address,
  });

  console.log(response?.toJSON());
} catch (e) {
  console.error(e);
}
