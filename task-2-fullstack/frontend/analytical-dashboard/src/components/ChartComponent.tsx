import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { Card, CardHeader, Box, Grid } from "@mui/material";
import {
  getAverageIncomeByDivision,
  countMaritalStatuses,
} from "../utils/utils";
import { customerData } from "../data/CustomerData";
import { alpha } from "@mui/material";
import ScatterChart from "./chart/ScatterChart";
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

export default function ChartComponent() {
  const barChartData = getAverageIncomeByDivision(customerData);
  const piChartData = countMaritalStatuses(customerData);
  console.log(piChartData);
  const barData = {
    labels: barChartData.map((data) => data.division),

    datasets: [
      {
        label: "Avg Income",
        data: barChartData.map((data) => data.averageIncome),
        backgroundColor: "rgba(72, 187, 120, 0.6)",
      },
    ],
  };
  const options = {
    responsive: true,

    scales: {
      x: {
        title: {
          display: true,
          text: "Division",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Avg Income",
        },
        beginAtZero: true,
        grid: {
          color: "#e0e0e0",
        },
      },
    },
    maintainAspectRatio: false,
  };

  const pieData = {
    labels: ["Single", "Married", "Divorced"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [piChartData.Single, piChartData.Married, piChartData.Divorced],
        backgroundColor: ["#7a0916", "#7a4100", "#003768"],
      },
    ],
  };

  return (
    <>
      <Grid container>
        <Grid size={12}>
          <Card
            sx={{
              boxShadow: `0 0 2px 0 ${alpha(
                "#919EAB",
                0.2
              )}, 0 12px 24px -4px ${alpha("#919EAB", 0.12)}`,
              height: "500px",
              p: 5,
            }}
          >
            <CardHeader title={"Income Distribution"} />
            <Box height={"400px"} width={"700px"}>
              <Bar data={barData} options={options} />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={6}>
          <Card
            sx={{
              boxShadow: `0 0 2px 0 ${alpha(
                "#919EAB",
                0.2
              )}, 0 12px 24px -4px ${alpha("#919EAB", 0.12)}`,
              // height: "250px",
              // width: "250px",
              p: 5,
            }}
          >
            <CardHeader title={"Income Distribution"}></CardHeader>
            <Box height={"250px"}>
              <Pie data={pieData} />
            </Box>
          </Card>
        </Grid>
        <Grid size={6}>
          <ScatterChart />
        </Grid>
      </Grid>
    </>
  );
}
