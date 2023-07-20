// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Num2 {
    uint private num;

    function  setvalue(uint _num)  public {
        num = _num;
    }

    function valuegetter() public returns(uint){
        return num;
    }

    
  function increment() public{
        
    }

    }


