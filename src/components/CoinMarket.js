import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Coin from "./Coin";
import Pagination from "./Pagination";

import { TablePagination } from "@mui/material";

const CoinMarket = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchCoinMarkets = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCoinMarkets();
  }, []);

  return (
    <>
      <CoinMarketStyle>
        <h1 className="MarketHeader">Index</h1>
        <Heading>
          <div className="header">
            <p className="header">Coin</p>
            <p className="header">Current Price</p>
            <p className="header">
              Percentage Change <br />
              (last 24 hours)
            </p>
            <p className="header">Market Cap</p>
          </div>
          <section>
            {(rowsPerPage > 0
              ? filteredCoins.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredCoins
            ).map((coin) => (
              <Coin key={coin.id} coin={coin} />
            ))}
          </section>
        </Heading>
        <TablePagination
          rowsPerPageOptions={[]}
          colSpan={3}
          count={coins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          ActionsComponent={Pagination}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </CoinMarketStyle>
    </>
  );
};

const CoinMarketStyle = styled.div`
  height: 800px;
  width: 900px;
  border-style: solid;
  border-color: lightgray;
  border-width: 0.5px;
  box-shadow: 4px 4px lightgray;

  .MarketHeader {
    display: flex;
    margin-bottom: 1em;
    justify-content: center;
    color: #00c3cc;
  }
`;

const Heading = styled.div`
  padding: 2em 4em 2em 5em;

  .container {
    display: grid;
    grid-template-columns: 14rem 10rem 12rem 0.5rem;
    grid-template-rows: 5rem;
  }

  .header {
    display: grid;
    grid-template-columns: 11.5rem 11.3rem 12.5rem 18rem;
    font-size: medium;
    font-weight: bold;
    text-align: center;
  }
`;

export default CoinMarket;
