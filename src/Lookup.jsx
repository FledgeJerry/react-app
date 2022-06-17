import React from "react";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";

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
            <GetTokenHolders />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lookup;