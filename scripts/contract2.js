const {ethers, upgrades} = require("hardhat")

async function main(){
    const Num2 = await ethers.getContractFactory("Num2")
    console.log("NUM 1 is upgrading ...");
    await upgrades.upgradeProxy("0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8",Num2)
    console.log("Num1 upgraded to NUM2");
}

main();
