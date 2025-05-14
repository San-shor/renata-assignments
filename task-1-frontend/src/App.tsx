import BarChart from "./components/BarChart";
import GaugeChart from "./components/GaugeChart";
import { Stack, Button } from "@mui/material";
import {  useState } from "react";

function App() {
 
  const [selectedChart, setSelectedChart] = useState<"bar" | "gauge" | null>(null);
 
  
 
  return (
  <>
    <Stack
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      padding={2}
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
    
  </>
  );
}

export default App;
