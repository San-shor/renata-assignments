import { Card, Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { type ReactNode } from "react";

interface CardComponentProps {
  icon: ReactNode;
  label: string;
  value: number | string;
}

const CardComponent = ({ icon, label, value }: CardComponentProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        width: 250,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
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
