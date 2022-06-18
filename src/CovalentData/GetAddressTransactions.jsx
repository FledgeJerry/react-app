import React, { useState, useEffect } from "react";

function GetAddressTransactions () {
  console.log('starting getting address balances');
  const [users, setUsers] = useState([]);
  const APIKEY = 'ckey_1ac376e7c80a4dd4b7ed60c8414'
  const baseURL = 'https://api.covalenthq.com/v1'
  const chainId = '137'
  const transactionTypeId = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  const transactionId = '0x856a5f0977bbc963721eb8a7cbd2ca66a02c0aa99f51d15aa0cc13ea4210c1a9'
  const fldgMarketingAddress = '0x985c0Fa941b5120B93FD2ba111485345EdD2bFe6' 
  const flyAddress = '0x3A3f6DA5baE9974C66B16CD4B1EfD1585c081B19'
  const currentBlock = 29613135
  const beginBlock = currentBlock - 1000000
  const walletaddress = fldgMarketingAddress
  const NFTAddress = flyAddress
  const contractAddress = flyAddress
  const tokenId = 50

  const fetchData = async () => {
  //NEED TO GET CONNECTED USER'S ADDRESS HERE
  const useraddress = "demo.eth";
  const response = await fetch  (new URL(`${baseURL}/${chainId}/address/${walletaddress}/transactions_v2/?key=${APIKEY}`));
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
        <h3>Address Transactions</h3>
      <div>
        <a href="https://polygonscan.com/token/0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b#balances" target="_blank" title="View on polygonscan">View Balances</a>
      </div>
      {users.length > 0 && (
        <ul>
          {users.map(items => (
            <li>{items.block_signed_at}: {items.to_address_label}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GetAddressTransactions;