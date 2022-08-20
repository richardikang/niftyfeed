import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Coin from "./Coin";
import Pagination from "./Pagination";

const CoinMarket = () => {
  const [currentpage, setcurrentPage] = useState(0);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((r) => r.json())
      .then((data) => setItem(data));
  }, [currentpage]);

  return (
    <>
      <CoinMarketStyle>
        <h1 className="MarketHeader">Markets</h1>
        <section className="">
          {item.map((coin) => (
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
