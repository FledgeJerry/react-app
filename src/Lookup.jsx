import React from "react";
import GetChains from "./CovalentData/GetChains.jsx";
import { App } from "./Charts/FledgeHolders.tsx";
import Portfolio from "./Charts/portfolioValue.tsx";
import GetTokenHolderChanges from "./CovalentData/GetTokenHolderChanges.jsx";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";
import GetNFTMetaData from "./CovalentData/GetNFTMetaData.jsx";
import GetNFTTransactions from "./CovalentData/GetNFTTransactions.jsx";
import GetTransaction from "./CovalentData/GetTransaction.jsx";
import GetAddressTransactions from "./CovalentData/GetAddressTransactions.jsx";
import GetNFTTokenIDs from "./CovalentData/GetNFTTokenIDs.jsx";

function Lookup() {
  return (
    <div className="lookup">
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
            <h1 class="font-weight-light">About The Fledge DAO</h1>
            <p>
              The Fledge DAO is a social cause Decentralized Autonomous Organization. We have Fledge Coin, NFT Project Fledge Flies, and NFT Trust Tokens that give access to our resources. 
            </p>
            <img src={require('./Images/TheFledgeDAO.png')} />
            <p>
              <h2>How is the DAO doing? </h2>
            </p>
            <App />
            <GetTokenHolders />
            <GetTokenHolderChanges />
            <Portfolio />
            <GetNFTTokenIDs />
            <GetNFTMetaData />
            <GetNFTTransactions />
            <GetTransaction />
            <GetChains />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lookup;