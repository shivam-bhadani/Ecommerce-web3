const {ethers}=require("ethers")
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const provider= new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/")
  const [deployer,seller,buyer] =await hre.ethers.getSigners()
  const Marketplace=await hre.ethers.getContractFactory("Marketplace")
  const marketplace= await Marketplace.deploy()
  await marketplace.deployed()
  console.log(`Deployed Contract Address ${marketplace.address}`)
  console.log( await marketplace.totalCount())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
