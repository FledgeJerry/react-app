import React from "react";

function Buy() {
  return (
    <div className="Buy">
      <div class="container">
        <div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Join the Fledge Decentralized Autonomous Organization</h1>
            <p>Why join the DAO? Because we are a community built by the community for the community. We are committed to the U.N. Sustainable Development Goals. 
              We have built the community and resources in the real world first and now we are putting it on the blockchain and governing it with smart contracts.
              This means you have a say in what we are doing and when votes pass, they autonomously deploy (see the diagram on our about page).In addition, it is all free!
              We are here to build a better future for all of us! Please help us take control of our destiny.</p>
            <h2>Steps to Join the DAO</h2>
              <div>
                <h3>1. Get a wallet, e.g. MetaMask</h3>
                <a href="https://metamask.io/download/" target="_blank" title="GetMetaMask">Get Metamask</a>
              </div>
              <div>
                <h3>2. Ensure you have the Matic Network imported</h3>
                <p>Set up the Matic Network</p>
                <p>In Metamask, Go to Settings / Networks / Add Network</p>
                <p>Network Name: Matic Mainnet</p>
                <p>New RPC URL: https://polygon-rpc.com/</p>
                <p>Chain ID: 137</p>
                <p>Currency Symbol: MATIC</p>
                <p>Block Explorer URL: https://polygonscan.com</p>

                <p> 
                 Alternatively you could go to 
                 <a href="https://polygonscan.com" target="_blank" title="Polygonscan">Polygonscan</a> and press the button on the bottom to add the Polygon Network Automatically.
                </p>
                <p>Obtain some Matic</p>
                <p>Go to browser in Metamask</p>
                <p>Go to <a href="https://Faucet.firebird.finance" target="_blank" title="MaticFaucet">MaticFaucet</a> and follow their instructions</p>
              </div>
              <div>
              <h3>3. Import the FLDG token</h3>
              <p>Go to Import token</p>
                  <p>FLDG ADDRESS: 0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b</p>
                  <p>It should auto populate with:</p>
                  <p>FLDG</p>
                  <p>18</p>
              </div>
              <div>
                <h3>4. Request your free FLDG and/or buy more</h3>
                <p>Send your wallet address to jerry@thefledge.com and we will send you 10 FLDG</p>
                <p>You can swap Matic For FLDG on SushiSwap and QuickSwap</p>
              </div>
              <div>
                <h3>5. Connect you wallet or domain</h3>
              </div>
              <div>
                <h3>6. Mint your first trust token - The Fledge's Trust First - this is free</h3>
              </div>
              <div>
                <h3>7. You are now a member of the DAO, are you ready to build a better world</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;