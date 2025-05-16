import { Button, type SxProps, type Theme } from "@mui/material";
import { CHART_TYPES } from "../constants/constants";

const { BAR, GAUGE } = CHART_TYPES;

const ChartButton = ({
  chartType,
  onClick,
  sx,
}: {
  chartType: typeof BAR | typeof GAUGE;
  onClick: (value: React.SetStateAction<string | null>) => void;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={
        sx
          ? {
              ...sx,
              width: "200px",
              borderRadius: "12px",
              paddingY: 1.5,
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              textTransform: "capitalize",
            }
          : {}
      }
      onClick={() => onClick(chartType)}
    >
      {chartType} Chart
    </Button>
  );
};

export default ChartButton;
