import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Bar, Line, Pie } from "react-chartjs-2";

import { numberWithCommas } from "../utils/format";

export const Chart = () => {
  const [percentage, setpercentage] = useState(1);
  const [data, setData] = useState([]);
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const titles = transactions.map((transaction) => transaction.text);

  console.log([titles]);

  useEffect(() => {
    setData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
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
  }, [setpercentage, setData]);

  return (
    <div className='chart'>
      <div>
        <ErrorChart data={data} />
      </div>
    </div>
  );
};

const ErrorChart = ({ data }) => {
  return (
    <div>
      <Bar data={data}></Bar>
    </div>
  );
};

//------------------------------------------------------

// export const Chart = () => {
//   const { transactions } = useContext(GlobalContext);
// const amounts = transactions.map((transaction) => transaction.amount);
// const titles = transactions.map((transaction) => transaction.text);

//   console.log(amounts);
//   return (
//     <div className='chart'>
//       <h4>Income</h4>
//       <p className='money plus'>{amounts}</p>
//       <p className='money plus'>{titles}</p>
//     </div>
//   );
// };

//----------------------------------------------------

// import React, { Component } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";

// export class Chart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       chartData: {
//         labels: ["Beer", "Food", "Rocket League", "Clothes"],
//         datasets: [
//           { label: "Amount" },
//           {
//             data: [2300, 2200, 2100, 2100],
//             backgroundColor: ["#F241DD", "#3E9CF0", "#7C9D86", "#B2EF7A"],
//           },
//         ],
//       },
//     };
//   }
//   render() {
//     return (
//       <div className='chart'>
//         <Bar
//           data={this.state.chartData}
//           options={{
//             title: {
//               display: true,
//               text: "Watch your spending fam",
//               fontSize: 25,
//             },
//             legend: { display: true, position: "right" },
//           }}
//         />
//       </div>
//     );
//   }
// }
