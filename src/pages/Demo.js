import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardText } from "reactstrap";

import Search from "../components/Search";
import AddIcon from "@mui/icons-material/Add";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <Demostyle>
      <div>
        <HeaderStyle>
          <div>
            <Link to="/" onClick={() => navigate("/home")}>
              <img src="/assets/images/niftyfeed-logo.png" alt="NiftyFeed" />
            </Link>
          </div>
        </HeaderStyle>
        <div className="container">
          <div>
            <Sidebar />
          </div>
          <div className="middle">
            <h1 className="Dashboard-Title">Dashboard</h1>
            <Search />
            <p1 className="graph-header">
              Price History Of Bitcoin In A 7 Day Period
            </p1>
            <img
              src="/assets/images/Bitcoin-graph.png"
              alt=" "
              className="graph"
            />
            <button className="nft-button">
              Find NFT <AddIcon className="add-icon" />
            </button>
            <div className="card-wrapper">
              <Card className="card">
                <h1 className="card-title">Inventory</h1>
                <CardText className="inventory-text">
                  <p1>Total assets: 3</p1>
                  <p3>Selling: 1</p3>
                </CardText>
              </Card>
              <Card className="card">
                <h1 className="card-title">Tracking</h1>
                <p1 className="tracking-list">Crypto Bear</p1>
                <p2 className="tracking-list">Bored Monkey</p2>
              </Card>
            </div>
            <hr className="line" />
            <div className="card-wrapper2">
              <Card className="nft-card">
                <h2 className="card-title">NFT Price</h2>
                <p2>cost per ethereum</p2>
                <p3>1 eth = $3,500.078</p3>
                <button className="conversion-button">
                  Crypto
                  <br />
                  Conversion
                </button>
              </Card>
              <Card className="analysis-card">
                <h1 className="card-title">Analysis</h1>
                <ul>Crypto Bear: 10,100% increase</ul>
                <ul>Bored Monkey: 119,999,900% increase</ul>
                <ul>Pixel Whales: 108,999,900% increase</ul>
                <ul>Loot: 1,239,999,900% increase</ul>
              </Card>
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
  .container {
    display: grid;
    grid-template-columns: 8rem auto 25rem;
    margin-top: 2em;
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

  img {
    width: 17%;
  }

  .graph-header {
    color: #00c3cc;
    font-weight: bold;
    font-size: 1.2em;
  }

  .graph {
    display: flex;
    align-items: flex-end;
    width: 80%;
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

  .inventory-text {
    display: flex;
    justify-content: space-around;
  }

  .tracking-list {
    display: flex;
    justify-content: center;
  }

  .add-icon {
    transform: scale(0.5);
    margin-bottom: 1.5em;
  }

  .nft-button {
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    background-color: #6090e0;
    height: 2em;
    width: 7em;
    border-radius: 5%;
    border-style: none;
    box-shadow: 3px 3px lightgray;
    padding-left: 0.9em;
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

  .nft-card {
    display: flex;
    align-items: center;
    width: 20em;
    height: 12em;
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

  .analysis-card {
    overflow-y: scroll;
    width: 20em;
    height: 12em;
    padding: 2em 2em 2em 2em;
  }
`;

const HeaderStyle = styled.div`
  color: black;
`;

export default Demo;
