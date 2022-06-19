import React, { useEffect, useState } from "react";

function GetChains () {
  console.log('starting getting chains');
  const [users, setUsers] = useState([]);
  const APIKEY = 'ckey_1ac376e7c80a4dd4b7ed60c8414'
  const baseURL = 'https://api.covalenthq.com/v1'
  const fldgMarketingAddress = '0x985c0Fa941b5120B93FD2ba111485345EdD2bFe6' 
  const flyAddress = '0x3A3f6DA5baE9974C66B16CD4B1EfD1585c081B19'
  const currentBlock = 29613135

  const fetchData = async () => {
  //get chains
    const response = await fetch (new URL(`${baseURL}/chains/?quote-currency=USD&format=JSON&key=${APIKEY}`))
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
        	<h3>Chains</h3>
          <p>These are the current chains the smart contracts look at when determining the status of trust tokens. </p>
      	<div>
        		<a href="https://polygonscan.com/token/0x5118aec3afcca3f1e21733ee9c88bb800afe6f7b#balances" target="_blank" title="View on polygonscan">View Balances</a>
      	</div>
          {users.length > 0 && (
            <ul>
              {users.map(items => (
                <li>{items.chain_id}: {items.label}</li>
              ))}
            </ul>
          )}
        </div>
      )
    }

export default GetChains;