require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const SEPOLIA_RPC_URL =  process.env.SEPOLIA_RPC_URL 
const PRIVATE_KEY = process.env.PRIVATE_KEY 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  
  networks: {
    sepolia: {
        url: SEPOLIA_RPC_URL,
        accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        saveDeployments: true,
        chainId: 11155111,
    },
  },

};
