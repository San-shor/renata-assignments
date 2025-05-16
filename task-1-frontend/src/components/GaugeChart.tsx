import { GaugeComponent } from "react-gauge-component";
import { useState } from "react";
import { gaugeChartData } from "../data/chartData";
import type { GaugeChartData } from "../type/chartdata";
import { Grid, Stack, Button, Typography } from "@mui/material";
import { formatNumber } from "../utils/formatNumber";
import { STATUS_THRESHOLD } from "../constants/constants";

const getStatus = (value: number): string => {
  const { LOW, MEDIUM } = STATUS_THRESHOLD;
  if (value <= LOW) return "Low";
  if (value <= MEDIUM) return "Medium";
  return "High";
};

const GaugeChart = () => {
  const [selectedData, setSelectedData] = useState<GaugeChartData | null>(null);

  const handleMonthClick = (data: GaugeChartData) => {
    setSelectedData(data);
  };
  return (
    <Grid container spacing={3} px={15}>
      <Grid size={3}>
        <Stack gap={2}>
          {gaugeChartData.map((data) => (
            <Button
              color={selectedData?.month === data.month ? "primary" : "inherit"}
              sx={{
                width: "150px",
                textTransform: "none",
                borderRadius: 2,
                backgroundColor:
                  selectedData?.month === data.month
                    ? "primary.main"
                    : "grey.300",
                color:
                  selectedData?.month === data.month ? "#fff" : "text.primary",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor:
                    selectedData?.month === data.month
                      ? "primary.dark"
                      : "grey.400",
                },
              }}
              onClick={() => handleMonthClick(data)}
            >
              <Typography variant="subtitle2" fontWeight={"bold"}>
                {data.month}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Grid>
      <Grid size={6}>
        <GaugeComponent
          type="radial"
          minValue={10000}
          maxValue={10000000}
          value={selectedData?.sales || 0}
          arc={{
            width: 0.1,
            padding: 0.03,
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
              formatTextValue: (val) => `${formatNumber(Number(val))}`,
              style: {
                fill: "#000",
              },
            },
            tickLabels: {
              defaultTickValueConfig: {
                formatTextValue: (val) => `${formatNumber(Number(val))}`,
              },
              ticks: [
                {
                  value: 10000,
                },
                {
                  value: 1000000,
                },
                {
                  value: 3000000,
                },
                {
                  value: 5000000,
                },
                {
                  value: 7000000,
                },
                {
                  value: 9000000,
                },
                {
                  value: 10000000,
                },
                {
                  value: 7000000,
                },
                {
                  value: 10000000,
                },
              ],
            },
          }}
        />
      </Grid>
      <Grid size={3}>
        <Stack direction={"row"} alignItems={"start"} gap={1}>
          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              fontWeight: 500,
              textTransform: "capitalize",
              cursor: "default",
            }}
            variant="contained"
            disableElevation
            disableRipple
          >
            Status:
          </Button>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={"textSecondary"}
            textAlign={"center"}
          >
            {selectedData
              ? ` ${getStatus(selectedData.sales)}`
              : "Select a month to view the status"}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default GaugeChart;
