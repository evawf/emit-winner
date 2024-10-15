const hre = require("hardhat");
const ethers = require("ethers");
require("dotenv").config();

async function main() {
  const ContractCaller = await hre.ethers.getContractFactory("ContractCaller");
  const contractCaller = await ContractCaller.deploy();
  await contractCaller.waitForDeployment();
  console.log(contractCaller.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
