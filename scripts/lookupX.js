const hre = require("hardhat");
const ethers = require("ethers");
require("dotenv").config();

const CONTRACT_ADDR = "0xd33E6c684482fbF442Fa54f5a8EBd6C26f71a94b";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  console.log(await contract.x());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
