import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyles>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <div>
              <h1>Track And Monitor Your NFT</h1>
            </div>
            <div>
              <button onClick={() => navigate("/demo")}>How It Works</button>
            </div>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  white-space: nowrap;
  position: fixed;
  background-color: blanchedalmond;
  background-size: cover;

  h1 {
    color: #00c3cc;
    text-align: center;
    justify-content: center;
    flex: 1;
  }
`;

export default Home;
