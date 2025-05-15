import BarChart from "./components/BarChart";
import GaugeChart from "./components/GaugeChart";
import { Stack, Button, Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [selectedChart, setSelectedChart] = useState<"bar" | "gauge" | null>(
    null
  );

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
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: "200px" }}
            onClick={() => setSelectedChart("bar")}
          >
            Bar Chart
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: "200px" }}
            onClick={() => setSelectedChart("gauge")}
          >
            Gauge Chart
          </Button>
        </Stack>

        {selectedChart === "bar" && <BarChart />}
        {selectedChart === "gauge" && <GaugeChart />}
      </Stack>
    </Box>
  );
}

export default App;
