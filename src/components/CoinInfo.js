import React from "react";
import { useParams } from "react-router-dom";
import coinGecko from "../Hooks/coinGecko";
import styled from "styled-components";

const CoinInfo = () => {
  const { id } = useParams();
  const { response } = coinGecko(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <CoinInfoStyle>
      <div>
        <div className="image">
          <img src={response.image.small} alt={response.name} />
          <h1>{response.name}</h1>
        </div>
        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
        </div>
      </div>
    </CoinInfoStyle>
  );
};

const CoinInfoStyle = styled.div`
  display: flex;
  margin-top: 1em;

  .image {
    display: flex;
    justify-content: center;
  }

  .description {
    padding: 4px 4px 4px 4px;
  }
`;

export default CoinInfo;
