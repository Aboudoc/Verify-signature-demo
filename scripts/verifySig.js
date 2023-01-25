const hre = require("hardhat");

async function main() {
  const VerifySig = await hre.ethers.getContractFactory("VerifySig");
  const verifySig = await VerifySig.deploy();
  await verifySig.deployed();
  console.log(`VerifySig contract deployed to ${verifySig.address}`);

  const message = "Let's proove that I've signed this message";

  const messageHash = await verifySig.getMessageHash(message);
  console.log(`message hash: ${messageHash}`);

  // trying to do it using scripts instead of  the console
  // const signOffChain = await ethereum.request({
  //   method: "personal_sign",
  //   params: [signer, messageHash],
  // });

  const signedOffChain =
    "0x2b8990bb9964c5a11f7c5432cf9a33ced96bd5c89616b15ce1e31e6c0077f2b710f86b72dae6ca7a7467c1e86bc46c3e0da37593580605ce0fdd7ae81439ff8d1c";

  const ethSignedMessageHash = await verifySig.getEthSignedMessageHash(
    messageHash
  );

  const signerOfMessage = await verifySig.recover(
    ethSignedMessageHash,
    signedOffChain
  );
  console.log(`signer of message: ${signerOfMessage}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
