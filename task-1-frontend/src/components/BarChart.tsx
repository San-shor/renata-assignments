import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['ghh','dww','aaa','ooo','hgt','ytt','qzy','prp','eee','rtt'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [15,10,10,8,7,7,7,7,7,5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart = () => {
  return <div>
    <Bar options={options} data={data}/>
  </div>;
};

export default BarChart;
