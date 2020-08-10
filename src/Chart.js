import React from "react";
import { Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Available SKUs", "Failed SKUs"],
  datasets: [
    {
      label: "SKUs",
      backgroundColor: ["#27c48d", "#d1192b"],
      hoverBackgroundColor: ["#31cc77", "#990c24"],
      data: [957, 43],
    },
  ],
};

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          height={40}
          options={{
            title: {
              display: true,
              text: "Pricing Intelligence",
              fontSize: 20,
            },
            legend: {
              labels: {
                usePointStyle: true,
              },
              position: "right",
            },
            cutoutPercentage: 60,
          }}
        />
      </div>
    );
  }
}
