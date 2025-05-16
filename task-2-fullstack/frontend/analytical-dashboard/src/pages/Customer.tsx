import CustomerTable from "../components/CustomerTable";
import { Container, Stack } from "@mui/material";
import SearchFilter from "../components/SearchFilter";

const Customer = () => {
  return (
    <Container maxWidth={false} sx={{ padding: "30px 64px 40px 64px" }}>
      <Stack gap={5}>
        <SearchFilter />
        <CustomerTable />
      </Stack>
    </Container>
  );
};

export default Customer;
