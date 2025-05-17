import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import { Container, Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Container sx={{ pt: 2 }}>
        <Outlet />
      </Container>
    </Stack>
  );
};
export default Layout;
