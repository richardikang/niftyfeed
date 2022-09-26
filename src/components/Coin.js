import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { currencyFormat } from "../utils";

const Coin = ({ coin }) => {
  return (
    <Coinstyle>
      <Link to={`/coin/${coin.id}`}>
        <div className="container">
          <div>
            <div className="wrapper">
              <img src={coin.image} alt={coin.name} />
              <p>{coin.name}</p>
              <span className="symbol">({coin.symbol})</span>
            </div>
          </div>
          <span>${coin.current_price}</span>
          <span
            className={`${
              coin.price_change_percentage_24h < 0 ? "up" : "down"
            }`}
          >
            {coin.price_change_percentage_24h < 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
            {coin.price_change_percentage_24h}%
          </span>
          <div>
            <span>{currencyFormat(coin.market_cap)}</span>
          </div>
        </div>
      </Link>
    </Coinstyle>
  );
};
const Coinstyle = styled.div`
  border-radius: 5px;
  border-color: gray;
  border-width: 10px;

  :hover {
    background-color: lightgray;
  }

  .container {
    /* display: grid;
    grid-template-columns: 20rem 15rem 18rem 16rem;
    grid-template-rows: 5rem; */
  }

  img {
    width: 15%;
  }

  .down {
    color: red;
    display: inline-block;
    justify-content: space-between;
    gap: 0.5em;
  }

  .up {
    color: green;
  }

  .wrapper {
    display: inline-flex;
    gap: 0.8rem;
  }

  .symbol {
    font-size: 15px;
  }
`;

export default Coin;
