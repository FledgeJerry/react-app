import React from "react";
import { App } from "./Charts/FledgeHolders.tsx";
import Portfolio from "./Charts/portfolioValue.tsx";
import GetChains from "./CovalentData/GetChains.jsx";
import GetAddressBalances from "./CovalentData/GetAddressBalances.jsx";
import GetTokenHolderChanges from "./CovalentData/GetTokenHolderChanges.jsx";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";
import GetNFTMetaData from "./CovalentData/GetNFTMetaData.jsx";
import GetNFTTransactions from "./CovalentData/GetNFTTransactions.jsx";
import GetTransaction from "./CovalentData/GetTransaction.jsx";
import GetAddressTransactions from "./CovalentData/GetAddressTransactions.jsx";
import GetNFTTokenIDs from "./CovalentData/GetNFTTokenIDs.jsx";
import GetEventsAddress from "./CovalentData/GetEventsAddress.jsx";
import GetERC20Transfers from "./CovalentData/GetERC20Transfers.jsx";
import GetPortfolioBalances from "./CovalentData/GetPortfolioBalances.jsx";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Welcome to the Fledge DAO!
            </p>
          <App />
          <div>
            <a href="https://polygonscan.com/token/0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b#balances" target="_blank" title="View on polygonscan">View Balances</a>
          </div>
          </div>
          <Portfolio />
          <GetAddressBalances />
          <GetChains />
          <GetTokenHolderChanges />
          <GetTokenHolders />
          <GetNFTMetaData />
          <GetNFTTransactions />
          <GetTransaction />
          <GetAddressTransactions />
          <GetNFTTokenIDs />
          <GetEventsAddress />
          <GetERC20Transfers />
          <GetPortfolioBalances />
        </div>
      </div>
    </div>
  );
}

export default Home;