// import {ethers , upgrades} from "hardhat"
const {ethers, upgrades} = require("hardhat")

async function main(){
  const numContract = await ethers.getContractFactory("Num")
  // console.log("Deploying the Contract Version 1");
  const first  = await numContract.deploy();
  console.log(first.target);
  const num = await upgrades.deployProxy(numContract, [10], {
    initializer : "setvalue"
  })
  await num.waitForDeployment();
  console.log("Num 1 deployed address", num.getAddress());
  
}

main();