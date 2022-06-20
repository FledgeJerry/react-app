import React from "react";
import { App } from "./Charts/FledgeHolders.tsx";
import Portfolio from "./Charts/portfolioValue.tsx";
import GetAddressBalances from "./CovalentData/GetAddressBalances.jsx";
import GetTokenHolderChanges from "./CovalentData/GetTokenHolderChanges.jsx";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";
import GetNFTMetaData from "./CovalentData/GetNFTMetaData.jsx";
import GetNFTTransactions from "./CovalentData/GetNFTTransactions.jsx";
import GetTransaction from "./CovalentData/GetTransaction.jsx";
import GetAddressTransactions from "./CovalentData/GetAddressTransactions.jsx";
import GetEventsAddress from "./CovalentData/GetEventsAddress.jsx";
import GetERC20Transfers from "./CovalentData/GetERC20Transfers.jsx";
import GetPortfolioBalances from "./CovalentData/GetPortfolioBalances.jsx";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div >
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
               The Fledge DAO: on a mission to eliminate poverty through innovation, entrepreneurship, and regenerative methods. We are a radically inclusive ideation and makerspace, inbuator and accelerator.
            </p>
            <a href="https://thefledge.itch.io/fledgex" target="_blank" title="Virtual Tour"> Take a Virtual Tour </a>
          </div>
          <div>
            <p>
              <h2>How are you doing?</h2>
            </p>
            <Portfolio />
            <GetPortfolioBalances />
            <GetAddressBalances />
            <GetERC20Transfers />
            <GetEventsAddress />
            <GetAddressTransactions />
          </div>
          <div class="col-lg-5">
            <h2>How is the DAO doing? </h2>
            <App />
            <GetTokenHolders />
            <GetTokenHolderChanges />
            <GetNFTMetaData />
            <GetNFTTransactions />
            <GetTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;