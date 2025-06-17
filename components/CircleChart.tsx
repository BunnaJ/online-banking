// components/CircleChart.tsx
"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChart() {
  const data = {
    labels: ["Savings", "Expenses", "Investments"],
    datasets: [
      {
        label: "My Finance",
        data: [40, 30, 30],
        backgroundColor: ["#142d6f", "#a3bdff", "#f4f2ed"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "50%", // for donut-style
    responsive: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  return <Doughnut data={data} options={options}  />;
}
