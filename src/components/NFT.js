import React, { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import { Image, Card } from "react-bootstrap";
import styled from "styled-components";

const NFT = ({ user }) => {
  const { getNFTBalances, data } = useNFTBalances();

  useEffect(() => {
    getNFTBalances({
      params: {
        chain: "eth",
        address: user.get("ethaddress"),
      },
    });
  }, []);
  return (
    <NFTStyle>
      <div>
        <Card>
          {data &&
            data.result.map((nft) => (
              <div key={nft.token_url}>
                {nft.image && <Image src={nft.image} />}
              </div>
            ))}
        </Card>
      </div>
    </NFTStyle>
  );
};

const NFTStyle = styled.div`
  height: 50%;
  width: 50%;

  Card {
    height: 20px;
    width: 20px;
  }
`;

export default NFT;
