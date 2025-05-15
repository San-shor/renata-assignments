import { GaugeComponent } from "react-gauge-component";
import { useState } from "react";
import { gaugeChartData } from "../data/chartData";
import type { GaugeChartData } from "../type/chartdata";
import { Grid, Stack, Button, Typography } from "@mui/material";

const getStatus = (value: number): string => {
  if (value < 3000000) return "Low";
  if (value < 7000000) return "Medium";
  return "High";
};

const GaugeChart = () => {
  const [selectedData, setSelectedData] = useState<GaugeChartData | null>(null);

  const handleMonthClick = (data: GaugeChartData) => {
    setSelectedData(data);
  };
  return (
    <Grid container spacing={3}>
      <Grid size={3}>
        {gaugeChartData.map((data) => (
          <Stack spacing={1}>
            <button
              className="bg-gray-300 shadow-sm text-sm font-medium  py-2 px-4 rounded-md"
              onClick={() => handleMonthClick(data)}
            >
              {data.month}
            </button>
          </Stack>
        ))}
      </Grid>
      <Grid size={4}>
        <GaugeComponent
          type="radial"
          minValue={0}
          maxValue={10000000}
          value={selectedData?.sales || 0}
          arc={{
            width: 0.1,
            padding: 0.002,
            cornerRadius: 1,
            subArcs: [
              {
                limit: 3000000,
                color: "#f44336",
                tooltip: {
                  text: "Low",
                },
              },
              {
                limit: 7000000,
                color: "#ff9800",
                tooltip: {
                  text: "Medium",
                },
              },
              {
                limit: 10000000,
                color: "#2196f3",
                tooltip: {
                  text: "High",
                },
              },
            ],
          }}
          labels={{
            valueLabel: {
              formatTextValue: (val) =>
                `${(Number(val) / 1000).toLocaleString()}k`,
            },
          }}
        />
      </Grid>
      <Grid size={4}>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Button variant="contained">Status</Button>
          <Typography variant="subtitle1" fontWeight={600}>
            {selectedData
              ? `Status for ${selectedData.month}: ${getStatus(
                  selectedData.sales
                )}`
              : "Select a month to view the status"}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default GaugeChart;
