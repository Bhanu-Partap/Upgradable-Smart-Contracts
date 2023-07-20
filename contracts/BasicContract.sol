// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint private num;

    function  valuesetter(uint _num)  public {
        num = _num;
    }

    function valuegetter() public returns(uint){
        return _num;
    }

    }

