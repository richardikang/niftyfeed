import React from "react";
import { useMoralis } from "react-moralis";
import { Card } from "reactstrap";
import styled from "styled-components";

import CoinTcontainer from "./CoinTcontainer";
import CoinMarket from "./CoinMarket";
import NFT from "./NFT";

const DashboardContainer = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate}>Login to Metamask</button>
      </div>
    );
  }
  return (
    <Dashboardctnstyle>
      <>
        <div className="inventory-wrapper">
          <h1 className="inventory">Inventory</h1>
          <div className="nft-wrapper">
            <section className="nft-item">
              <div>
                <NFT user={user} />
              </div>
            </section>
          </div>
        </div>
        <div>
          <CoinTcontainer />
        </div>
        <div>
          <CoinMarket />
        </div>
      </>
    </Dashboardctnstyle>
  );
};

const Dashboardctnstyle = styled.div`
  text-align: center;
  justify-content: center;

  .inventory-wrapper {
    height: 550px;
    width: 800px;
    border-style: solid;
    border-color: lightgray;
    border-width: 0.5px;
    padding: 1em 2em 4em 5em;
    box-shadow: 4px 4px lightgray;
  }

  .inventory {
    color: #00c3cc;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-bottom: 1em;
  }

  .nft-item {
    display: flex;
    justify-content: center;
    align-content: center;
    border-style: outset;
    width: 200px;
    padding-top: 2em;
  }
`;

export default DashboardContainer;
