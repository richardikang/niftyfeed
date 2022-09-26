import React from "react";
import styled from "styled-components";

import coinGecko from "../Hooks/coinGecko";
import CoinTrending from "./CoinTrending";

const CoinTcontainer = () => {
  const { response } = coinGecko("search/trending");
  return (
    <CoinTStyle>
      <div>
        <h1 className="TrendingHeader">Coin Trend</h1>
        {response &&
          response.coins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} />
          ))}
      </div>
    </CoinTStyle>
  );
};

const CoinTStyle = styled.div`
  height: 580px;
  width: 800px;
  border-style: solid;
  border-color: lightgray;
  border-width: 0.5px;
  box-shadow: 4px 4px lightgray;
  overflow-y: scroll;

  .TrendingHeader {
    color: #00c3cc;
    display: flex;
    justify-content: center;
  }
`;

export default CoinTcontainer;
