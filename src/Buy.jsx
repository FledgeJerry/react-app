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
                <p>Alternatively go to the top of this page and click "Login with UD" this will walk you through a sign up process.</p>
              </div>
              <div>
                <h3>2. Ensure you have the Matic Network imported</h3>
                <p>In Metamask, Go to Settings / Networks / Add Network and add the following:</p>
                  <ul>
                    <li>Network Name: Matic Mainnet</li>
                    <li>New RPC URL: https://polygon-rpc.com/</li>
                    <li>Chain ID: 137</li>
                    <li>Currency Symbol: MATIC</li>
                    <li>Block Explorer URL: https://polygonscan.com</li>
                  </ul>
                  <p> 
                    Alternatively you could go to 
                    <a href="https://polygonscan.com" target="_blank" title="Polygonscan"> Polygonscan </a> 
                    and press the button on the bottom to add the Polygon Network Automatically.
                  </p>
                </div>
                <div>
                  <h3> 3. Obtain some Matic</h3>
                  <p>You will need Matic to be able to pay for transaction gas, usually less than a penny and you can obtain small amounts for free:</p>
                  <p>Go to "Browser" in Metamask</p>
                  <p>Go to <a href="https://Faucet.firebird.finance" target="_blank" title="MaticFaucet">Matic Faucet</a> and follow their instructions</p>
              </div>
              <div>
                <h3>4. Import the FLDG token</h3>
                <p>Go to Import token when on the Polygon Network in Metamask</p>
                <p>FLDG ADDRESS: 0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b</p>
                <p>After pasting the address into the Token Address field, it should auto populate with:</p>
                <ul> 
                  <li>Token Symbol: FLDG</li>
                  <li>Token of Precision: 18</li>
                </ul>
              </div>
              <div>
                <h3>5. Request your free FLDG and/or buy more</h3>
                <p>
                  Send your wallet address to: 
                  <a href="mailto:jerry@thefledge.com?subject=Free FLDG Coin"> Email for Free FLDG </a> 
                  and we will send you 10 FLDG
                </p>
                <p>
                  You can swap Matic For FLDG on 
                  <a href="https://app.sushi.com/swap?chainId=137" target="_blank" title="SushiSwap">SushiSwap</a> and 
                  <a href="https://quickswap.exchange/#/swap" target="_blank" title="QuickSwap">QuickSwap</a>
                </p>
                <p>Note you may have to put in the FLDG address if you cannot find Fledge Coin from the drop down, 
                    so copy this address before you go to the exchanges: 
                    0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b
                </p>
              </div>
              <div>
                <h3>6. Mint your first trust token - The Fledge's Trust First - this is free</h3>
                <p>Connect you wallet using Metamask (or other) or domain using Unstoppable Domains</p>
                <p>If the above steps were completed successfully you should see a FLDG balance and a Matic Balance on your dashboard.</p>
                <p>Navigate to the Trust Token Page</p>
                <p>Again, if the above steps were completed successfully you should see a button that allows you to mint the "Trust First" Token</p>
                <p>Press the Mint Button and follow the instructions (this is free except for a very small amount of gas)</p>
                <p>You should now see your Trust First NFT in the "Earned and Minted" section. You have earned this Trust Token because you spent time onboarding. 
                  Trust Tokens are earned from staking your time, tools, talents or treasures.</p>
              </div>
              <div>
                <h3>7. You are now a member of the DAO, are you ready to build a better world</h3>
                <p>
                  The best way to participate it to participate, engage with the DAO, be curious, explore and 
                  learn about Blockchain, Smart Contracts, and Web3. We are here to build a better world and to
                  do this, we need everyone and we need to figure out how to tap into the human, social, built, natural, and 
                  financial capital that is all around us. We will build wealth and prosperity together.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;