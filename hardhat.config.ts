import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
/* import "@openzeppelin/hardhat-upgrades"; */

dotenv.config();

const chainIds = {
  bscMainnet: 56,
  bscTestnet: 97,
  ganache: 1337,
  hardhat: 31337,
};

const {
  PRIVATE_KEY,
  BSCSCAN_API_KEY,
  REPORT_GAS
} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
/*
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
*/

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

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
      //chainId: chainIds.bscTestnet,
      chainId: chainIds.bscMainnet,
      forking: {
        url: "https://sleek-wider-reel.discover.quiknode.pro/1820eb76605f6462efcd829711188427e88db0e8/"//"https://binance.llamarpc.com", //"https://bsc-dataseed.binance.org/",
        //url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545", //"https://bsc-testnet.publicnode.com"
        //blockNumber: 31823526
      },
    }

    /*
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: chainIds.bscTestnet,
      allowUnlimitedContractSize: true,
      //gasPrice: 30000000000,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    },

    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: chainIds.bscMainnet,
      gasPrice: 20000000000,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    },

    ganache: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: chainIds.ganache,
      gasPrice: 20000000000,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    }
    */
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
