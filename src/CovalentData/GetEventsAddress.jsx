//import React from 'react';
import React, { useEffect, useState } from "react";

function GetEventsAddress () {
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
    const response = await fetch("https://api.covalenthq.com/v1/1/address/" + useraddress + "/balances_v2/?key=ckey_2ae039c6d2e44fc5a17bf9b4e0d");
    const data = await response.json();
    const dataitems = data.data.items;
    setUsers(dataitems)
  }

  useEffect(() => {
    fetchData()
  }, [])

    return (
      <div>
      {console.log('returning data get transactions')}
      <h3>Transactions</h3>
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

export default GetEventsAddress;