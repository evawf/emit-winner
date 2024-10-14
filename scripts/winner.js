const hre = require("hardhat");
const ethers = require("ethers");
require("dotenv").config();

const CONTRACT_ADDR = "0x035A0aB4020dFee637f814b29f97Abe1A27eEc2c";
const WINNER_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  try {
    const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

    const contractCall = await hre.ethers.getContractAt(
      "ContractCall",
      WINNER_ADDR
    );

    const res = await contractCall.attemptCall(WINNER_ADDR);
    console.log(res.hash);
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
