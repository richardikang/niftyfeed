import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import coinGecko from "../API/coinGecko";
import { WatchList } from "../contexts/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchList);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Coinlstyle>
        <ul className="list-group">
          {coins.map((coin) => {
            return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
          })}
        </ul>
      </Coinlstyle>
    );
  };
  return <div>{renderCoins()}</div>;
};

const Coinlstyle = styled.div`
  display: flex;
`;

export default CoinList;
