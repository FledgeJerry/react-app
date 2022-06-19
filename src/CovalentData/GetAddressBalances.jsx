import React, { useState, useEffect } from "react";

  function GetAddressBalances () {
      console.log('starting getting address balances');
      const [users, setUsers] = useState([]);

      const fetchData = async () => {
      const APIKEY = 'ckey_1ac376e7c80a4dd4b7ed60c8414'
      const baseURL = 'https://api.covalenthq.com/v1'
      const chainId = '137'
      const fldgMarketingAddress = '0x985c0Fa941b5120B93FD2ba111485345EdD2bFe6' 
      const flyAddress = '0x3A3f6DA5baE9974C66B16CD4B1EfD1585c081B19'
      //need to change to the addess of the user signed in
      const walletaddress = fldgMarketingAddress
      const NFTAddress = flyAddress
      const contractAddress = flyAddress
      const tokenId = 50

      const response = await fetch  (new URL(`${baseURL}/${chainId}/address/${walletaddress}/balances_v2/?key=${APIKEY}`));
      const data = await response.json();
      const dataitems = data.data.items;
      console.log(dataitems)
      setUsers(dataitems)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h3>Address Balances (Polygon)</h3>
      <p>This represents the number of tokens you have in your wallet.</p>
      <div>
        <a href="https://polygonscan.com/token/0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b#balances" target="_blank" title="View on polygonscan">View Balances</a>
      </div>
      {users.length > 0 && (
        <ul>
          {users.map(items => (
            <li>{items.contract_ticker_symbol}: {items.balance}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GetAddressBalances;