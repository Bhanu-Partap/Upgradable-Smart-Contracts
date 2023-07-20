const {ethers, upgrades} = require("hardhat")

async function main(){
    const Num2 = await ethers.getContractFactory("Num2")
    console.log("NUM 1 is upgrading ...");
    await upgrades.upgradeProxy("0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",Num2)
    console.log("Num1 upgraded to NUM2");
}