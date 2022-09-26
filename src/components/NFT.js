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
        address: user.get("ethAddress"),
      },
    });
  }, []);
  return (
    <NFTStyle>
      <div>
        <Card>
          {data &&
            data.result.map((nft) => (
              <div key={nft.token_uri}>
                {nft.image && <Image src={nft.image} className="image" />}
                <p className="name">{nft.name}</p>
                <p2>{nft.token_uri}</p2>
              </div>
            ))}
        </Card>
      </div>
    </NFTStyle>
  );
};

const NFTStyle = styled.div`
  height: 20%;
  width: 20%;

  .image {
    width: 15em;
  }

  .name {
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default NFT;
