import React, { useState } from "react";
import { Card, CardText } from "reactstrap";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

import Search from "../components/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Header from "../components/Header";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard-Header">
        <Header />
        <Button onClick={handleLogout}>Log Out</Button>
      </div>
      <div>
        <Profile />
      </div>
      <Topbar />
      <h1 className="Dashboard-Title">Dashboard</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="searchbar">
        <Search />
      </div>
      <div>
        <div className="profile-shape">
          <PersonIcon className="person-icon" />
        </div>
        <div className="profile-text">
          <strong>Email:</strong>
          {user && user.email}
          <p1>member since 09/2021</p1>
          <div>
            <FavoriteIcon className="favorites-icon" />
            <p2> favorites: 4</p2>
          </div>
        </div>
      </div>
      <div className="container">
        <Sidebar />
        <div className="others">
          <Card className="dashboard-card1">
            <CardText className="dashboard-cardtext">
              <h1 className="inventory">Inventory</h1>
              <div>
                <p1>Total assets: 3</p1>
              </div>
              <div>
                <p2>Bids: 2</p2>
              </div>
              <div>
                <p3>Selling: 1</p3>
              </div>
            </CardText>
          </Card>
          <Card className="dashboard-card2">
            <CardText className="dashboard-cardtext">
              <h1 className="inventory">Tracking</h1>
              <div>
                <p1>Crypto Bear</p1>
              </div>
              <div>
                <p2>Bored Monkey</p2>
              </div>
              <div>
                <Button className="nft-button" color="info">
                  Find NFT
                </Button>
              </div>
            </CardText>
          </Card>
          <Card className="dashboard-card3">
            <AddIcon className="add-icon" />
          </Card>
          <div className="line">
            <hr />
          </div>
          <div className="nftstat-container">
            <h2 className="nft-price">NFT Price</h2>
            <div className="eth-conversion">
              <p2>cost per ethereum</p2>
              <div>
                <p3>1 eth = $3,500.078</p3>
              </div>
            </div>
            <div>
              <Button className="conversion-button" color="info">
                Crypto-Conversion
              </Button>
            </div>
            <div className="nftgraph">
              <img src="/assets/images/nftgraph.png" alt="Nft Graph" />
            </div>
            <div className="dashboard-analysis">
              <h1 className="analysis-text">Analysis</h1>
              <div>
                <p1 className="analysis-subheading">
                  percentage increase in a 12 month span
                </p1>
              </div>
              <li className="analysis-data">
                <ul>Crypto Bear: 10,100% increase</ul>
                <ul>Bored Monkey: 119,999,900% increase</ul>
                <ul>Pixel Whales: 108,999,900% increase</ul>
                <ul>Loot: 1,239,999,900% increase</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const DashboardStyles = styled.div`
//   .Dashboard {
//     background-color: rgb(250, 249, 245);
//     top: 0;
//     height: 100%;
//     width: 100%;
//     background-size: cover;
//     white-space: nowrap;
//   }

//   .Dashboard-Header {
//   }

//   .Dashboard-Title {
//     color: #00c3cc;
//     text-align: center;
//     font-family: "Open Sans", sans-serif;
//     font-size: 90px;
//     font-weight: 900;
//     margin-right: 250px;
//     height: 80%;
//     width: 80%;
//   }

//   .searchbar {
//     color: #047fd3;
//   }

//   .profile-shape {
//     background: rgba(0, 0, 0, 0.3);
//     border: solid black;
//     background-color: white;
//     border-radius: 100px;
//     width: 150px;
//     height: 150px;
//   }
// `````;

export default Dashboard;
