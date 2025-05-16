import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import { Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};
export default Layout;
