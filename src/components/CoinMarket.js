import React, { useState, useEffect } from "react";
import styled from "styled-components";

import coinGecko from "../Hooks/coinGecko";
import Coin from "./Coin";
import Pagination from "./Pagination";

const CoinMarket = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { response } = coinGecko(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <CoinMarketStyle>
      <h1 className="MarketHeader">Markets</h1>

      <section>
        {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
        <Pagination
          currentPage={currentPage}
          total={500}
          limit={20}
          onPageChange={(page) => setCurrentPage(page)}
        />
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
