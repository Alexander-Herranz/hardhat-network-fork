import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";


dotenv.config();

const chainIds = {
  bscMainnet: 56,
  bscTestnet: 97,
  ganache: 1337,
  hardhat: 31337,
};

const {
  BSCSCAN_API_KEY,
  NODE_RPC_URL
} = process.env;


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: chainIds.bscMainnet,
      forking: {
        url: NODE_RPC_URL
      },
    }

  },
  gasReporter: {
    enabled: false,
    currency: "USD",
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },
  mocha: {
    timeout: 0
  }
};

export default config;
