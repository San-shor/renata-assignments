import { Grid, Stack } from "@mui/material";
import CardComponent from "../components/Card";
import { customerData } from "../data/CustomerData";
import { BsPeopleFill, BsGenderAmbiguous } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { alpha } from "@mui/material/styles";

import ChartComponent from "../components/ChartComponent";
import { calculateAverageIncomePercentage, countGender } from "../utils/utils";
import FiltersBar from "../components/FilterBar";
import { useState } from "react";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    gender: "",
    division: "",
    maritalStatus: "",
  });

  // Apply filters
  const filteredData = customerData.filter((customer) => {
    return (
      (filters.gender
        ? customer.gender.toLowerCase() === filters.gender
        : true) &&
      (filters.division
        ? customer.division.toLowerCase() === filters.division
        : true) &&
      (filters.maritalStatus
        ? customer.maritalStatus.toLowerCase() === filters.maritalStatus
        : true)
    );
  });
  const totalCustomer = filteredData.length;
  console.log(filteredData);

  const avg_income = calculateAverageIncomePercentage(filteredData, 100000);
  const gender = countGender(filteredData);

  return (
    <Stack gap={5}>
      <Stack direction="row" spacing={4} alignItems="center">
        <FiltersBar
          label="Select Gender"
          menu={["Female", "Male"]}
          value={filters.gender}
          onChange={(value) => setFilters({ ...filters, gender: value })}
        />
        <FiltersBar
          label="Select Division"
          menu={["Dhaka", "Chattagram", "Sylhet"]}
          value={filters.division}
          onChange={(value) => setFilters({ ...filters, division: value })}
        />
        <FiltersBar
          label="Select Marital Status"
          menu={["Single", "Married", "Divorced"]}
          value={filters.maritalStatus}
          onChange={(value) => setFilters({ ...filters, maritalStatus: value })}
        />
      </Stack>

      <Grid container direction={"row"}>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<BsPeopleFill size={24} />}
            label="Total Customer"
            value={totalCustomer}
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                "#ffd666",
                0.2
              )}, ${alpha("#ffab00", 0.2)})`,
              color: "#7a4100",
            }}
          />
        </Grid>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<GrMoney size={24} />}
            label="Average Income"
            value={avg_income}
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                "#77ed8b",
                0.2
              )}, ${alpha("#22c55e", 0.2)})`,
              color: "#065e49",
            }}
          />
        </Grid>
        <Grid size={4}>
          {" "}
          <CardComponent
            icon={<BsGenderAmbiguous size={24} />}
            label="Gender Split"
            value={`Male: ${gender.Male} Female: ${gender.Female}`}
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                "#ffac82",
                0.2
              )}, ${alpha("#ff5630", 0.2)})`,
              color: "#7a0916",
            }}
          />
        </Grid>
      </Grid>
      <ChartComponent />
    </Stack>
  );
};

export default Dashboard;
