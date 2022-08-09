import React from "react";
import { useMoralis } from "react-moralis";
import CoinLinechart from "./CoinLinechart";

const DashboardContainer = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate}>Login to Metamask</button>
      </div>
    );
  }
  return (
    <>
      <CoinLinechart />
    </>
  );
};

export default DashboardContainer;
