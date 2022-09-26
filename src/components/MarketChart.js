import React from "react";
import { useParams } from "react-router-dom";
import coinGecko from "../Hooks/coinGecko";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const MarketChart = () => {
  const { id } = useParams();
  const { response } = coinGecko(
    `https://api.coingecko.com/api/v3/coins/{id}/contract/{contract_address}/market_chart/?vs_currency=usd&days=30`
  );

  console.log(response);

  if (!response) {
    return <div>Loading...</div>;
  }

  const coinData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinData.map((val) => val.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Graph>
      <div>
        <Line options={options} data={data} />
      </div>
    </Graph>
  );
};

const Graph = styled.div`
  width: 50%;
`;

export default MarketChart;
