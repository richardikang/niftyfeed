import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Coin from "./Coin";
import Pagination from "./Pagination";

const CoinMarket = () => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [items, setItems] = useState([]);

  // when we change currentPageIdx, fetch that page's items
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPageIdx+1}&sparkline=false`
    )
      .then((r) => r.json())
      .then((data) => {
      // confirm that your data looks like the items you want
        console.log("🕵️‍♀️ data", data)
        setItems(data)
      });
  }, [currentPageIdx]);

  return (
    <>
      <CoinMarketStyle>
        <h1 className="MarketHeader">Markets</h1>
        <section className="">
          {items.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </section>
        <Pagination {...{ currentpage, setcurrentPage }} />
      </CoinMarketStyle>
    </>
  );
};

const CoinMarketStyle = styled.div`
  .MarketHeader {
    margin-bottom: 1em;
  }
`;

export default CoinMarket;
