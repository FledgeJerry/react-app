import React, { useEffect, useState } from "react";

function GetEventsAddress () {
    console.log('starting getting event addresses');
    const [users, setUsers] = useState([]);
  const APIKEY = 'ckey_1ac376e7c80a4dd4b7ed60c8414'
  const baseURL = 'https://api.covalenthq.com/v1'
  const chainId = '137'
  const transactionTypeId = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  const transactionId = '0x856a5f0977bbc963721eb8a7cbd2ca66a02c0aa99f51d15aa0cc13ea4210c1a9'
  const fldgMarketingAddress = '0x985c0Fa941b5120B93FD2ba111485345EdD2bFe6' 
  const flyAddress = '0x3A3f6DA5baE9974C66B16CD4B1EfD1585c081B19'
  const currentBlock = 29678515
  const beginBlock = currentBlock - 1000000
  const walletaddress = 'thefledge.eth'
  const NFTAddress = flyAddress
  const contractAddress = flyAddress
  const tokenId = 50

    const fetchData = async () => {
    const response = await fetch (new URL(`${baseURL}/${chainId}/events/address/${walletaddress}/?starting-block=${beginBlock}&ending-block=${currentBlock}&key=${APIKEY}`));
    console.log((new URL(`${baseURL}/${chainId}/events/address/${walletaddress}/?starting-block=${beginBlock}&ending-block=${currentBlock}&key=${APIKEY}`)))
    console.log('trying to return event response');
    console.log(response);
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
      <h3>Events by Address</h3>
      <p>This module currently is not returning and error but is also not returning any usable data.</p>
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