import BarChart from "./components/BarChart";
import GaugeChart from "./components/GaugeChart";
import { Stack, Button, Box } from "@mui/material";
import { useState } from "react";
import "./App.css";

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
            size="large"
            sx={{
              width: "200px",
              borderRadius: "12px",
              paddingY: 1.5,
              fontWeight: "bold",

              background: "var(--blue-light)",
              color: "var(--blue-dark)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              textTransform: "capitalize",
            }}
            onClick={() => setSelectedChart("bar")}
          >
            Bar Chart
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "200px",
              borderRadius: "12px",
              paddingY: 1.5,
              fontWeight: "bold",
              backgroundColor: "var(--green-light)",
              color: "var(--green-dark)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              textTransform: "capitalize",
            }}
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
