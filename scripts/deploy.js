const hre = require("hardhat");
const ethers = require("ethers");
require("dotenv").config();

async function main() {
  const Contract = await hre.ethers.getContractFactory(
    "contracts/Contract.sol:Contract"
  );

  const contract = await Contract.deploy();

  console.log(`Contract was deployed to: `, contract.target);

  await contract.waitForDeployment();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
