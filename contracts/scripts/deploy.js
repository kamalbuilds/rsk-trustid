// We import the hardhat environment
const hre = require("hardhat");

async function main() {
  console.log("Deploying TrustID system to", network.name);
  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  
  // Deploy the TrustID contract first
  const TrustID = await ethers.getContractFactory("TrustID");
  const trustId = await TrustID.deploy();
  await trustId.waitForDeployment();
  
  console.log("TrustID deployed to:", await trustId.getAddress());
  
  // Deploy the TrustIDFactory contract
  const TrustIDFactory = await ethers.getContractFactory("TrustIDFactory");
  const trustIdFactory = await TrustIDFactory.deploy(await trustId.getAddress());
  await trustIdFactory.waitForDeployment();
  
  console.log("TrustIDFactory deployed to:", await trustIdFactory.getAddress());
  
  // Deploy the AIReputationOracle contract
  const AIReputationOracle = await ethers.getContractFactory("AIReputationOracle");
  const aiReputationOracle = await AIReputationOracle.deploy(await trustId.getAddress());
  await aiReputationOracle.waitForDeployment();
  
  console.log("AIReputationOracle deployed to:", await aiReputationOracle.getAddress());
  
  // Grant the oracle contract permission to update reputation scores
  const ORACLE_ROLE = await aiReputationOracle.ORACLE_ROLE();
  await trustId.grantRole(ORACLE_ROLE, await aiReputationOracle.getAddress());
  console.log("Granted oracle role to AIReputationOracle");
  
  // Export contract addresses for frontend use
  console.log("\nContract addresses for frontend:");
  console.log({
    trustId: await trustId.getAddress(),
    trustIdFactory: await trustIdFactory.getAddress(),
    aiReputationOracle: await aiReputationOracle.getAddress(),
  });
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 