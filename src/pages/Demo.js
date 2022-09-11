import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "reactstrap";

import Search from "../components/Search";
import CloseIcon from "@mui/icons-material/Close";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Demo = () => {
  const navigate = useNavigate();

  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = () => {
    setBtnState(!btnState);
  };

  const closeWindow = () => {
    setBtnState(false);
  };

  return (
    <Demostyle>
      <div>
        <div className="container-fluid">
          <Link to="/" onClick={() => navigate("/home")}>
            <img
              src="/assets/images/niftyfeed-logo.png"
              alt="NiftyFeed"
              className="niftyfeed"
            />
          </Link>
        </div>
        <div className="grid-container">
          <div>
            <Sidebar />
          </div>
          <div className="middle">
            <h1 className="Dashboard-Title">Dashboard</h1>
            <Search />
            <div className="inventory-wrapper">
              <h1 className="inventory">Inventory</h1>
              <div className="nft-wrapper">
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Coins.jpg"
                      alt=" "
                      className="nft"
                    />
                    <p1 className="nft-name">Coins</p1>
                  </div>
                </section>
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Floppydisk.png"
                      alt=" "
                      className="floppydisk"
                    />
                    <p1 className="nft-name">Funky Disks</p1>
                  </div>
                </section>
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Glitch.jpg"
                      alt=" "
                      className="glitch"
                    />
                    <p1 className="nft-name">Glitch</p1>
                  </div>
                </section>
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Mystic.jpg"
                      alt=" "
                      className="mystic"
                    />
                    <p1 className="nft-name">Mystic</p1>
                  </div>
                </section>
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Paint.png"
                      alt=" "
                      className="paint"
                    />
                    <p1 className="nft-name">Paint</p1>
                  </div>
                </section>
                <section className="nft-item">
                  <div className="nft-card">
                    <img
                      src="/assets/images/Walnut.png"
                      alt=" "
                      className="walnut"
                    />
                    <p1 className="walnut-nft">Walnut</p1>
                  </div>
                </section>
              </div>
            </div>
            <div className="data-container">
              <div>
                <p1 className="graph-header">Price History Of Bitcoin</p1>
                <p2 className="graph-header">7 Day Period</p2>
                <div>
                  <img
                    src="/assets/images/Bitcoin-graph.png"
                    alt=" "
                    className="graph"
                  />
                </div>
                <div className="card-wrapper">
                  <Card className="card">
                    <h1 className="card-title">Tracking</h1>
                    <p1 className="tracking-list">Crypto Bear</p1>
                    <p2 className="tracking-list">Bored Monkey</p2>
                  </Card>
                </div>
              </div>
              <img
                src="/assets/images/TrendingNft.png"
                alt=" "
                className="trending"
              />
            </div>
            <hr className="line" />
            <div className="card-wrapper2">
              <Card className="conversion-card">
                <h2 className="card-title">Conversion Rate</h2>
                <p2>cost per ethereum</p2>
                <p3>1 eth = $3,500.078</p3>
                <button className="conversion-button">
                  Crypto
                  <br />
                  Conversion
                </button>
              </Card>
              <Card className="crypto-card">
                <div className="crypto-div">
                  <h1 className="crypto-title">Cryptocurrency</h1>
                  <ul>Crypto Bear: 10,100% increase</ul>
                  <ul>Bored Monkey: 119,999,900% increase</ul>
                  <ul>Pixel Whales: 108,999,900% increase</ul>
                  <ul>Loot: 1,239,999,900% increase</ul>
                </div>
                <button className="expand-btn" onClick={handleBtnClick}>
                  <AspectRatioIcon />
                </button>
              </Card>
              {btnState ? (
                <div className="popup">
                  <Card className="popup-card">
                    <button onClick={closeWindow} className="close">
                      <CloseIcon className="x" />
                    </button>
                    Modal
                  </Card>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <Topbar />
            <Profile className="profile-block" />
          </div>
        </div>
      </div>
    </Demostyle>
  );
};

const Demostyle = styled.div`
  .niftyfeed {
    width: 17%;
    padding-top: 0.1em;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 10.2rem 60rem 25rem;
    margin-top: 2em;
    padding-bottom: 0.5em;
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    box-shadow: 4px 4px 4px lightgray;
    border-style: solid;
    border-color: lightgray;
    border-width: 0.1px;
    border-radius: 1%;
  }

  .Dashboard-Title {
    color: #00c3cc;
    display: flex;
    justify-content: center;
    font-size: 80px;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2em;
  }

  .nft-item {
    display: flex;
    justify-content: center;
    align-content: center;
    border-style: outset;
    width: 200px;
    padding-top: 2em;
  }

  .nft-card {
    display: flex;
    flex-direction: column;
    padding: 2px 2px 2px 2px;
  }

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

  .nft-wrapper {
    padding-top: 1em;
    display: grid;
    grid-template-columns: 5rem 5rem 5rem;
    column-gap: 9em;
    row-gap: 2em;
  }

  .nft {
    width: 170px;
  }

  .floppydisk {
    width: 125px;
  }

  .glitch {
    width: 140px;
  }

  .mystic {
    width: 120px;
  }

  .paint {
    width: 120px;
  }

  .walnut {
    width: 160px;
  }

  .walnut-nft {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
  }

  .nft-name {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .data-container {
    display: grid;
    grid-template-columns: 24rem 24rem;
  }

  .graph-header {
    color: #00c3cc;
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    margin-left: 5em;
  }

  .graph {
    width: 130%;
  }

  .trending {
    width: 100%;
  }

  .profile-block {
    display: flex;
    margin-top: 4em;
  }

  .card-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 2em;
  }

  .card {
    width: 20em;
    padding: 2em 2em 2em 2em;
    box-shadow: 4px 4px lightgray;
  }

  .card-title {
    color: #00c3cc;
    display: flex;
    justify-content: center;
  }

  .tracking-list {
    display: flex;
    justify-content: center;
  }

  .line {
    width: 50em;
    color: gray;
  }

  .card-wrapper2 {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    padding-bottom: 5em;
  }

  .conversion-card {
    display: flex;
    align-items: center;
    width: 20em;
    height: 14em;
    padding: 2em 2em 2em 2em;
  }

  .conversion-button {
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    background-color: #6090e0;
    height: 4em;
    width: 7em;
    border-radius: 5%;
    border-style: none;
    box-shadow: 3px 3px lightgray;
    margin-top: 0.5em;
  }

  .crypto-card {
    overflow-y: scroll;
    width: 20em;
    height: 14em;
  }

  .crypto-div {
    padding: 2em 2em 2em 2em;
  }

  .crypto-title {
    font-size: 30px;
    color: #00c3cc;
    display: flex;
    justify-content: center;
  }

  .expand-btn {
    display: flex;
    position: sticky;
    bottom: 0;
    margin-top: auto;
    margin-right: auto;
    border-style: none;
    background-color: transparent;
  }

  .popup {
    position: absolute;
    top: 20%;
  }

  .popup-card {
    display: flex;
    width: 40em;
    height: 50em;
  }

  .close {
    background-color: transparent;
    border-style: none;
  }

  .x {
    size: 0.1px;
    display: flex;
    margin-bottom: auto;
    margin-right: auto;
  }
`;

export default Demo;
