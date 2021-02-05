import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Bar, Line, Pie } from "react-chartjs-2";
import { numberWithCommas } from "../utils/format";

const PieChart = () => {
  const [chartData, setChartData] = useState({});
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const titles = transactions.map((transaction) => transaction.text);

  const Chart = () => {
    setChartData({
      labels: titles,
      datasets: [
        {
          label: "$",
          data: amounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    Chart();
  }, [{ setChartData }]);

  return (
    <div className='chart'>
      <div>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: { text: "Your Expense Visualised", display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: false,
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

export default PieChart;
