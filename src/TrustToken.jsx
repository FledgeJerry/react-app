import React from "react";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";
import GetNFTTokenIDs from "./CovalentData/GetNFTTokenIDs.jsx";
import Portfolio from "./Charts/portfolioValue.tsx";
import GetAddressBalances from "./CovalentData/GetAddressBalances.jsx";
import GetEventsAddress from "./CovalentData/GetEventsAddress.jsx";
import GetERC20Transfers from "./CovalentData/GetERC20Transfers.jsx";
import GetPortfolioBalances from "./CovalentData/GetPortfolioBalances.jsx";
import GetAddressTransactions from "./CovalentData/GetAddressTransactions.jsx";

function TrustToken() {
  return (
    <div className="TrustToken">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div >
            <h1 class="font-weight-light">Trust Tokens</h1>
            <p>
              Your Trust Token Status
            </p>
            <div>
              <p>
                <h2>Earned and Minted</h2>
                <p>These are the trust tokens you have earned and can use for access to our physical and virtual spaces, as well as voting power for different types of proposals.</p>
              </p>
              <img src={require('./Images/TrustFirst.PNG')} width="150" height="150" />
            </div>
            <div>
              <p>
                <h2>Earned and Can Claim / Mint</h2>         
                <p>These are the trust tokens you have earned, but you have not yet claimed.</p>
                <img src={require('./Images/ValuesNotRules.PNG')} width="150" height="150" />
                <p>Some trust tokens allow you to stake treasures, they will always appear here! 
                  <a href="https://flies.fldg.io" target="_blank" title="BuyFly"> Buy a Fly: vote on start-up funding </a>
                </p>
              </p>
            </div>
            <div>
              <p>
                <h2>Deficit to Earn</h2> 
                <p>These are the trust tokens you have not earned yet, but you are close and have a few more things to do.</p>
                <img src={require('./Images/RadicallyInclusive.PNG')} width="150" height="150" />
              </p>
            </div>
            <div>
              <p>
                <h2>Wishlist</h2>
                <img src={require('./Images/KeepBTCShady.PNG')} width="150" height="150" />
              </p>
            </div>
            <div>
              <p>
                <h2>Raw Data</h2>
                <p>This is the data the smart contract uses to make decisions about trust tokens.</p>
                <GetPortfolioBalances />
                <GetAddressBalances />
                <GetTokenHolders />
                <GetERC20Transfers />
                <GetEventsAddress />
                <GetAddressTransactions />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustToken;