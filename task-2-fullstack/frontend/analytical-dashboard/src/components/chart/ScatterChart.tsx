import { Box } from "@mui/material";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { customerData } from "../../data/CustomerData";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const ScatterChart = () => {
  const scatterData = {
    datasets: [
      {
        label: "Income vs Age",
        data: customerData.map((person) => ({
          x: person.age,
          y: person.income,
        })),
        backgroundColor: "#7a0916",
      },
    ],
  };
  const scatterOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Income vs Age Scatter Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: "Income",
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Box>
      <Scatter data={scatterData} options={scatterOptions} />
    </Box>
  );
};

export default ScatterChart;
