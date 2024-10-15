// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
import "hardhat/console.sol";

interface Contract {
  function attempt() external;
}

contract ContractCaller {

    function attemptCall(address _winner) external {
        Contract(_winner).attempt();
    }
}