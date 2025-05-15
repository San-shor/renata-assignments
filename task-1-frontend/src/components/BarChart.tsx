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
import { Box, Stack } from "@mui/material";

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

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `Product = ${chartData[index].product}`;
        },

        label: (tooltipItem: TooltipItem) => {
          return `TotalSales = ${chartData[tooltipItem.dataIndex].totalSales}`;
        },
        afterBody: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `TotalValue = ${chartData[index].totalValue}`;
        },
      },
      displayColors: false,
      backgroundColor: "#fff",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#ddd",
      borderWidth: 1,
      padding: 1,
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
    <Stack direction={"row"} justifyContent={"center"} gap={2}>
      <Box height={"350px"} width={"100%"}>
        <Bar options={options} data={data} />
      </Box>

      <Stack
        direction={"row"}
        alignItems={"start"}
        justifyContent={"space-between"}
        gap={0.5}
        pr={2}
      >
        <div
          className="h-[350px] w-[20px]"
          style={{
            backgroundImage:
              "linear-gradient(to top, #fff5eb,#fee6ce,#fdd0a2,#fdae6b,#fd8d3c,#f16913,#d94801,#a63603,#7f2704)",
          }}
        >
          &nbsp;
        </div>
        <Box
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
        </Box>
      </Stack>
    </Stack>
  );
};

export default BarChart;
