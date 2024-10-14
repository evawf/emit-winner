// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
import "hardhat/console.sol";

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

contract ContractCall {
    bool public isCalled;

    function attemptCall(address _winner) external {
        Contract winner = Contract(_winner);
        winner.attempt();
        isCalled = true;
    }
}