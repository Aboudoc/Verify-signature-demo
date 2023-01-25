const hre = require("hardhat");

async function main() {
  const VerifySig = await hre.ethers.getContractFactory("VerifySig");
  const verifySig = await VerifySig.deploy();

  await verifySig.deployed();

  console.log(`VerifySig contract deployed to ${verifySig.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
