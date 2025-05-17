import { Grid, Stack } from "@mui/material";
import CardComponent from "../components/Card";
import { customerData } from "../data/CustomerData";
import { BsPeopleFill, BsGenderAmbiguous } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { useTheme, alpha } from "@mui/material/styles";

import ChartComponent from "../components/ChartComponent";

const Dashboard = () => {
  const totalCustomer = customerData.length;
  const theme = useTheme();
  return (
    <Stack gap={5}>
      <Grid container direction={"row"}>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<BsPeopleFill size={24} />}
            label="Total Customer"
            value={totalCustomer}
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.light,
                0.2
              )}, ${alpha(theme.palette.primary.main, 0.2)})`,
            }}
          />
        </Grid>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<GrMoney size={24} />}
            label="Average Income"
            value={totalCustomer}
            sx={{
              color: theme.palette.primary.dark,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.success.light,
                0.2
              )}, ${alpha(theme.palette.success.main, 0.2)})`,
            }}
          />
        </Grid>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<BsGenderAmbiguous size={24} />}
            label="Gender Split"
            value={totalCustomer}
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.error.light,
                0.2
              )}, ${alpha(theme.palette.error.main, 0.2)})`,
            }}
          />
        </Grid>
      </Grid>
      <ChartComponent />
    </Stack>
  );
};

export default Dashboard;
