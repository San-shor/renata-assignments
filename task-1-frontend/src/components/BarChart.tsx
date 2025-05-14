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

        label: (tooltipItem:TooltipItem) => {
          return  `TotalSales= ${chartData[tooltipItem.dataIndex].totalSales}`;
        },
        afterBody: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `TotalValue= ${chartData[index].totalValue}`;
        },
      },
      displayColors: false, // Hide color box in tooltip
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
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
