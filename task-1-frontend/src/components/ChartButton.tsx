import { Button } from "@mui/material";
import { CHART_TYPES } from "../constants/constants";

const { BAR, GAUGE } = CHART_TYPES;

const ChartButton = ({
  chartType,
  onClick,
  isActive = false,
}: {
  chartType: typeof BAR | typeof GAUGE;
  onClick: (value: string | null) => void;
  isActive?: boolean;
}) => {
  return (
    <Button
      variant={`${isActive ? "contained" : "outlined"}`}
      size="large"
      sx={{ textTransform: "capitalize" }}
      onClick={() => onClick(chartType)}
    >
      {chartType} Chart
    </Button>
  );
};

export default ChartButton;
