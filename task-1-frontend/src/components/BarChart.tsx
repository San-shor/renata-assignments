import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ChartOptions, TooltipItem } from "../type/chartdata";
import { chartData } from "../data/chartData";
import { getColor } from "../utils/getColor";
import { Box, Typography } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const data = {
  labels: chartData.map((item) => item.product),
  datasets: [
    {
      label: "Total Sales",
      data: chartData.map((item) => item.totalSales),
      backgroundColor: chartData.map((d) => getColor(d.totalValue)),
    },
  ],
};

const options: ChartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `Product= ${chartData[index].product}`;
        },

        label: (tooltipItem: TooltipItem) => {
          return `TotalSales= ${chartData[tooltipItem.dataIndex].totalSales}`;
        },
        afterBody: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `TotalValue= ${chartData[index].totalValue}`;
        },
      },
      displayColors: false,
      backgroundColor: "#fff",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#ddd",
      borderWidth: 1,
      padding: 10,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Product",
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: "TotalSales",
      },
      beginAtZero: true,
      grid: {
        color: "#e0e0e0",
      },
    },
  },
};

const BarChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
        gap: "50px",
        maxWidth: "calc(100vw - 140px)",
      }}
    >
      <Bar options={options} data={data} />
      <Typography>TotalValue</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          gap: "5px",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, #fff5eb,#fee6ce,#fdd0a2,#fdae6b,#fd8d3c,#f16913,#d94801,#a63603,#7f2704)",
            height: "350px",
            width: "20px",
          }}
        >
          &nbsp;
        </div>
        <div
          style={{
            height: "350px",
            position: "relative",
            pointerEvents: "none",
          }}
        >
          {[40, 35, 30, 25, 20, 15, 10].map((val, idx) => (
            <div
              key={val}
              style={{
                position: "absolute",
                top: `${(idx / 6) * 100}%`,

                fontSize: "12px",
                transform: "translateY(-50%)",
              }}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default BarChart;
