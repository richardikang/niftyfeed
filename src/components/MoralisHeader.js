import React from "react";

const MoralisHeader = ({ user, logout }) => {
  return (
    <div>
      <h1>{user.getUsername()}</h1>
      <h2>Wallet Address: {user.get("ethAddress")}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default MoralisHeader;
