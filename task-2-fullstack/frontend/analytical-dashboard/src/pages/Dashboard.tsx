import { Button, Grid, Stack } from "@mui/material";
import CardComponent from "../components/Card";
import { customerData } from "../data/CustomerData";
import { BsPeopleFill, BsGenderAmbiguous } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { alpha } from "@mui/material/styles";

import ChartComponent from "../components/ChartComponent";
import { calculateAverageIncomePercentage, countGender } from "../utils/utils";
import FiltersBar from "../components/FilterBar";
import { useEffect, useState } from "react";
import type { CustomerData, TFilter } from "../type/type";
import { DIVISIONS } from "../constants/constants";

const emptyFilter: TFilter = {
  gender: "",
  division: "",
  maritalStatus: "",
};

const Dashboard = () => {
  const [filters, setFilters] = useState<TFilter>(emptyFilter);

  const [filteredData, setFilteredData] =
    useState<CustomerData[]>(customerData);

  useEffect(() => {
    const newFilteredData = customerData.filter((customer) => {
      return (
        (filters.gender
          ? customer.gender.toLowerCase() === filters.gender.toLowerCase()
          : true) &&
        (filters.division
          ? customer.division.toLowerCase() === filters.division.toLowerCase()
          : true) &&
        (filters.maritalStatus
          ? customer.maritalStatus.toLowerCase() ===
            filters.maritalStatus.toLowerCase()
          : true)
      );
    });

    setFilteredData(newFilteredData);
    return () => {
      setFilteredData([]);
    };
  }, [filters]);

  const totalCustomer = filteredData.length;

  const avg_income = calculateAverageIncomePercentage(filteredData);
  const gender = countGender(filteredData);

  return (
    <Stack gap={5}>
      <Stack direction="row" spacing={4} alignItems="center">
        <FiltersBar
          label="Select Gender"
          menu={["F", "M"]}
          value={filters.gender}
          onChange={(value) => setFilters({ ...filters, gender: value })}
        />
        <FiltersBar
          label="Select Division"
          menu={Object.values(DIVISIONS)}
          value={filters.division}
          onChange={(value) => setFilters({ ...filters, division: value })}
        />
        <FiltersBar
          label="Select Marital Status"
          menu={["Single", "Married", "Divorced"]}
          value={filters.maritalStatus}
          onChange={(value) => setFilters({ ...filters, maritalStatus: value })}
        />
        <Button onClick={() => setFilters(emptyFilter)}>Reset</Button>
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
            value={`${avg_income}BDT`}
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
