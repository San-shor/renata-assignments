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
        afterBody: (tooltipItems: TooltipItem[]) => {
          const index = tooltipItems[0].dataIndex;
          return `TotalValue: ${chartData[index].totalValue}`;
        },
      },
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
    },
    y: {
      title: {
        display: true,
        text: "TotalSales",
      },
      beginAtZero: true,
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
