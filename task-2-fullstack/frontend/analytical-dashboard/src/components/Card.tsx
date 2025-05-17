import { Card, Box, Typography, Stack } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import { type ReactNode } from "react";

interface CardComponentProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  sx: object;
}

const CardComponent = ({ icon, label, value, sx }: CardComponentProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: `0 0 2px 0 ${alpha(
          theme.palette.grey[500],
          0.2
        )}, 0 12px 24px -4px ${alpha(theme.palette.grey[500], 0.12)}`,
        width: 250,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        ...sx,
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <Box
          sx={{
            p: 1.2,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: theme.palette.text.secondary }}
        >
          {label}
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          {value}
        </Typography>
      </Stack>
    </Card>
  );
};

export default CardComponent;
