import BarChart from "./components/BarChart";
import GaugeChart from "./components/GaugeChart";
import { Stack, Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { CHART_TYPES } from "./constants/constants";
import ChartButton from "./components/ChartButton";

function App() {
  const { BAR, GAUGE } = CHART_TYPES;
  const [selectedChart, setSelectedChart] = useState<
    typeof BAR | typeof GAUGE | null
  >(null);

  return (
    <Box maxWidth={"calc(100vw - 100px)"} margin={"auto"}>
      <Stack gap={4} padding={2}>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ChartButton
            chartType={BAR}
            onClick={setSelectedChart}
            isActive={selectedChart === BAR}
          />
          <ChartButton
            chartType={GAUGE}
            onClick={setSelectedChart}
            isActive={selectedChart === GAUGE}
          />
        </Stack>

        {selectedChart === BAR && <BarChart />}
        {selectedChart === GAUGE && <GaugeChart />}
      </Stack>
    </Box>
  );
}

export default App;
