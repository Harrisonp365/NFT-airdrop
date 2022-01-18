const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [
    {
      path: "/",
      content: JSON.stringify({
        name: "Harrison",
        attributes: [
          {
            trait_type: "Bearded male",
            value: "Extremely High",
          },
        ],
        image:
          "https://gateway.pinata.cloud/ipfs/QmSBdtoFX8WbhUnqnzS3j7UYL9EqA9Qz27xvU96AoxnM1T",
        description: "It's a drawing of my head!",
      }),
    },
  ];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
