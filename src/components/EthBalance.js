import React, { useEffect, useState } from "react";
import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";

const EthBalance = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();
  const { fetchERC20Balances, data } = useERC20Balances();

  const [ethBalance, setEthBalance] = useState(0);

  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "eth",
        address: user.get("ethAddress"),
      })
      .catch((e) => console.log(e));
    console.log(result);
    if (result.balance) {
      setEthBalance(Moralis.Units.FromWei(result.balance));
    }
  };
  useEffect(() => {
    fetchNativeBalance();
    fetchERC20Balances({
      params: {
        chain: "eth",
        address: user.get("ethAddress"),
      },
    });
  }, []);

  console.log(data);

  return (
    <div>
      {ethBalance && (
        <h1>
          {ethBalance} <b>ETH</b>
        </h1>
      )}
    </div>
  );
};

export default EthBalance;
