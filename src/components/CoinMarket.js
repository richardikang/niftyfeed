import React, { useState, useEffect } from "react";
import styled from "styled-components";

import coinGecko from "../Hooks/coinGecko";
import Coin from "./Coin";

const CoinMarket = () => {
  const { response } = coinGecko(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <CoinMarketStyle>
      <section className="">
        <h1 className="MarketHeader">Markets</h1>
        {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </section>
    </CoinMarketStyle>
  );
};

const CoinMarketStyle = styled.div`
  .MarketHeader {
    margin-bottom: 1em;
  }
`;

export default CoinMarket;
