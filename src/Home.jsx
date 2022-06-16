import React from "react";
import { useMoralis } from 'react-moralis';
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
import UserMenuMoralis from "./header/UserMenuMoralis";

const useraddress = UserMenuMoralis.UserAddress
//this is coming back as the name of the component, i.e. UserMenuMoralis
console.log ('Moralis address return:')
console.log(useraddress)
//{user.get("ethAddress")}

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
              The Fledge DAO: on a mission to eliminate poverty through innovation, entrepreneurship, and regenerative methods. We are a radically inclusive ideation and makerspace, inbuator and accelerator.
            </p>
          <App />
          </div>
          <GetAddressBalances />
          <GetTokenHolders />
          <Portfolio />
          <GetChains />
          <GetTokenHolderChanges />
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