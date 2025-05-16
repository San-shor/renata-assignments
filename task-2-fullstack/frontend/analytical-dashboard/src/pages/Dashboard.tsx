import { Grid } from "@mui/material";
import CardComponent from "../components/Card";
import { customerData } from "../data/CustomerData";
import { BsPeopleFill, BsGenderAmbiguous } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";

const Dashboard = () => {
  const totalCustomer = customerData.length;

  return (
    <Grid container direction={"row"} gap={5}>
      <Grid size={4}>
        {" "}
        <CardComponent
          icon={<BsPeopleFill size={24} />}
          label="Total Customer"
          value={totalCustomer}
        />
      </Grid>
      <Grid size={4}>
        {" "}
        <CardComponent
          icon={<GrMoney size={24} />}
          label="Average Income"
          value={totalCustomer}
        />
      </Grid>
      <Grid size={4}>
        {" "}
        <CardComponent
          icon={<BsGenderAmbiguous size={24} />}
          label="Gender Split"
          value={totalCustomer}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
