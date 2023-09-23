# hardhat-network-fork


## Project installation
```npm install```

## Run the local blockchain forking mainnet
```npx hardhat node```

## Deploy contract

```npx hardhat run ./scripts/deploy.ts```

## Run the web project (you need Metamask in the browser)
Add Hardhat network, with the following params:

 - RPC URL: http://127.0.0.1:8545/
 - Chain ID: 56

Install a package to run the index.html (we will use https://www.npmjs.com/package/nws)
``` npm i -g nws```

Go to /metamask-html and run the index.html:

``` cd ./metamask-html ```

``` nws - p 8080 ```

