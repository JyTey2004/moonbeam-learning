# moonbeam-learning
Learn how to create Moonbeam smart contracts in this repo!

## Running the Moonbeam Node Dev Node locally
1. Clone the Moonbeam repo
```bash
    git clone -b v0.40.0 https://github.com/moonbeam-foundation/moonbeam
```
2. Update your PATH environment variable
```bash
    source $HOME/.cargo/env
```
3. build the Moonbeam node
```bash
    cargo build --release
```
4. Run the Moonbeam node
```bash
    ./target/release/moonbeam --dev
```

## Writing a simple smart contract in Moonbeam
We will be using Hardhat to write and deploy smart contracts to Moonbeam.
This is a simple smart contract called box.sol that stores an integer value in the blockchain.
Follow this [moonbeam guide](https://docs.moonbeam.network/builders/ethereum/dev-env/hardhat/#__tabbed_1_4)