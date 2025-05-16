import CustomerTable from "../components/CustomerTable";
import { Container } from "@mui/material";

const Customer = () => {
  return (
    <Container maxWidth={false} sx={{ padding: "100px 64px 40px 64px" }}>
      <CustomerTable />
    </Container>
  );
};

export default Customer;
