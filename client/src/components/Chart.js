import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["Beer", "Food", "Rocket League", "Clothes"],
        datasets: [
          { label: "Amount" },
          {
            data: [2300, 2200, 2100, 2100],
            backgroundColor: ["#F241DD", "#3E9CF0", "#7C9D86", "#B2EF7A"],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Watch your spending fam",
              fontSize: 25,
            },
            legend: { display: true, position: "right" },
          }}
        />
      </div>
    );
  }
}
