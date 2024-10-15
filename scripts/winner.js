const hre = require("hardhat");
const ethers = require("ethers");
require("dotenv").config();

const CONTRACT_ADDR = "0xB04Db1922bF618058AbF190a753cf720Bf93A489";
// const WINNER_ADDR = "0x8aaC01067E00Da295F966231599921e68b7E17c0"; - this addr works
const WINNER_ADDR = "0xBB19a1A9A53e3cfA5417BED50520D848852363c0";

async function main() {
  try {
    const contract = await hre.ethers.getContractAt(
      "ContractCaller",
      CONTRACT_ADDR
    );

    // console.log(contract);

    const res = await contract.attemptCall(WINNER_ADDR);
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
