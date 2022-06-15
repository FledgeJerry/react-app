import { useState, useEffect } from "react";
import React from 'react';


function GetNFTMetaData () {
  console.log('starting GetNFTMetaData');
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
  }, [])

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
  const getData = async () => { 

  //get NFT Meta Data
  const response = await fetch (new URL(`${baseURL}/${chainId}/tokens/${NFTAddress}/nft_metadata/${tokenId}/?key=${APIKEY}`))

const data = response.json()
    console.log('from the data');
    console.log(data);
 //   console.log(response.data.data.contract_name);
    let ContractName = data.contract_name;
    console.log(ContractName);
    console.log(data.data.item.contract_name);
    setItems(data.data.item)
  }

  return (
    <div className="App">
      {console.log('returning data')}
      {console.log(items)}
      {console.log(items.contract_name)}
      Is the Data Showing?
      <ul>
        {items.map(item => (
          <li key={item.contract_address}>
            {item.contract_name}
          </li>
        ))}
      </ul>
      </div>
  );

  
}

export default GetNFTMetaData;