const friends = [
  "0x2E2fCf2aD8b64A916Ce99f1C097cC8cc7978a5e7", //tim
  "0x632c75d0f363534b94CdbceEbe938966891f4531", //lee
  "0x6587C7097B0F66033F35820410d839a9d8B5D232", //me
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096", //Yujin
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", //Eugene
];
const existingContractAddr = "0x2ee2eB885598BCdE64d25c5d0600648821E6c445";

async function main() {
  const nft = await hre.ethers.getContractAt(
    "BeardedBoizTestnet",
    existingContractAddr
  );

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for (let i = 0; i < friends.length; i++) {
    const tokenURI =
      "https://gateway.ipfs.io/ipfs/QmRDYsooXULQm6Mr1TbqfktisGKfh8ZA5H94tw3i17GbjC";
    await nft.awardItem(friends[i], tokenURI, {
      nonce: nonce + i,
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
