async function main() {
  const BeardedBoizTestnet = await hre.ethers.getContractFactory(
    "BeardedBoizTestnet"
  );
  const nft = await BeardedBoizTestnet.deploy();

  await nft.deployed();

  console.log("BeardedBoizTestnet deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
