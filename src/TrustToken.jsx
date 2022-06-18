import React from "react";
import GetTokenHolders from "./CovalentData/GetTokenHolders.jsx";
import GetNFTTokenIDs from "./CovalentData/GetNFTTokenIDs.jsx";

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
                <h2>Have </h2>
              </p>
              <img src={require('./Images/TrustFirst.PNG')} width="150" height="150" />
              <GetNFTTokenIDs />
              <GetTokenHolders />
            </div>
            <div>
              <p>
                <h2>Can Mint</h2>         
              </p>
            </div>
            <div>
              <p>
                <h2>Deficit</h2> 
              </p>
            </div>
            <div>
              <p>
                <h2>Wishlist</h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustToken;