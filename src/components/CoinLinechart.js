import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function useFetch({ url, method = "GET", headers = {} }) {
  const [{ data, loading, error }, setData] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url, { method, headers })
      .then((resp) => resp.json())
      .then((data) => setData({ data, loading: false }))
      .catch((error) => setData({ error, loading: false }));
  }, [headers, method, url]);
  return { data, loading, error };
}

const CoinLinechart = () => {
  const {
    data: chart,
    loading,
    error,
  } = useFetch({
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("chart", chart);

  const data = {
    labels: chart ? chart.map((data) => data.name) : [],
    datasets: [
      {
        label: "Current Price",
        data: chart ? chart.map((data) => data.current_price) : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#fff600",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Line data={data} height={400} options={options} />
    </div>
  );
};

export default CoinLinechart;
