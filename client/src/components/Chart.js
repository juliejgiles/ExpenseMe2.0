import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Bar, Line, Pie } from "react-chartjs-2";
import { numberWithCommas } from "../utils/format";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const { transactions } = useContext(GlobalContext);

  const Chart = () => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const titles = transactions.map((transaction) => transaction.text);

    setChartData({
      labels: titles,
      datasets: [
        {
          label: "# of Votes",
          data: amounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className='chart'>
      <h1>Check Yo Spendings</h1>
      <div>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;
