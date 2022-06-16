import React from "react";

function Buy() {
  return (
    <div className="Buy">
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
            <h1 class="font-weight-light">Join the Fledge DAO</h1>
            <p>
              Steps to Join the DAO
              1. Get a wallet, e.g. MetaMask
              2. Ensure you have the Matic Network imported
              3. Import the FLDG token
              4. Request your free FLDG
              5. Connect you walled or domain
              6. Mint your first trust token - The Fledge's Trust First - this is free
              7. You are now a member of the DAO, are you ready to build a better world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;