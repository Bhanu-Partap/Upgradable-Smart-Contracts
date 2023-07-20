const {ethers, upgrades} = require("hardhat")

async function main(){
  const numContract = await ethers.getContractFactory("Num")
  console.log("Deploying the Contract Version 1");
  const num = await upgrades.deployProxy(numContract,[10],{
    initializer :"valuesetter"
  })
  await num.deployed()
  console.log("Num 1 deployed address", num.address);
}

main();