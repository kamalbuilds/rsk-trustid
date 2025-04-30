# RSK TrustID: AI-driven Identity & Reputation System on Rootstock

A self-sovereign identity and reputation system built on Rootstock blockchain, leveraging RIF Identity infrastructure with AI-powered reputation scoring.

## Project Structure

This project consists of two main components:

1. `/contracts` - Smart contracts for DID management, credential issuance, and reputation scoring
2. `/frontend` - Next.js web application for interacting with the contracts

## Smart Contracts

The system uses several smart contracts that work together:

- **TrustID.sol**: Core contract for identity management, credential storage, and reputation tracking
- **TrustIDFactory.sol**: Factory contract to simplify the creation of new identities with the standard did:rsk:username format
- **AIReputationOracle.sol**: Oracle contract that allows AI systems to update reputation scores based on activity analysis

## Frontend Application

The web interface allows users to:

- Create and manage their decentralized identities
- Issue and verify credentials
- View reputation scores powered by AI analysis
- Connect with others through their human-readable RSK identifiers

## Key Features

- **Self-Sovereign Identity**: Create and control your own digital identity without relying on central authorities
- **AI-Driven Reputation**: Advanced machine learning algorithms assess on-chain activity to generate comprehensive reputation scores
- **Verifiable Credentials**: Issue, receive, and verify credentials in a privacy-preserving manner
- **Human-Readable Addresses**: Integration with RIF Name Service for easy-to-remember addresses

## Technology Stack

- **Blockchain**: Rootstock (RSK) - Bitcoin sidechain with smart contract capabilities
- **Identity Protocol**: RIF Identity
- **Smart Contracts**: Solidity
- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **AI**: TensorFlow.js for reputation scoring

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- MetaMask or another Web3 wallet with Rootstock network configured

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/trustid.git
   cd trustid
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install smart contract dependencies:
   ```
   cd ../contracts
   npm install
   ```

### Development

1. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

2. Deploy contracts to Rootstock testnet:
   ```
   cd contracts
   npx hardhat run scripts/deploy.js --network rskTestnet
   ```

3. Update the contract addresses in `frontend/config/contracts.ts` with the deployed addresses

## Future Enhancements

- Integration with IPFS for decentralized metadata storage
- Zero-knowledge proofs for private credential verification
- Cross-chain identity resolution
- Governance mechanisms for reputation algorithm updates
- Mobile wallet support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Rootstock](https://rootstock.io/) - Bitcoin sidechain with smart contracts
- [RIF Identity](https://developers.rsk.co/rif/identity/) - Identity infrastructure for Rootstock
- [RIF Name Service](https://www.rifos.org/nameservice) - Human-readable addresses for blockchain
