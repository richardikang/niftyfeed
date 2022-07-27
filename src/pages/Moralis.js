import React from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const Web3Api = useMoralisWeb3Api();

const Mor = () => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const userEthNFTs = async () => {
    await Web3Api.account.getNFTs();
    console.log(userEthNFTs);
  };

  const options = {
    address: "0x7dE3085b3190B3a787822Ee16F23be010f5F8686",
    chain: "eth",
  };
  const NFTs = async () => {
    await Web3Api.token.getAllTokenIds(options);
    console.log(NFTs);
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button>
    </div>
  );
};

export default Mor;
