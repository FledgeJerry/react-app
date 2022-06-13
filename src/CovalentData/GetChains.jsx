import { useState, useEffect } from "react";
import React from 'react';


function GetChains () {
  console.log('starting getting chains');
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch("https://api.covalenthq.com/v1/chains/status/?key=ckey_2ae039c6d2e44fc5a17bf9b4e0d")
    const data = response.json()
    console.log(data);
    setItems(data.data.items)
  }

  return (
    <div className="App">
      {console.log(items)}
      Welcome 
      <ul>
        {items.map(item => (
          <li key={item.chain_id}>
            {item.name}
          </li>
        ))}
      </ul>
      </div>
  );

  
}

export default GetChains;